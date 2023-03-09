import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="px-[2.5rem] py-[7.2rem] bg-[#212121] text-center flex justify-center lg:py-[9rem]">
      <div className="md:w-[630px] lg:w-full">
        <p className="footer-text font-[600] md:text-[1.4rem] lg:text-[1.6rem]">
          {t(`footer.desc0`)}
        </p>
        <p className="footer-text font-[600] mt-[2.8rem] md:text-[1.4rem] lg:text-[1.6rem] lg:mt-[4rem]">
          {t(`footer.desc1`)}
        </p>
        <p className="footer-text break-keep md:text-[1.4rem] lg:text-[1.6rem]">
          {t(`footer.desc2`)}
        </p>

        <p className="footer-text">{t(`footer.desc3`)}</p>
      </div>
    </div>
  );
}
