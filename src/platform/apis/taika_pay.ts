import apiClient from "src/platform/middleware/client";

export async function getList() {
  return await apiClient.get(
    "/services/wallet-go/api/gifts/gift-certificates/selling"
  );
}

export async function getItemDetail(id: string) {
  return await apiClient.get(
    `/services/wallet-go/api/gifts/gift-certificates/selling/${id}`
  );
}

export async function getCategoryList() {
  return await apiClient.get(
    "/services/wallet-go/api/gifts/gift-certificates/categories"
  );
}

export async function purchaseProduct({
  id,
  price,
  symbol,
}: PurchaseItemRequestModel) {
  return await apiClient.post(
    "/services/wallet-go/api/gifts/gift-orders?clientId=GAZAGO",
    {
      id,
      price,
      symbol,
    }
  );
}

export async function confirmOrder(reserveTraceId: string) {
  return await apiClient.put(
    "/services/wallet-go/api/gifts/gift-orders/status",
    {
      reserveTraceId,
    }
  );
}
