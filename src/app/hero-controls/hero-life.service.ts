import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Armor } from 'app/domain/armor';
import { InventoryItem } from 'app/domain/inventoryItem';
import { Weapon } from 'app/domain/weapon';
import { ToastrService } from 'ngx-toastr';
// import { Rx } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Rx';
import { HeroService } from "./../domain/hero.service";
import { SkillService } from "./../domain/skills.service";




@Injectable()
export class HeroLifeService {

    private wsUrl = 'ws://' + window.location.hostname + ':8000/heroes';
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: WebSocket;
    public heroSubject: Subject<MessageEvent>;
    private heroService: HeroService;
    private connectionInterval: number;

    private currentlyConnected: boolean = false;

    constructor(private http: Http, heroService: HeroService, private toastr: ToastrService, private skillService: SkillService) {
        this.heroService = heroService;
        this.createWebsocket();
    }

    private createWebsocket(): void {
        try {
            this.socket = new WebSocket(this.wsUrl);
            this.heroSubject = new Subject();
            this.heroSubject.subscribe(this.handleIncommingMessage.bind(this))
            this.socket.onmessage = (evt => this.heroSubject.next(evt));
            this.socket.onopen = (event) => {
                this.currentlyConnected = true;
                this.toastr.success('Du bist online.')
                clearInterval(this.connectionInterval)
            }
            this.socket.onerror = error => {
                if (this.socket.readyState === this.socket.OPEN) {
                    this.toastr.error('Es gab einen Fehler', 'Wir schließen nun die Verbindung')
                }
            }
            this.socket.addEventListener('error', event => {
                console.log('hey')
                event.stopPropagation()
            }
            )
            this.socket.addEventListener('close', event => {
                if (this.currentlyConnected) {
                    this.currentlyConnected = false;
                    this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden')
                    this.connectionInterval = window.setInterval(this.createWebsocket.bind(this), 4000)
                }
            })
        } catch (error) {
            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler')
        }
    }

    public sendUpate(data): void {
        try {

            this.socket.send(JSON.stringify(data));
        } catch (error) {

            this.toastr.error('bisher hat es noch nicht geklappt', 'Fehler')
        }
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
                    hero.getAttribute(messageData['attribute']).value = messageData['value']
                    this.toastr.success(`${hero.name} hat die Eigenschaft ${hero.getAttribute(messageData['attribute']).name} gesteigert!`, 'Bäähm!')
                    break;
                case 'addWeapon':
                    this.skillService.getSkill(messageData['skill']).then(skill => {
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
                    this.toastr.success(`${hero.name} hat eine Waffe weniger!`, 'Hui!!')
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
                    this.toastr.success(`${hero.name} hat was neues: ${messageData['name']}!`, 'Zack!')
                    break;
                case 'deleteInventoryItem':
                    const itemName = hero.getInventoryItemById(messageData['inventoryItemId']).name;
                    hero.deleteInventoryItemById(messageData['inventoryItemId']);
                    this.toastr.success(`${hero.name} hat etwas abgegeben: ${itemName}!`, 'Zack!')
                    break;
                case 'updateInventoryItem':
                    hero.updateInventoryItemAmount(messageData['inventoryItemId'], messageData['amount']);
                    break;
                case 'addExperiencePoints':
                    hero.experience = hero.experience + messageData['additionalPoints'];
                    this.toastr.success(`${hero.name} hat ${messageData['additionalPoints']} neue Abenteuerpunkte!`, 'Hurrrraaaah!')
                case 'updateAccountEntry':
                    hero.money[messageData['unit']] = messageData['amount'];
                default:
                    break;
            }
        })
    }

}
