export interface Promotion {
  id: number;
  marketingName: string;
  technicalName: string;
  description: string;
  portal: string;
  type: string;
  startDate: string;
  finishDate: string;
  bussinessCondOrBasePrice: boolean;
  connWithOtherPromotions: boolean;
  backPromotion: boolean;
}
