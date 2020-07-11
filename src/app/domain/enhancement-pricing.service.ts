import { Injectable } from '@angular/core';
import { AscensionPricing } from './ascensionPricing'
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EnhancementPricingService {

  private ascensionsUrl: String = 'http://' + window.location.hostname + ':8000/ascensions/';
  private ascensionsPromise: Promise<AscensionPricing[]>;
  private ascensionPricing = []
  constructor(private http: Http) { }

  public getAscensionPricing(): Promise<AscensionPricing[]> {
    if (!this.ascensionPricing) {
      this.ascensionsPromise = this.http.get(this.ascensionsUrl)
        .toPromise()
        .then(response => {
          return this.extractAscensions(response);
        })
    }
    return this.ascensionsPromise;
  }

  private extractAscensions(response: Array<any>): Array<AscensionPricing> {
    return response.map((ascensionResponse, index) => {
      return new AscensionPricing(ascensionResponse, index)
    })
    
  }
  
}
