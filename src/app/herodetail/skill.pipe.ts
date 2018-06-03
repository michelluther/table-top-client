import { Pipe, PipeTransform } from '@angular/core';
import { ActualSkill } from '../domain/actualSkill';
import { ActualSkillGroup } from '../domain/actualSkillGroup';
import { SkillGroup } from '../domain/skillgroup';

@Pipe({
    name: 'MatchesSearchTerm'
})

export class MatchesSearchTerm implements PipeTransform {

    transform(skills: Array<ActualSkill>, searchTerm: string): Array<ActualSkill> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skills.filter(skill => {
                return (skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
            })
        } else {
            return skills;
        }
    }
}

@Pipe({
    name: 'MatchesSearchTermChildren'
})

export class MatchesSearchTermChildren implements PipeTransform {

    transform(skillGroups: Array<ActualSkillGroup>, searchTerm: string): Array<ActualSkillGroup> {
        if (searchTerm != '' && searchTerm !== undefined) {
            return skillGroups.filter(SkillGroup => {
                return (SkillGroup.getSkills().filter(skill => skill.getSkill().name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)).length > 0;
            })
        } else {
            return skillGroups;
        }
    }
}