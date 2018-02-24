import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { FriendActions } from './store/friends.actions';

@NgModule({
    declarations: [ FriendsListComponent ],
    imports: 
    [ 
        BrowserModule, 
        CommonModule
    ],
    providers: [
        FriendActions
    ],
    exports: [ 
        FriendsListComponent 
    ]
})
export class FriendsModule {

}
