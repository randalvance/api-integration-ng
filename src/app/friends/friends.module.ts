import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '../store/store.module';

import { FriendsListComponent } from './components/friends-list/friends-list.component';

@NgModule({
    declarations: [ FriendsListComponent ],
    imports: [ BrowserModule, CommonModule, StoreModule ],
    exports: [ FriendsListComponent ]
})
export class FriendsModule {

}
