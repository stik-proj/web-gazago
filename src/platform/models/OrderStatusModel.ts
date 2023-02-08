type ReceiversModel = {
  receivers: OrderStatusModel[];
}

type OrderStatusModel = {
  orderStatus: string;
  receiver:    Receiver;
}

type Receiver = {
  reserve_trace_id:      string;
  external_order_id:     string;
  gift_request_count:    number;
  gift_processing_count: number;
  gift_sent_count:       number;
  gift_fail_count:       number;
  cash_use_amount:       number;
  template_order_gifts:  TemplateOrderGift[];
  product:               Product;
}

type Product = {
  product_name:            string;
  item_type:               string;
  brand_name:              string;
  brand_image_url:         string;
  product_image_url:       string;
  product_thumb_image_url: string;
  product_price:           number;
}

type TemplateOrderGift = {
  sequence:       number;
  external_key:   string;
  receiver_type:  string;
  name:           string;
  receiver_id:    string;
  gift_trace_id:  string;
  product_price:  number;
  gift_status:    string;
  voucher_status: string;
  expired_at:     Date;
  gift_url:       string;
}