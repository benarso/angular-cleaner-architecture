import { Component } from '@angular/core';
import {MessagingService} from './core/domain/messaging-service';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import {Store} from '@ngrx/store';
import {MatSnackBar} from '@angular/material';
import * as fromAuth from './auth/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {


  constructor(readonly store: Store<any>, messagingService: MessagingService) {
    messagingService.getMessages().subscribe(message => {
      console.log(message.message);
    });
  }


}

