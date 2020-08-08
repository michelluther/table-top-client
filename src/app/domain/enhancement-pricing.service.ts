import { Injectable } from '@angular/core';
import { AscensionPricing } from './ascensionPricing'
import { Http, Response } from '@angular/http';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class EnhancementPricingService {

  private ascensionsUrl: string = 'http://' + window.location.hostname + ':8000/ascensions/';
  private ascensionsPromise: Promise<AscensionPricing[]>;
  private ascensionPricing: Array<AscensionPricing>;
  constructor(private http: Http) { }

  public getAscensionPricing(): Promise<AscensionPricing[]> {
    if (!this.ascensionPricing) {
      this.ascensionsPromise = this.http.get(this.ascensionsUrl)
        .toPromise()
        .then(response => {
          this.ascensionPricing = this.extractAscensions(response.json());
          return this.ascensionPricing;
        })
        return this.ascensionsPromise;
    } else {
      return new Promise(resolve => {
        resolve(this.ascensionPricing)
      })
    }
  }

  private extractAscensions(response: any): Array<AscensionPricing> {
    return response.map((ascensionResponse, index) => {
      return new AscensionPricing(ascensionResponse, index)
    })
    
  }
  
}
