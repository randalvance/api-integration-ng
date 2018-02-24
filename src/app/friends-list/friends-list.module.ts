import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendsListActions } from './store/friends-list.actions';

import { FriendsListService } from './services/friends-list.service';

@NgModule({
    declarations: [ FriendsListComponent ],
    imports: 
    [ 
        BrowserModule, 
        CommonModule,
        HttpModule
    ],
    exports: [ 
        FriendsListComponent
    ],
    providers: [
        FriendsListActions,
        FriendsListService
    ]
})
export class FriendsListModule {

}
