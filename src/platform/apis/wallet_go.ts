import apiClient from "src/platform/middleware/client";

export async function getWalletBalance() {
  return await apiClient.get(
    "/services/wallet-go/api/spending/balances?clientId=GAZAGO"
  );
}
