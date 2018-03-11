import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import 'jquery-slimscroll';

declare var jQuery: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private router: Router) { }


  ngAfterViewInit() {
    // jQuery('#side-menu').metisMenu();
    //this.doJqueryLoad();    
    // if (jQuery("body").hasClass('fixed-sidebar')) {
    //   jQuery('.sidebar-collapse').slimscroll({
    //     height: '100%'
    //   })
    // }
  }

  // activeRoute(routename: string): boolean{
  //   return this.router.url.indexOf(routename) > -1;
  // }

  doJqueryLoad() {
    jQuery( document ).ready(function() {
      console.log( "Unnecessary..." );
  }); 
}
}
