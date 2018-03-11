import { Component } from '@angular/core';
import { smoothlyMenu } from '../../../../../app.helpers';
declare var jQuery:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }
}
