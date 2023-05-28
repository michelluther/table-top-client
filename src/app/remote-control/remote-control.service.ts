import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Rx } from 'rxjs';
import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { RemoteControlOperation } from './../domain/remoteControlOperation';



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
        try {

            let ws = new WebSocket(this.wsUrl);
            return ws;
        } catch (error) {
            console.log('error setting up web socket to remote control sender')
        }
    }

    public sendRemoteControlInstruction(instruction: RemoteControlOperation): void {
        console.log('will send instruction');
        const jsonOperation = instruction.toJSON();
        console.log(jsonOperation);

        this.socket.send(jsonOperation);
    }


}

