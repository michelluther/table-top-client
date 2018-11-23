import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Subject, Observer, Observable, Subscription } from 'rxjs/Rx';
// import { Rx } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteControlService {

    private wsUrl = 'ws://' + window.location.hostname + ':8000/remoteControlSender';
    public wsClientId = Math.random().toString(36).substring(7);
    private socket: WebSocket;
    public remoteControlSubject: Subject<MessageEvent>;

    constructor(private http: Http) {
        this.socket = this.createWebsocket();
        let subject = this.remoteControlSubject = new Subject();
        this.socket.onmessage = (evt => subject.next(evt));
    }

    private createWebsocket(): WebSocket {
        let ws = new WebSocket(this.wsUrl);
        return ws;
    }

    public sendRemoteControlInstruction(data): void {
        this.socket.send(JSON.stringify(data));
    }

}

