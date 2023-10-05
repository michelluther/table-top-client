import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private static _baseHostProd = `${window.location.hostname}:${window.location.port}`
  private static _baseHostDev = `${window.location.hostname}:8000`
  private static _isDev = window.location.hostname === 'localhost' || window.location.hostname === '0.0.0.0' ? true : false
  private static _baseURL = UrlService._isDev ? `${window.location.protocol}//${UrlService._baseHostDev}` : `${window.location.protocol}//${UrlService._baseHostProd}`

  private static _protocolWebSockets = window.location.protocol === 'http:' ? 'ws:' : 'wss:'
  private static _baseURLWS =  UrlService._isDev ? `${UrlService._protocolWebSockets}//${UrlService._baseHostDev}` : `${UrlService._protocolWebSockets}//${UrlService._baseHostProd}`
  constructor() {}

  static getBaseUrl():string {
    return this._baseURL;
  }

  static getBaseURLWS():string {
    return this._baseURLWS
  }
}
