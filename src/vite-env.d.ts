/// <reference types="vite/client" /> 

//型別聲明
declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error) => void
  }

  export function registerSW(options?: RegisterSWOptions): void;
}