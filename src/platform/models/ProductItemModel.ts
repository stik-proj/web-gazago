type ProductItemModel = {
  id: number;
  templateName: string;
  templateTraceId: string;
  startAt?: string;
  endAt?: string;
  orderTemplateStatus: string;
  budgetType: string;
  giftBudgetCount: number;
  giftSentCount: number;
  giftStockCount: number;
  itemType: string;
  category: string;
  productName: string;
  brandName: string;
  productImageUrl: string;
  productThumbImageUrl: string;
  brandImageUrl: string;
  productPrice: number;
  activated: boolean;
  createdDate: Date;
  createdBy: string;
  lastModifiedDate: Date;
  lastModifiedBy: string;
}