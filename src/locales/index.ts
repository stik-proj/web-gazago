import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/common.json";
import ko from "./ko/common.json";

import backend from "i18next-http-backend";
import Axios from "axios";

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};
const loadResources = async (lng: any) => {
  return await Axios.get(
    `${
      process.env.REACT_APP_BASE_URL
    }/services/board/api/locale-messages?clientId=GAZAGO&sheetName=WEB_GAZAGO`
  )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      const errRes = error.toJSON();

      return errRes;
    });
};

const backendOptions = {
  loadPath: "{{lng}}|{{ns}}",
  request: (options: any, url: any, payload: any, callback: any) => {
    const [lng] = url.split("|");
    loadResources(lng).then((response) => {
      if (response.status) {
        callback(null, {
          // @ts-ignore
          data: resources[lng].translation,
          status: 200,
        });
      } else {
        callback(null, {
          data: response[lng],
          status: 200,
        });
      }
    });
  },
};

i18next
  .use(backend)
  .use(initReactI18next)
  .init({
    backend: backendOptions,
    fallbackLng: "ko",
    // debug: true,
    ns: ["common"],
    defaultNS: "common",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

i18next.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});
export default i18next;
