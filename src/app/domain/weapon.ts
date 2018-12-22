import { Skill } from "./skill";

export class Weapon {

    constructor(public name: string, public damageDice: Number, public damageAddPoints: Number, public skill: Skill = null) {

    }

    get damageText(): string {
        return this.damageDice.toString() + 'W6+' + this.damageAddPoints.toString()
    }

}