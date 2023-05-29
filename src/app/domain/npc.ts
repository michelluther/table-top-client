import { Combatant } from "./fight";

export class NPCType {

    constructor(public id: string, public name: string){}
}

export class Creature implements Combatant {
    
    selectedForFight: boolean;

    constructor(public name: string, public isGood: boolean, public currentLife: number, private _attack: number, private _parade: number, private _initiative: number, private _damage: string ){}

    get initiative(): number {
        return this.initiative + Math.floor(Math.random()*6+1); 
    }
    get attack(): number {
        return this._attack
    }
    get parade(): number {
        return this._parade
    }
    get damage(): string {
        return this._damage
    }
    
}