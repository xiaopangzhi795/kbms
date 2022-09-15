import content from "./content";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "zh_CN",
  fallbackLocale: "en_US",
  content,
});

/** 注册i18n */
export default (app: any) => {
  app.use(i18n);
};
