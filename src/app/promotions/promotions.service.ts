import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Promotion } from './promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  private promotionsUrl = 'api/promotions';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
  constructor(private httpClient: HttpClient) { }

  getPromotions(): Observable<Promotion[]> {
    return this.httpClient.get<Promotion[]>(this.promotionsUrl)
  }

  createPromotion(promotion: Promotion): Observable<Promotion> {
    return this.httpClient.post<Promotion>(this.promotionsUrl, promotion, this.httpOptions)
  }

  deletePromotion(id: number): Observable<Promotion> {
    const url = `${this.promotionsUrl}/${id}`;
  
    return this.httpClient.delete<Promotion>(url, this.httpOptions)
  }

  // deleteHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  
  //   return this.http.delete<Hero>(url, this.httpOptions)
  // }

  // updatePromotion(promotion: Promotion): Observable<any> {
  //   return this.httpClient.put(this.promotionsUrl, promotion, this.httpOptions)
  // }
  // updateHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions)
  // }

}
