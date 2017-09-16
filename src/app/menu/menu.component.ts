import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

/***
 *
 *
 */

@Component({
	selector: 'menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
  	
})
export class Menu implements OnInit {

	private baseUrl: String;

	constructor(
	) {
	this.baseUrl = 'http://' + window.location.hostname + ':8000'; 
}


	ngOnInit(): void {
	}

}