import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { route1 } from './route.config';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { MaterialModule } from './material/material.module';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route1)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
