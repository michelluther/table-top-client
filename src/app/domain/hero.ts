import { Skill } from "./skill";
import { SkillGroup } from "./skillgroup";
import { SkillService } from "./skills.service";
import * as _ from 'lodash';
import { ActualSkill } from "./actualSkill";
import { ActualSkillGroup } from "./actualSkillGroup";
import { ActualSpell } from "./actualSpell";
import { ActualSpellGroup } from "./actualSpellGroup";
import { ActualAttribute } from "./actualAttribute";
import { Component, ChangeDetectorRef } from '@angular/core';
import { Weapon } from './weapon'
import { WeaponSkillDistribution } from "./weaponSkillDistribution";
import { SpellService } from "./spells.service";
import { AttributeService } from './attribute.service'
import { SpellGroup } from "./spellGroup";
import { HeroType } from "./heroType";

export class Hero {

  id: number;

  name: String;
  race: Object;
  size: number;
  gender: String;

  culture: number;

  avatar_small: String;

  experience: number;

  mut: number;
  charisma: number;
  fingerfertigkeit: number;
  gewandheit: number;
  intuition: number;
  koerperkraft: number;
  konstitution: number;

  life: number;
  life_lost: number;

  magicEnergy: number;
  magicEnergy_lost: number;

  experience_used: number;
  hero_type: HeroType;
  ini_basis: number;
  klugheit: number;
  magieresistenz: number;
  social_rank: number;

  knowsMagic: Boolean;

  attack_basis: number;
  parade_basis: number;
  fernkampf_basis: number;

  currentAttack: number;
  currentParade: number;

  attributes: Array<ActualAttribute>;
  
  skills: Array<ActualSkill>;
  skillGroups: ActualSkillGroup[];

  spells: Array<ActualSpell>;
  spellGroups: ActualSpellGroup[];

  weapons: Array<Weapon>
  _currentWeapon: Weapon

  weaponSkillDistributions: Array<WeaponSkillDistribution>

  constructor(private skillService: SkillService, private spellService: SpellService, private attributeService: AttributeService) {
    this.skillService = skillService;
    this.weapons = []
  };

  setData(dataObject: Object): Hero {
    this.attack_basis = dataObject['attack_basis'];
    this.parade_basis = dataObject['parade_basis'];
    this.fernkampf_basis = dataObject['fernkampf_basis']

    this.life_lost = dataObject['life_lost'];
    this.avatar_small = dataObject['avatar_small'];

    this.culture = dataObject['culture'];
    this.experience = dataObject['experience'];
    this.experience_used = dataObject['experience_used'];
    this.gender = dataObject['gender'];
    this.hero_type = dataObject['hero_type'];
    this.id = dataObject['id'];
    this.ini_basis = dataObject['ini_basis'];
    this.knowsMagic = dataObject['knows_magic'];

    this.attributes = [
      new ActualAttribute(dataObject['MU'], this.attributeService.attributes.get('MU')) ,
      new ActualAttribute(dataObject['CH'], this.attributeService.attributes.get('CH')) ,
      new ActualAttribute(dataObject['GE'], this.attributeService.attributes.get('GE')) ,
      new ActualAttribute(dataObject['IN'], this.attributeService.attributes.get('IN')) ,
      new ActualAttribute(dataObject['KK'], this.attributeService.attributes.get('KK')) ,
      new ActualAttribute(dataObject['KL'], this.attributeService.attributes.get('KL')) ,
      new ActualAttribute(dataObject['FF'], this.attributeService.attributes.get('FF')) ,
      new ActualAttribute(dataObject['KO'], this.attributeService.attributes.get('KO'))
    ];

    this.life = dataObject['life'];
    this.magicEnergy = dataObject['magic_energy'];
    this.magicEnergy_lost = dataObject['magic_energy_lost'];
    this.magieresistenz = dataObject['magieresistenz'];
    this.name = dataObject['name'];
    this.race = dataObject['race'];
    this.size = dataObject['size'];
    this.social_rank = dataObject['social_rank']

    this.weapons = []

    this.weaponSkillDistributions = dataObject['weaponSkillDistributions'].map(weaponSkillDistribution => {
      return new WeaponSkillDistribution(weaponSkillDistribution.skill, weaponSkillDistribution.attack, weaponSkillDistribution.parade)
    })

    this.structureSkills(dataObject['skills'], dataObject['weaponSkillDistributions'], dataObject['weapons']);
    if(this.knowsMagic){
      this.structureSpells(dataObject['spells']);
    }
    return this;
  }

