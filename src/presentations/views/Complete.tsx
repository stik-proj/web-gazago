import PageHeader from "src/presentations/components/PageHeader";
import { useState, useEffect } from "react";
import { getItemDetail, confirmOrder } from "src/platform/services/taika_pay_service";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Animation from "../animation/Animation";
import Modal from "../components/Modal";
import { numberWithCommas } from "src/platform/helpers";

export default function Complete() {
  const [productDetail, setProductDetail] = useState({} as ProductItemModel);
  const [responseErrorMessage, setResponseErrorMessage] = useState("" as string);
  const [isOpenErrorModal, setOpenErrorModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const rtId = searchParams.get("rtId");

  useEffect(() => {
    getItemDetail(id!, {
      successCallback: (detail: ProductItemModel) => {
        setProductDetail(detail);
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setOpenErrorModal(true);
      },
    });
  }, [id]);

  function onConfirmOrder() {
    confirmOrder(rtId!, {
      successCallback: () => {
        navigate("/", { replace: true });
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setOpenErrorModal(true);
      },
    });
  }

  return (
    <>
      <Modal isModalOpen={isOpenErrorModal} setModalOpen={setOpenErrorModal}>
        <div className="min-w-[32rem]">
          <div className="relative flex justify-center mt-10" />
          <div className="w-full px-10 mt-10 text-center">
            <p className="text-[1.8rem] font-medium leading-[2.2rem] whitespace-pre-line">{responseErrorMessage}</p>
          </div>
          <div className="flex justify-end mt-20 lg:mt-10">
            <button type="button" className="w-full cursor-pointer bg-[#F97330] py-7 text-[1.8rem] font-medium text-white outline-none " onClick={() => setOpenErrorModal(false)}>
              확인
            </button>
          </div>
        </div>
      </Modal>
      <PageHeader title="교환 성공" />
      <div className="flex flex-col overflow-hidden grow">
        <div className="overflow-auto bg-white">
          <section className="relative p-3 overflow-hidden">
            <p className="relative flex justify-center py-16 text-center text-[2rem] leading-[2.6rem] font-medium z-10">
              상품권 교환이
              <br />
              정상적으로 처리되었습니다.
            </p>
            <div className="absolute top-0 left-0 w-full h-full">
              <Animation />
            </div>
          </section>
          <section className="px-[2.5rem] border-b-[1px] border-[#F0F0F0] pb-12">
            <div className="flex items-start justify-center px-8 py-6 border-t-2 border-b-2 border-[#F0F0F0]">
              <div
                className={`w-[11rem] bg-center bg-cover aspect-square shrink-0`}
                style={{
                  backgroundImage: `url(${productDetail.productImageUrl})`,
                }}
              />
              <div className="ml-8">
                <p className="text-[1.4rem] font-medium text-[#A5A5A5]">{productDetail.brandName}</p>
                <p className="text-[1.4rem] font-medium leading-[2rem] mt-2">{productDetail.productName}</p>
                <p className="text-[1.6rem] font-bold mt-8">
                  {numberWithCommas(productDetail.productPrice)}
                  <span className="text-[1.6rem] font-medium"> TIK</span>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="px-8 py-10">
          <p className="text-[1.4rem] font-semibold text-[#9B9B9B]">꼭! 확인하세요.</p>
          <ul className="text-[1.4rem] font-medium text-[#9B9B9B] mt-5">
            <li className="text-[1.4rem] leading-[2.2rem]">
              (1) 본인인증 한 휴대폰 번호로 모바일 교환권이 발송될 예정이며, 모바일 교환권 유효기간은 발송 시점 기준으로 93일입니다. (재발송 및 연장 불가) 유효기간 내에 사용하지 못한 교환권은 환불 및 연장이 불가합니다.
            </li>
            <li className="text-[1.4rem] leading-[2.2rem]">(2) 취소/환불 시 구매에 따른 제반비용을 제외하고 영업일 기준 당일 이내 TIK을 돌려드립니다.</li>
            <li className="text-[1.4rem] leading-[2.2rem]">(3) 기타문의사항은 고객센터(cs@staika.io)로 문의해주세요. </li>
          </ul>
        </div>
      </div>

      <button className="w-full bg-[#F97330] h-[6rem] text-white text-[1.8rem] font-semibold" onClick={() => onConfirmOrder()}>
        확인
      </button>
    </>
  );
}
