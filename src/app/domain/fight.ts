import { Character } from "./adventure.service";


export class Fight {
    private _foes: Array<Character>;

    get foes(): Array<Character> {
        return this._foes
    } 
}