  structureSkills(actualSkillsOfHero: Array<Object>, weaponSkillDistributions: Array<Object>, weapons: Array<Object>): void {

    
    let skillsPromise = Promise.all([
      this.skillService.getSkillGroups(),
      this.skillService.getSkills()
    ]).then(skillGroupsAndSkills => {
      this.skillGroups = new Array<ActualSkillGroup>();
      let skillGroups = skillGroupsAndSkills[0];
      let allSkills = skillGroupsAndSkills[1];
      this.skills = [];

      allSkills.forEach(skill => {
        let actualSkill = _.find(actualSkillsOfHero, actualSkillData => { return skill.id === actualSkillData['id'] }) // can be undefined, the hero does not have the skill
        let skillSkillGroup = _.find(skillGroups, skillGroup => { return skill.skillGroupId == skillGroup.id });
        this.skills.push(new ActualSkill(actualSkill, this, skill, skillSkillGroup));
      })
      // skills.forEach(actualSkill => {
      //   let generalSkill = _.find(allSkills, finder => { return finder.id === actualSkill['id'] })
      //   let skillSkillGroup = _.find(skillGroups, skillGroup => { return generalSkill.skillGroupId == skillGroup.id });
      //   this.skills.push(new ActualSkill(actualSkill, this, generalSkill, skillSkillGroup));
      // })

      skillGroups.forEach(skillGroup => {
        let skills = _.filter(this.skills, actualSkill => {
          return actualSkill.getSkill().skillGroupId == skillGroup.id
        });
        this.skillGroups.push(new ActualSkillGroup(skillGroup, skills));
      })

      weapons.forEach(weapon => {
        this.weapons.push(new Weapon(weapon['name'],
          weapon['tp_dice'],
          weapon['tp_add_points'],
          _.find(allSkills, skill => {
            return skill.id === weapon['skill']
          })))
      })
      this.currentWeapon = this.weapons[0]
    });

  }

  structureSpells(actualSpellsOfHero: Array<Object>) : void {
    const spellsPromise = Promise.all([
      this.spellService.getSpells(),
      this.spellService.getSpellGroups()
    ]).then(spellsAndSpellGroups => {

      this.spellGroups = new Array<ActualSpellGroup>();
      this.spells = new Array<ActualSpell>();
      
      const allSpells = spellsAndSpellGroups[0]
      const spellGroups = spellsAndSpellGroups[1]



      spellGroups.forEach(spellGroup => {
        this.spellGroups.push(new ActualSpellGroup(spellGroup, []));
      })

      allSpells.forEach(spell => {
        let actualSpellDataObject = actualSpellsOfHero.find(actualSpellData => {
          return spell.id === actualSpellData['id']
        })
        let spellGroupOfSpell = this.spellGroups.find(spellGroup => {
          return spellGroup.getSpellGroup().id === spell.spellGroupId
        })
        let actualSpell = new ActualSpell(actualSpellDataObject, this, spell, spellGroupOfSpell.getSpellGroup())
        this.spells.push(actualSpell)
        spellGroupOfSpell.getSpells().push(actualSpell)
      });

    })
  }

  _getDistributionOfSkill(weaponSkill: Skill) {
    return this.weaponSkillDistributions.find(distribution => {
      return distribution.skillId == weaponSkill.id
    })
  }

  getAttribute(id: String){
    return this.attributes.find(attribute => attribute.attribute.id === id)
  }

  set currentWeapon(weapon: Weapon) {
    this._currentWeapon = weapon
    const skillDistribution = this._getDistributionOfSkill(weapon.skill)

    this.currentAttack = skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis
    this.currentParade = skillDistribution ? this.parade_basis + skillDistribution.parade : this.parade_basis
  }

  get currentWeapon() {
    return this._currentWeapon
  }

  get currentWeaponDamageText(): string {
    return this._currentWeapon ? this._currentWeapon.damageText : '0'
  }

  get currentLife(): Number {
    return this.life - this.life_lost
  }

  get currentMagicEnergy(): Number {
    return this.magicEnergy - this.magicEnergy_lost
  }

  getAttackOfWeaponSkill(weaponSkill:Skill): Number{
    const skillDistribution = this._getDistributionOfSkill(weaponSkill)
    return skillDistribution ? this.attack_basis + skillDistribution.attack : this.attack_basis
  }

  
  getParadeOfWeaponSkill(weaponSkill:Skill): Number{
    const skillDistribution = this._getDistributionOfSkill(weaponSkill)
    return skillDistribution ? this.parade_basis + skillDistribution.attack : this.parade_basis
  }
}