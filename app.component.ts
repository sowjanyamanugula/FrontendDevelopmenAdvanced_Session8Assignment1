import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
 /* template: ` <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>`,*/
     templateUrl: 'app/sando-app.component.html',
  styleUrls: ['app/sando-app.component.css']
})
export class AppComponent  { pageTitle : string = `Session 12 Assignment 4`; }




