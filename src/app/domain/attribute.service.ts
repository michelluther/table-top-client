import { Injectable } from '@angular/core';
import { Attribute } from './attribute'


@Injectable()
export class AttributeService {

	private attributesConfigured:Map<String, Attribute>

	constructor() { 
		this.attributesConfigured = new Map<String, Attribute>([
		['mut', new Attribute('mut', 'Mut', 'MU')],
        ['klugheit', new Attribute('klugheit', 'Klugheit', 'KL')],
        ['intuition', new Attribute('intuition', 'Intuition', 'IN')],
		['charisma', new Attribute('charisma', 'Charisma', 'CH')],
		['fingerfertigkeit', new Attribute('fingerfertigkeit', 'Fingerfertigkeit', 'FF')],
        ['gewandheit', new Attribute('gewandheit', 'Gewandheit', 'GE')],
        ['konstitution', new Attribute('konstitution', 'Konstitution', 'KO')],
        ['koerperkraft', new Attribute('koerperkraft', 'Körperkraft', 'KK')]
    ])
	}

	get attributes():Map<String, Attribute> {
		return this.attributesConfigured
	}

}