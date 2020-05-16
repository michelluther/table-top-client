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

import { Router } from '@angular/router';

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
	public open: boolean;

	constructor(
		private router: Router
	) {
		this.baseUrl = 'http://' + window.location.hostname + ':8000'; 
	}


	ngOnInit(): void {
	}

	gotoList(): void {
		this.router.navigate(['/heroes']);
	}

	toggle(): void {
		this.open = !this.open;
	}

}