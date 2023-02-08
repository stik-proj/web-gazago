import { getItemDetail, purchaseProduct } from "src/platform/services/taika_pay_service";
import PageHeader from "src/presentations/components/PageHeader";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { getWalletBalance } from "src/platform/services/wallet_go_service";
import { numberWithCommas, webToApp } from "src/platform/helpers";

export default function Detail() {
  const [productDetail, setProductDetail] = useState({} as ProductItemModel);
  const [tikBalance, setTikBalance] = useState({} as TokenBalanceModel);
  const [isOpenPurchaseModal, setOpenPurchaseModal] = useState(false);
  const [isOpenErrorModal, setOpenErrorModal] = useState(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState("" as string);
  const [responseCloseWebview, setResponseCloseWebview] = useState(false);
  const [isOpenUnablePurchaseModal, setOpenUnablePurchaseModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getBalances();
  }, []);

  useEffect(() => {
    getItemDetail(id!, {
      successCallback: (detail: ProductItemModel) => {
        setProductDetail(detail);
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setResponseCloseWebview(res.closeWebivew);
        setOpenErrorModal(true);
      },
    });
  }, [id]);

  const getBalances = () => {
    getWalletBalance({
      successCallback: (list: TokenBalanceModel[]) => {
        setTikBalance(list.find((item) => item.symbol === "TIK")!);
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setResponseCloseWebview(res.closeWebivew);
        setOpenErrorModal(true);
      },
    });
  };

  const purchaseItem = ({ id, price, symbol }: PurchaseItemRequestModel) => {
    purchaseProduct(
      { id, price, symbol },
      {
        successCallback: (res: PurchaseResponseModel) => {
          navigate(`/complete/${id}?rtId=${res.reserveTraceId}`, {
            replace: true,
          });
        },
        errorCallback: (res: PurchaseResponseModel) => {
          setResponseErrorMessage(res.errorMessage);
          setResponseCloseWebview(res.closeWebivew);
          setOpenErrorModal(true);
        },
      }
    );
  };

  const onClickExchange = () => {
    if (Number(tikBalance.uiAmountString) < productDetail.productPrice) {
      setOpenUnablePurchaseModal(true);
    } else {
      setOpenPurchaseModal(true);
    }
  };

  return (
    <>
      <Modal isModalOpen={isOpenErrorModal} setModalOpen={setOpenErrorModal}>
        <div className="min-w-[32rem]">
          <div className="relative flex justify-center mt-10" />
          <div className="w-full px-10 mt-10 text-center">
            <p className="text-[1.8rem] font-medium leading-[2.2rem] whitespace-pre-line">{responseErrorMessage}</p>
          </div>
          <div className="flex justify-end mt-20 lg:mt-10">
            <button type="button" className="w-full cursor-pointer bg-[#F97330] py-7 text-[1.8rem] font-medium text-white outline-none " onClick={() => (responseCloseWebview ? webToApp("closeWebview") : setOpenErrorModal(false))}>
              확인
            </button>
          </div>
        </div>
      </Modal>
      <Modal isModalOpen={isOpenUnablePurchaseModal} setModalOpen={setOpenUnablePurchaseModal}>
        <div className="min-w-[32rem]">
          <div className="relative flex justify-center mt-10" />
          <div className="w-full px-8 px-10 mt-10 text-center">
            <p className="text-[1.6rem] font-medium leading-[2.2rem]">
              잔액이 부족합니다.
              <br />
              확인 후 다시 시도해주세요.
            </p>
          </div>
          <div className="flex justify-end mt-20 lg:mt-10">
            <button type="button" className="w-full cursor-pointer bg-[#F97330] py-7 text-[1.8rem] font-medium text-white outline-none " onClick={() => setOpenUnablePurchaseModal(false)}>
              확인
            </button>
          </div>
        </div>
      </Modal>
      <Modal isModalOpen={isOpenPurchaseModal} setModalOpen={setOpenPurchaseModal}>
        <div className="min-w-[32rem]">
          <div className="relative flex justify-center mt-10" />
          <div className="w-full px-8 px-10 mt-10 text-center">
            <p className="text-[1.8rem] font-medium leading-[2.2rem]">상품권 교환을 진행하시겠습니까?</p>
            <p className="text-[2rem] font-bold leading-[2.2rem] mt-4">
              {numberWithCommas(productDetail.productPrice)}
              <span className="text-[2rem] font-medium leading-[2.2rem] ml-2">TIK</span>
            </p>
            <ul className="text-[#9B9B9B] text-[1.4rem] font-medium leading-[1.6rem] mt-8">
              <li>· 본인인증 한 휴대폰 번호로 발송됩니다.</li>
              <li>
                · <strong>재발송 및 연장</strong>이 불가한 상품입니다.
              </li>
            </ul>
          </div>
          <div className="flex justify-end mt-12">
            <button type="button" className="w-full text-[1.8rem] text-[#747474] font-medium outline-none py-7 bg-[#DEDEDE]" onClick={() => setOpenPurchaseModal(false)}>
              취소
            </button>
            <button
              type="button"
              className="w-full cursor-pointer bg-[#F97330] py-7 text-[1.8rem] font-medium text-white outline-none "
              onClick={() =>
                purchaseItem({
                  id: productDetail.id,
                  price: productDetail.productPrice,
                  symbol: "TIK",
                })
              }
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
      <PageHeader title="상품권 상세" />
      <div className="flex flex-col overflow-hidden grow bg-[#F8F8F8]">
        <div className="overflow-auto grow">
          <section>
            <img className="w-full" src={productDetail.productImageUrl} alt="" />
          </section>
          <section className="px-[2rem] py-[1.5rem] bg-white border-b-[1px] border-[#E6E6E6]">
            <p className="text-[1.4rem] font-semibold">{productDetail.brandName}</p>
            <p className="text-[2rem] font-medium leading-[2.4rem] mt-2">{productDetail.productName}</p>
            <p className="text-[2.2rem] font-extrabold leading-[2.2rem] mt-6">
              {numberWithCommas(productDetail.productPrice)}
              <span className="text-[2.2rem] font-medium ml-2">TIK</span>
            </p>
          </section>
          {/*<section className="px-[2rem] py-[1.5rem] mt-2 bg-white border-b-[1px] border-[#E6E6E6]">
      <h3 className="text-[1.4rem] font-semibold">상품정보</h3>
      <p className="text-[1.6rem] leading-[2.2rem] font-medium mt-2">
        ㅁㅈㄷㄹㅁㅈㄷㄹㅁㅇㄹ
      </p>
    </section>
     <section>
      <h3>이용안내</h3>
      <p>ㅁㅈㄷㄹㅁㅈㄷㄹㅁㅈㄷㄹ</p>
    </section>*/}
          <section className="px-[2rem] pt-[2.5rem]">
            <h3 className="text-[#9B9B9B] text-[1.4rem] font-semibold leading-[1.2rem]">유의사항</h3>
            <p className="text-[#9B9B9B] text-[1.6rem] break-keep font-medium tracking-[0.0015rem] mt-[1.2rem]">
              - 본인인증 한 휴대폰 번호로 모바일 교환권이 발송될 예정이며, 모바일 교환권 유효기간은 발송 시점 기준으로 93일입니다. (재발송 및 연장 불가) 유효기간 내에 사용하지 못한 교환권은 환불 및 연장이 불가합니다.
              <br />- 취소/환불 시 구매에 따른 제반비용을 제외하고 영업일 기준 당일 TIK을 돌려드립니다.
              <br />- 모바일 교환권은 휴대폰 번호에 연동 되어있는 카카오톡 계정으로 발송되며, 카카오톡 계정이 없는 경우 문자 메시지로 발송됩니다.
              <br />- 상품권 및 모바일 쿠폰의 이용 조건 등 자세한 내용은 해당 이용처를 통해 확인해주세요.
              <br />- 부정확한 개인정보 기입으로 인한 교환권 미수령에 대하여 당사는 책임지지 않습니다.
              <br />- 기타문의사항은 고객센터(cs@staika.io)로 문의해주세요.
            </p>
          </section>
          <section className="px-[2rem] pt-[2.5rem] pb-10">
            <h3 className="text-[#9B9B9B] text-[1.4rem] font-semibold leading-[1.2rem]">개인정보 관련</h3>
            <p className="text-[#9B9B9B] text-[1.6rem] break-keep font-medium tracking-[0.0015rem] mt-[1.2rem]">
              - 교환권 발송을 위해 위탁업체인 카카오톡 선물하기 for Biz에 회원님의 이름 및 휴대 전화번호가 제공되며, 발송일로부터 366일 이후 폐기됩니다.
              <br />- 카카오 선물하기 고객센터 : 1644-8730 (평일 오전 9시 ~ 오후 6시)
            </p>
          </section>
        </div>
        <button className="w-full bg-[#F97330] min-h-[6rem] text-white text-[1.8rem] font-semibold" onClick={() => onClickExchange()}>
          교환하기
        </button>
      </div>
    </>
  );
}
