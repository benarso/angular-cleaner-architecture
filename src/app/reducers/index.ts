import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import {environment} from '../../environments/environment';
import {LocalStorageConfig, localStorageSync} from 'ngrx-store-localstorage';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {

}

export function sessionStorage(reducer: ActionReducer<any>): ActionReducer<any> {
    const config: LocalStorageConfig = {
        keys: [
            'auth', 'todo'
        ],
        rehydrate: true,
        removeOnUndefined: false
    };

    return localStorageSync(config)(reducer);
}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [sessionStorage] : [sessionStorage];
