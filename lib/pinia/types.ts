export type createPiniaState = () => PiniaState;

export interface PiniaState {
    [prop: string]: any;
}

export interface PiniaGetter {
    [prop: string]: (state: PiniaState) => any;
}

export interface PiniaAction {
    [prop: string]: any;
}

export interface StoreConfig {
    state: createPiniaState;
    getters?: PiniaGetter;
    actions?: PiniaAction;
}

export interface PiniaStore {
    state: {
        [prop: string]: any;
    };
    [prop: string]: any;
}