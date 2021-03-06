import Vue from 'vue';

type ToastOptions = {
  autoClose?: boolean;
  enableHtml?: boolean;
  position?: string;
}


declare module 'vue/types/vue' {
  interface Vue {
    $toast:  (message: string, toastOptions: ToastOptions) => void;
  }
}