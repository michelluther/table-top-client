import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Subject, Observer, Observable } from 'rxjs/Rx';
// import { Rx } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroLifeService {

    private wsUrl = 'ws://' + window.location.hostname + ':8000';
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: Subject<MessageEvent>;


    constructor(private http: Http) { 

        console.log('haeh?');
    }

    // public connect(): void{
    public createWebsocket(): Subject<MessageEvent> {
        if (!this.socket) {
            console.log('socket gets created');
            this.socket = this.create(this.wsUrl);
        }
        this.socket['hihi'] = 'haha';
        return this.socket;
    }

    private create(url): Subject<MessageEvent> {
        console.log('here goes the observable');
        
        let ws = new WebSocket(url);

        let observable = Observable.create(
            // the obs is called by the observable ... 
            // thus the behavior on the observer defines the
            // observable ...
            (obs: Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
                return ws.close.bind(ws);
            }
        ).filter(x => {
            return JSON.parse(x.data)['clientId'] !== this.wsClientId;
        });

        console.log(observable);
        // the observer listens to the outside ...
        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    data['clientId'] = this.wsClientId; 
                    ws.send(JSON.stringify(data));
                }
            },
        };
        console.log('here goes the observer');
        console.log(observer);

        return Subject.create(observer, observable);
    }
}

