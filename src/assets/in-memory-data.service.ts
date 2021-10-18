import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Promotion } from 'src/app/promotions/promotion';
// import { Post } from './data/posts';


InMemoryDbService

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const promotions = [
      { id: 11, marketingName: 'Dr Nice', technicalName:'author11' },
      { id: 12, marketingName: 'Narco', technicalName:'author12' },
      { id: 13, marketingName: 'Bombasto', technicalName:'author13' },
      { id: 14, marketingName: 'Bombasto', technicalName:'author13' },

    ];
    return {promotions};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(promotions: Promotion[]): number {
    return promotions.length > 0 ? Math.max(...promotions.map(promotion => promotion.id)) + 1 : 11;
  }
}