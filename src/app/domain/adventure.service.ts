import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AdventureService {

    private adventuresUrl = 'http://' + window.location.hostname + ':8000/adventures/';
    private adventures: Adventure[];

    constructor(private http: Http) { }

    getAdventures(): Promise<Adventure[]> {
        return this.http.get(this.adventuresUrl)
            .toPromise()
            .then(response => {
                return this.extractData(response);
            }
            )
    }

    extractData(res: Response): Adventure[] {
        let body = res.json();
        let adventures = [];
        body.forEach(function (adventure) {
            var newAdventure = new Adventure()
            newAdventure.setData(adventure);
            adventures.push(newAdventure);
        }.bind(this));
        return adventures;
    }

    handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getAdventure(id: string): Promise<Adventure> {
        return this.getAdventures()
            .then(adventures =>
                adventures.find(adventure => adventure.id === id)
            );
    }

}

export class Adventure {

    public id: string
    public active: boolean
    public name: string

    public images: Array<Image>
    constructor() {
        this.images = []
    }

    public setData(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        dataObject.images.forEach(image => {
            let imageObject = new Image(image.url, image.caption)
            this.images.push(imageObject)
        })
    }
}

export class Image {
    public url: string
    public caption: string

    constructor(url: string, caption: string) {
        this.url = url
        this.caption = caption
    }
}