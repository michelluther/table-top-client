import { Injectable } from '@angular/core';
import { Attribute } from './attribute'


@Injectable()
export class AttributeService {

	private attributesConfigured:Map<String, Attribute>

	constructor() { 
		this.attributesConfigured = new Map<String, Attribute>([
		['KK', new Attribute('KK', 'Körperkraft')],
        ['KO', new Attribute('KO', 'Konstitution')],
        ['KL', new Attribute('KL', 'Klugheit')],
		['CH', new Attribute('CH', 'Charisma')],
        ['FF', new Attribute('FF', 'Fingerfertigkeit')],
        ['GE', new Attribute('GE', 'Gewandheit')],
        ['MU', new Attribute('MU', 'Mut')],
        ['IN', new Attribute('IN', 'Intuition')]
    ])
	}

	get attributes():Map<String, Attribute> {
		return this.attributesConfigured
	}

}