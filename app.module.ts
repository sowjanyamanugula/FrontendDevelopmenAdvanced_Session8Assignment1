import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import {FormsModule }  from '@angular/forms';
import { AppComponent }  from './app.component';




import { OrderSheetComponent } from './counter/order-sheet/order-sheet.component';


@NgModule({
  imports:      [ BrowserModule ,FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent,
                OrderSheetComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
