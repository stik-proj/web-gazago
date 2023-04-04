import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const data = {
    terms: t("footer.terms.link"),
    privacy: t("footer.privacy.link"),
  };
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

        <p className="footer-text md:text-[1.4rem] lg:text-[1.6rem]">
          {t(`footer.desc3`)}
        </p>
        {i18n.language === "ko" ? (
          <div className="mt-[2.8rem] md:mt-[3.5rem] lg:mt-[2.8rem]">
            <a
              className="inline-block"
              href={data.terms}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="footer-text-terms md:text-[1.4rem] md:leading-[1.4rem] lg:text-[1.6rem] lg:leading-[1.6rem]">
                {t(`footer.terms`)}
              </p>
            </a>
            <span className="text-[#6B6B6B] text-[1.3rem] font-[600] ml-[0.8rem] lg:ml-[1.2rem] md:text-[1.4rem] md:leading-[1.4rem] lg:text-[1.6rem] lg:leading-[1.6rem]">
              |
            </span>
            <a
              className="inline-block"
              href={data.privacy}
              rel="noopener noreferrer"
              target="_blank"
            >
              <p className="footer-text-terms ml-[0.8rem] lg:ml-[1.2rem] md:text-[1.4rem] md:leading-[1.4rem] lg:text-[1.6rem] lg:leading-[1.6rem]">
                {t(`footer.privacy`)}
              </p>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
