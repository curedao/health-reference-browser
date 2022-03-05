import packageJson from '../package.json';

export const environment = {
  production: process.env.NODE_ENV, // not used yet
  base_api: process.env.BASE_API, // not used yet, server url
  lang: 'en',
  version: `v${packageJson.version}`,
  node_env: 'production',  // 'production' , 'test' , 'dev'
  path_logo: '/static/curedao_logo.svg',
}

export const businessLogic = {
  title: 'CureDAO health reference browser',
  support_email: 'hello@curedao.org',
  // At CSV Import
  default_source_name: 'CureDAO',
  filename_preset: 'CureDAO_data-export_',
  // General links
  url_main_website: "https://curedao.org/",
  url_doc_website: "https://docs.curedao.org/",
  url_privacy_policy: "https://www.curedao.org/privacy-policy",
  url_terms_of_use: "https://www.curedao.org/terms-of-use",
}