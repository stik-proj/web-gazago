type PurchaseResponseModel = {
  errorMessage(errorMessage: any): string;
  closeWebivew: boolean;
  confirmOrder: boolean;
  reserveTraceId: string;
  externalOrderId: string;
};
