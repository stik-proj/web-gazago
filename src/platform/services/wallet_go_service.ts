import * as walletApi from "src/platform/apis/wallet_go";

export async function getWalletBalance({
  successCallback,
  errorCallback,
}: ServiceCallbackModel): Promise<void> {
  const res = await walletApi.getWalletBalance();
  if (res.status === 200) {
    successCallback(res.data as TokenBalanceModel[]);
  } else {
    if (errorCallback === null) return;
    errorCallback!(res);
  }
}
