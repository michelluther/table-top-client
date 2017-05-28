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
  experience_used: number;
  hero_type: Object;
  ini_basis: number;
  klugheit: number;
  magieresistenz: number;
  social_rank: number;

  attack_basis: number;
  parade_basis: number;

  skills: Array<Object>;

  constructor(dataObject: Object) {
    this.attack_basis = dataObject['attack_basis'];
    this.parade_basis = dataObject['parade_basis'];

    this.life_lost = dataObject['life_lost'];
    this.avatar_small = dataObject['avatar_small'];

    this.charisma = dataObject['charisma'];
    this.culture = dataObject['culture'];
    this.experience = dataObject['experience'];
    this.experience_used = dataObject['experience_used'];
    this.fingerfertigkeit = dataObject['fingerfertigkeit'];
    this.gender = dataObject['gender'];
    this.gewandheit = dataObject['gewandheit'];
    this.hero_type = dataObject['hero_type'];
    this.id = dataObject['id'];
    this.ini_basis = dataObject['ini_basis'];
    this.intuition = dataObject['intuition'];
    this.klugheit = dataObject['klugheit'];
    this.koerperkraft = dataObject['koerperkraft'];
    this.konstitution = dataObject['konstitution'];
    this.life = dataObject['life'];
    this.magieresistenz = dataObject['magieresistenz'];
    this.mut = dataObject['mut'];
    this.name = dataObject['name'];
    this.race = dataObject['race'];
    this.size = dataObject['size'];
    this.skills = dataObject['skills'];
    this.social_rank = dataObject['social_rank']

  }
}