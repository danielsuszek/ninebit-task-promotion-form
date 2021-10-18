import { GetAllPromotionsComponent } from './get-all-promotions/get-all-promotions.component';
import { Component, OnInit } from '@angular/core';
import { Promotion } from './promotion';
import { PromotionsService } from './promotions.service';



@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  promotions: Promotion[] = []
  
  constructor(private promotionsService: PromotionsService) { }

  ngOnInit(): void {
    this.getPromotions()
  }

  getPromotions(): void {
    this.promotionsService.getPromotions().subscribe(promotions => this.promotions = promotions)
  }
  
  create(marketingName: string): void {
    this.promotionsService.createPromotion({ marketingName } as Promotion)
    .subscribe(promotion => {
      this.promotions.push(promotion)
    })
  }

  delete(promotion: Promotion): void {
    this.promotions = this.promotions.filter(p => p !== promotion);
    this.promotionsService.deletePromotion(promotion.id).subscribe();
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }
}
