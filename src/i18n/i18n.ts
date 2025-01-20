import i18n from "i18next"; // Default import of the i18n instance
import { initReactI18next } from "react-i18next"; // Importing initReactI18next as a named import
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18n
// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // Pass i18n to react-i18next
  .init(
    {
      detection: {
        order: [
          "cookie",
          "localStorage",
          "htmlTag",
          "navigator",
          "path",
          "subdomain",
        ],
        caches: ["cookie", "localStorage"],
      },
      backend: {
        loadPath: "/locale/{{lng}}/translation.json",
      },
      fallbackLng: "en",
      debug: false, // Turn on debugging to see more details
    },
    () => {
      console.log("i18n initialized");
    }
  );

export default i18n;
