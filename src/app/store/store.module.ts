import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState, INITIAL_STATE } from './model/app-state.model';

import { rootReducer } from './reducers/app.reducers';
import { AppActions } from './actions/app.actions';

@NgModule({
    imports: [ NgReduxModule ],
    providers: [ AppActions ]
})
export class StoreModule {
    constructor(
        public store: NgRedux<AppState>,
        devTools : DevToolsExtension
    ) {
        store.configureStore(
            rootReducer,
            INITIAL_STATE,
            [],
            devTools.isEnabled() ? [ devTools.enhancer() ] : []
        );
        console.log(store.getState());
    }
}