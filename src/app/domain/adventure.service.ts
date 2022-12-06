import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

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

    private images: Image[]
    private characters: Character[]
    constructor() {
        this.images = []
        this.characters = []
    }

    public setData(dataObject) {
        this.id = dataObject.id
        this.name = dataObject.name
        dataObject.images.forEach(image => {
            let imageObject = new Image(this.buildImageLink(image.url), image.caption, image.sequence)
            this.images.push(imageObject)
        })
        dataObject.characters.forEach(character => {
            this.characters.push(new Character(character.name, this.buildImageLink(character.imageUrl), character.sequence))
        })
    }

    get elements():AdventureElement[] {
        const allElements:Array<AdventureElement> = []
        for (let i = 0; i <  this.images.length; i++) {
            allElements.push(this.images[i])
        }
        for (let j = 0; j <  this.characters.length; j++) {

            allElements.push(this.characters[j])
        }
        allElements.sort((elementA, elementB) => {
            return elementA.sequence - elementB.sequence
        })

        const allElementsGrouped = []
        for (let index = 0; index < allElements.length; index++) {
            const element = allElements[index];
            const existingElementWithThatSequenceIndex = allElementsGrouped.findIndex(groupedElement => element.sequence === groupedElement.sequence)
            if(existingElementWithThatSequenceIndex !== -1) {
                const existingElementWithThatSequence = allElementsGrouped[existingElementWithThatSequenceIndex]
                if(existingElementWithThatSequence.type === ElementType.Section) {
                    (existingElementWithThatSequence as Section).elements.push(element)
                } else {
                    const newSection = new Section();
                    newSection.sequence = element.sequence
                    newSection.elements.push(existingElementWithThatSequence)
                    newSection.elements.push(element)
                    allElementsGrouped[existingElementWithThatSequenceIndex] = newSection;

                }
            } else {
                allElementsGrouped.push(element)
            }
        }
        return allElementsGrouped
    } 
    
    buildImageLink(absolutePath:string):string {
        return `http://${window.location.hostname}:8000${absolutePath}`
    }

}

export enum ElementType {Image = 'image', Character = 'character', Location = 'location', Section = 'section'}

export interface AdventureElement {
    title:string;
    sequence:number;
    imageUrl:string;
    type:ElementType;
}

export class Image implements AdventureElement{
    constructor(public url: string, public caption: string,public sequence:number) {}
    
    get imageUrl(): string {
        return this.url;
    }

    get type(): ElementType {
        return ElementType.Image;
    }

    get title(): string {
        return this.caption    
    }
}

export class Character implements AdventureElement {
    constructor(public name:string, public imageUrl:string,public sequence:number){}
    
    get title(): string {
        return this.name;
    }
    get type(): ElementType {
        return ElementType.Character;
    }
}

export class Section implements AdventureElement {
    title: string;
    sequence: number;
    imageUrl: string;
    type: ElementType = ElementType.Section;

    elements: AdventureElement[] = []
    
}