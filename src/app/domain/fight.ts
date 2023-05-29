import { Character } from "./adventure.service";


export class Fight {
    private _foes: Array<Character>;

    get foes(): Array<Character> {
        return this._foes
    } 
}

export interface Combatant {

    isGood: boolean
    currentLife: number
    name: string
    selectedForFight: boolean

    get initiative(): number

    get attack(): number

    get parade(): number

    get damage(): string

}