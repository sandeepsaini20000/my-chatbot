
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyChatbotLibModule } from 'my-chatbot-lib';
NgModule({
    declarations: [
      AppComponent  
    ],
    imports: [
        BrowserModule,
        MyChatbotLibModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }