import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }
  //TOPHEADLINES API URL
  topHeadlineNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=2dd9b79be75d4869ac0872b254e112f1';
  //TECHNICALNEWS API URL
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2dd9b79be75d4869ac0872b254e112f1';
  //BUSINESSnEWS API URL
  busNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2dd9b79be75d4869ac0872b254e112f1';



  //use business method
  vBusNews():Observable<any>{
    return this._http.get(this.busNews)
  
  }

//use tech method
vTechNews():Observable<any>{
  return this._http.get(this.techNews)

}
//use headline method
  vHeadlines():Observable<any>{
    return this._http.get(this.topHeadlineNews)

  }
}
