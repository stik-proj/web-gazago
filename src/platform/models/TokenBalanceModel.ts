type TokenBalanceModel = {
  symbol: string
  name: string
  logoUrl?: string
  accountId: number
  decimals: number
  amount: number
  uiAmountString: string
  price: Price
}

type Price = {
  KRW: Krw
  USD: Usd
}

type Krw = {
  price: number
  volumn_change_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  last_updated: string
}

type Usd = {
  price: number
  volumn_change_24h: number
  percent_change_1h: number
  percent_change_24h: number
  percent_change_7d: number
  last_updated: string
}