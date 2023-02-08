import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getList, getCategoryList } from "src/platform/services/taika_pay_service";
import { getWalletBalance } from "src/platform/services/wallet_go_service";
import Modal from "src/presentations/components/Modal";
import { numberWithCommas, webToApp } from "src/platform/helpers";
import MainHeader from "src/presentations/components/MainHeader";

export default function Main() {
  const [categoryList, setCategoryList] = useState([] as string[]);
  const [productList, setProductList] = useState([] as ProductItemModel[]);
  const [filterProductList, setFilterProductList] = useState([] as ProductItemModel[]);
  const [isShowSelectOption, setIsShowSelectOption] = useState(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState("" as string);
  const [responseCloseWebview, setResponseCloseWebview] = useState(false);
  const [isOpenErrorModal, setOpenErrorModal] = useState(false);
  const [sort, setSort] = useState("LOW" as string);
  const [sortText, setSortText] = useState("낮은가격순" as string);
  const [selectedCategory, setSelectedCategory] = useState("전체" as string);
  const [totalTikBalance, setTotalTikBalance] = useState({} as TokenBalanceModel);
  const [tikBalance, setTikBalance] = useState({} as TokenBalanceModel);
  const [ptikBalance, setPtikBalance] = useState({} as TokenBalanceModel);
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryList({
      successCallback: (list: string[]) => {
        list.unshift("전체");
        setCategoryList(list);
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setResponseCloseWebview(res.closeWebivew);
        setOpenErrorModal(true);
      },
    });

    getList({
      successCallback: (list: ProductItemModel[]) => {
        setProductList(list);
        sortUpPrice(list);
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setResponseCloseWebview(res.closeWebivew);
        setOpenErrorModal(true);
      },
    });

    getBalances();
  }, []);

  useEffect(() => {
    handleSortData(filterProductList);
  }, [sort, selectedCategory]);

  useEffect(() => {
    if (selectedCategory === "전체") {
      handleSortData(productList);
    } else {
      handleSortByCategory(productList);
    }
  }, [selectedCategory]);

  const sortUpPrice = (list: ProductItemModel[]) => {
    const sortData = list.sort(function(a, b) {
      return a.productPrice - b.productPrice;
    });
    setFilterProductList([...sortData]);
  };

  const sortDownPrice = (list: ProductItemModel[]) => {
    const sortData = list.sort(function(a, b) {
      return b.productPrice - a.productPrice;
    });

    setFilterProductList([...sortData]);
  };

  const toggleSelectOption = () => {
    setIsShowSelectOption((prev) => !prev);
  };

  const onClickSortOption = (e: any) => {
    setSortText(e.target.innerText);
    setSort(e.target.value);
  };

  const handleSortByCategory = (list: ProductItemModel[]) => {
    const data = list.filter((item) => {
      if (item.category === selectedCategory) {
        return item;
      }
    });

    handleSortData(data);
  };

  const handleSortData = (list: ProductItemModel[]) => {
    if (sort === "LOW") {
      sortUpPrice(list);
    } else {
      sortDownPrice(list);
    }
  };

  const renderCategoryList = (): JSX.Element[] => {
    return categoryList.map((category, index) => (
      <li className={`inline-block px-[1.8rem] py-[1.8rem] snap-center ${category === selectedCategory ? "border-b-[3px] border-black" : ""}`} key={index} onClick={() => setSelectedCategory(category)}>
        <p className={`text-[1.4rem] leading-[1.4rem] font-bold ${category === selectedCategory ? "" : "text-[#9B9B9B]"}`}>{category}</p>
      </li>
    ));
  };

  const getBalances = () => {
    getWalletBalance({
      successCallback: (list: TokenBalanceModel[]) => {
        setTotalTikBalance(list.find((item) => item.symbol === "TOTAL_TIK")!);
        setTikBalance(list.find((item) => item.symbol === "TIK")!);
        setPtikBalance(list.find((item) => item.symbol === "PTIK")!);
      },
      errorCallback: (res: PurchaseResponseModel) => {
        setResponseErrorMessage(res.errorMessage);
        setResponseCloseWebview(res.closeWebivew);
        setOpenErrorModal(true);
      },
    });
  };

  const toDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  const renderProductList = (list: ProductItemModel[]): JSX.Element[] => {
    return list.map((product, index) => (
      <li className={`w-1/2 mb-8 ${index % 2 === 0 ? "pr-2" : "pl-2"}`} key={product.id} onClick={() => toDetail(product.id)}>
        <div className={`w-full bg-center bg-cover aspect-square`} style={{ backgroundImage: `url(${product.productImageUrl})` }} />
        <div className="p-2">
          <p className="text-[1.2rem] text-[#A5A5A5] font-medium leading-5">{product.brandName}</p>
          <p className="text-[1.6rem] font-medium leading-7 mt-2">{product.productName}</p>
          <p className="text-[1.6rem] font-bold leading-7 mt-[1rem]">
            {numberWithCommas(product.productPrice)} <span className="text-[1.6rem] font-normal">TIK</span>
          </p>
        </div>
      </li>
    ));
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
      <MainHeader />
      <div className="flex-grow overflow-y-auto">
        <section className="px-8 py-6 bg-[#F6F7F7]">
          <div className="relative flex items-center justify-start ticket-top px-[1.3rem]">
            <div className="absolute top-4 right-4" onClick={() => getBalances()}>
              <img src="./img/ico_reload_circle.svg" alt="" />
            </div>
            <img src="./img/ico_taika.svg" alt="" />
            <div className="ml-[1rem]">
              <h3 className="text-[1.4rem] text-[#A5A5A5] font-semibold">상품권 교환 가능</h3>
              <h4>
                <span className="text-[2.4rem] font-semibold">{numberWithCommas(tikBalance.amount)}</span>
                <span className="text-[2.4rem] font-semibold">TIK</span>
              </h4>
            </div>
          </div>
          <div className="flex pt-[0.85rem] pb-[1.3rem] px-[2.1rem] ticket-bottom flex-col items-start justify-start">
            <div className="flex w-full justify-between">
              <p className="text-[#848484] font-semibold text-[1.2rem]">- 총 보유</p>
              <p className="text-[#424242] font-semibold text-[1.2rem]">{numberWithCommas(totalTikBalance.amount)} TIK</p>
            </div>
            <div className="flex w-full justify-between">
              <p className="text-[#848484] font-semibold text-[1.2rem]">- 보너스 (상품권 교환 불가)</p>
              <p className="text-[#424242] font-semibold text-[1.2rem]">{numberWithCommas(ptikBalance.amount)} TIK</p>
            </div>
          </div>
        </section>
        <section className="border-t-[1px] border-b-[1px]">
          <ul className="px-4 pb-0 mb-0 overflow-x-auto whitespace-nowrap snap-x snap-mandatory category-list">{renderCategoryList()}</ul>
        </section>
        <section className="px-8">
          <div className="flex justify-end">
            <div className="inline-flex bg-white ">
              <div onClick={toggleSelectOption} className="flex items-center py-[1.4rem]">
                <span className="text-[1.4rem] text-[#A5A5A5]">{sortText}</span>
                <div className="relative ml-1">
                  <img className="ml-2" src="./img/ico_selectbox_arrow.svg" alt="" />
                  <div className={`absolute right-0 z-10 w-auto mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${isShowSelectOption ? "block" : "hidden"}`}>
                    <div className="p-2">
                      <button onClick={onClickSortOption} value="LOW" className="block px-4 py-3 text-[1.4rem] w-max">
                        낮은가격순
                      </button>
                      <button onClick={onClickSortOption} value="HIGH" className="block px-4 py-3 text-[1.4rem] w-max">
                        높은가격순
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {filterProductList.length > 0 ? <ul className="flex flex-wrap">{renderProductList(filterProductList)}</ul> : <p className="text-center text-[1.4rem] py-32">상품을 준비중입니다.</p>}
        </section>
      </div>
    </>
  );
}
