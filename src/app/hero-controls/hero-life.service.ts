import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Subject, Observer, Observable, Subscription } from 'rxjs/Rx';
// import { Rx } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroLifeService {

    private wsUrl = 'ws://' + window.location.hostname + ':8000';
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: WebSocket;
    public lifeSubject: Subject<MessageEvent>;


    // private socket


    constructor(private http: Http) {

        console.log('haeh?');
        this.socket = this.createWebsocket();
        let subject = this.lifeSubject = new Subject();
        // this.lifeSubject.filter(x => {
        //     return JSON.parse(x.data)['clientId'] !== this.wsClientId;
        // });
        this.socket.onmessage = (evt => subject.next(evt));
    }

    // public connect(): void{
    private createWebsocket(): WebSocket {
        let ws = new WebSocket(this.wsUrl);
        return ws;
    }

    public sendLifeUpate(data): void {
        this.socket.send(JSON.stringify(data));
    }

}

