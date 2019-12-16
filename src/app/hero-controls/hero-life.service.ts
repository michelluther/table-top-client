import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { HeroService } from "./../domain/hero.service";

import { Subject, Observer, Observable, Subscription } from 'rxjs/Rx';
// import { Rx } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroLifeService {

    private wsUrl = 'ws://' + window.location.hostname + ':8000/heroes';
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: WebSocket;
    public lifeSubject: Subject<MessageEvent>;
    private heroService: HeroService;

    constructor(private http: Http, heroService: HeroService) {
        this.heroService = heroService;
        this.socket = this.createWebsocket();
        this.lifeSubject = new Subject();
        this.lifeSubject.subscribe(this.updateHeroLife.bind(this))
        this.socket.onmessage = (evt => this.lifeSubject.next(evt));
    }

    private createWebsocket(): WebSocket {
        let ws = new WebSocket(this.wsUrl);
        return ws;
    }

    public sendUpate(data): void {
        this.socket.send(JSON.stringify(data));
    }

    public updateHeroLife(message): void {
        let messageData = JSON.parse(message.data);
        this.heroService.getHero(messageData.heroId).then(hero => {
            switch (messageData.type) {
                case 'lifeUpdate':
                    hero.life_lost = hero.life_lost - messageData.value;
                    break;
                case 'magicUpdate':
                        hero.magicEnergy_lost = hero.magicEnergy_lost - messageData.value;
                        break;
                default:
                    break;
            }
        })
    }

}
