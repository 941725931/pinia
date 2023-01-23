import { App, computed, ComputedRef, reactive } from "vue";
import { PiniaStore, StoreConfig } from './types';


class Pinia {
    piniaStoreAll: { [name: string]: PiniaStore };
    context: App | undefined;

    constructor() {
        this.piniaStoreAll = {};
    }

    /**
     * 创建pinia
     */
    createPinia = (): { install: (app: App) => void } => {
        return {
            install: (app: App): void =>  {
                app.config.globalProperties.$pinia = this;
                this.context = app;
            }
        }
    }


    /**
     * 定义仓库
     */
    defineStore = (storeName: string, storeConfig: StoreConfig): Function => {        
        this.createStore(storeName, storeConfig);
        return (): PiniaStore => {
            if (!this.context) throw new Error('pinia is not registered');
            return this.piniaStoreAll[storeName];
        }
    }

    /**
     * 创建仓库
     */
    createStore = (storeName: string, storeConfig: StoreConfig): void => {
        this.piniaStoreAll[storeName] = { state: storeConfig.state() };
        if (storeConfig.getters) {
            Object.keys(storeConfig.getters).forEach((key: string) => {
                const value: ComputedRef = computed(() => storeConfig.getters![key].call(this.piniaStoreAll[storeName], this.piniaStoreAll[storeName].state));
                this.piniaStoreAll[storeName][key] = value;
            });
        }

        if (storeConfig.actions) {
            Object.keys(storeConfig.actions).forEach((key: string) => {
                this.piniaStoreAll[storeName][key] = storeConfig.actions![key];     
            });
        }

        this.piniaStoreAll[storeName] = reactive(this.piniaStoreAll[storeName]);
    }
}

const { createPinia, defineStore } = new Pinia();

export {
    createPinia,
    defineStore
}