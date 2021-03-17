import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HeroService } from "./../domain/hero.service";
import { SkillService } from "./../domain/skills.service";
import * as _ from 'lodash';

import { Subject, Observer, Observable, Subscription } from 'rxjs/Rx';
// import { Rx } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ToastrService } from 'ngx-toastr';

import { Weapon } from 'app/domain/weapon';
import { Armor } from 'app/domain/armor';
import { InventoryItem } from 'app/domain/inventoryItem';

@Injectable()
export class HeroLifeService {

    private wsUrl = 'ws://' + window.location.hostname + ':8000/heroes';
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: WebSocket;
    public heroSubject: Subject<MessageEvent>;
    private heroService: HeroService;
    private connectionInterval: number;

    constructor(private http: Http, heroService: HeroService, private toastr: ToastrService, private skillService:SkillService) {
        this.heroService = heroService;
        this.createWebsocket();
        this.heroSubject = new Subject();
        this.heroSubject.subscribe(this.handleIncommingMessage.bind(this))
        this.socket.onmessage = (evt => this.heroSubject.next(evt));
        this.socket.onopen = (event) => {
            this.toastr.success('Du bist online.')
        }
        this.socket.onerror = error => {
            console.log('baaaad')
        }
        this.socket.addEventListener('error', event => {
            console.log('hey')
            event.stopPropagation()
            }
            )
        this.socket.addEventListener('close', event => {
            this.connectionInterval = window.setInterval(this.createWebsocket.bind(this), 2000)
        })
    }

    private pollForConnection(): void {
        this.socket.send(JSON.stringify({type: 'poll'}))
    }

    private handleConnectionError(error):void {
        this.toastr.error('Ein Fehler bei der Kommunikation!','Mist')
    }

    private createWebsocket(): void {
        this.socket = new WebSocket(this.wsUrl);
        if(this.socket) clearInterval(this.connectionInterval)
        
    }

    public sendUpate(data): void {
        this.socket.send(JSON.stringify(data));
    }

    public handleIncommingMessage(message): void {
        let messageData = JSON.parse(message.data);
        
        this.heroService.getHero(messageData.heroId).then(hero => {
            switch (messageData.type) {
                case 'lifeUpdate':
                    hero.life_lost = hero.life_lost - messageData.value;
                    break;
                case 'magicUpdate':
                    hero.magicEnergy_lost = hero.magicEnergy_lost - messageData.value;
                    break;
                case 'updateAttribute':
                    // TODO: update hero's attribute
                    break;
                case 'addWeapon':
                    this.skillService.getSkill(messageData['skill']).then(skill=>{
                        hero.addWeapon(new Weapon(
                            messageData['weaponId'],
                            messageData['weaponName'],
                            messageData['damageDice'],
                            messageData['damageAddPoints'],
                            messageData['extraPointsFromKk'],
                            skill
                        ))   
                        this.toastr.success(`${hero.name} hat eine Waffe mehr!`, 'Bäähm!')
                    })
                    break;
                case 'deleteWeapon':
                    hero.deleteWeaponById(messageData['weaponId']);
                    break;
                case 'addArmor':
                    hero.addArmor(new Armor(
                        messageData['armorId'],
                        messageData['armorName'],
                        messageData['armorRS'],
                        messageData['armorBE'],
                        ));
                    this.toastr.success(`${hero.name} ist nun besser gerüstet!`, 'Zack!')
                    break;
                case 'deleteArmor':
                    hero.deleteArmorById(messageData['armorId']);
                    this.toastr.success(`${hero.name} muss nun aufpassen, er hat weniger Schutz!`, 'Zack!')
                    break;
                case 'addInventoryItem':
                    hero.addInventoryItem(new InventoryItem(messageData['inventoryId'], messageData['name'], messageData['amount'], messageData['weight']))
                    break;
                case 'deleteInventoryItem':
                    hero.deleteInventoryItemById(messageData['inventoryItemId']);
                    break;
                case 'updateInventoryItem':
                    hero.updateInventoryItemAmount(messageData['inventoryItemId'], messageData['amount']);
                    break;
                default:
                    break;
            }
        })
    }

}
