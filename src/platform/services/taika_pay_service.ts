import * as payApi from "src/platform/apis/taika_pay";

export async function getList({
  successCallback,
  errorCallback,
}: ServiceCallbackModel): Promise<void> {
  const res = await payApi.getList();
  if (res.status === 200) {
    successCallback(res.data as ProductItemModel[]);
  } else {
    if (errorCallback === null) return;
    errorCallback!(res);
  }
}

export async function getItemDetail(
  id: string,
  { successCallback, errorCallback }: ServiceCallbackModel
): Promise<void> {
  const res = await payApi.getItemDetail(id);
  if (res.status === 200) {
    successCallback(res.data as ProductItemModel);
  } else {
    if (errorCallback === null) return;
    errorCallback!(res);
  }
}

export async function getCategoryList({
  successCallback,
  errorCallback,
}: ServiceCallbackModel): Promise<void> {
  const res = await payApi.getCategoryList();
  if (res.status === 200) {
    successCallback(res.data as string[]);
  } else {
    if (errorCallback === null) return;
    errorCallback!(res);
  }
}

export async function purchaseProduct(
  { id, price, symbol }: PurchaseItemRequestModel,
  { successCallback, errorCallback }: ServiceCallbackModel
): Promise<void> {
  const res = await payApi.purchaseProduct({ id, price, symbol });
  if (res.status === 201) {
    successCallback(res.data);
  } else {
    if (errorCallback === null) return;
    errorCallback!(res);
  }
}

export async function confirmOrder(
  reserveTraceId: string,
  { successCallback, errorCallback }: ServiceCallbackModel
): Promise<void> {
  const res = await payApi.confirmOrder(reserveTraceId);
  if (res.status === 200) {
    successCallback(res.data);
  } else {
    if (errorCallback === null) return;
    errorCallback!(res);
  }
}
