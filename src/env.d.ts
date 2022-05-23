/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_BASE_URL: string;
  readonly APP_SUPA_URL: string;
  readonly APP_SUPA_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
