import { Component } from '@angular/core';
import {AuthModule} from './auth/auth.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoManager';
}
