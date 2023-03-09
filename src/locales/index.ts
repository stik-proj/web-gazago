import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/common.json";
import ko from "./ko/common.json";

// const resources = {
//   en: { translation: en },
//   ko: { translation: ko },
// };
const resources = {
  en: { translation: en },
  ko: { translation: ko },
};
i18next.use(initReactI18next).init({
  resources,
  lng: "ko",
  interpolation: {
    escapeValue: false,
  },
});
i18next.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});
export default i18next;
