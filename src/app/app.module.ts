import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { route1 } from './route.config';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { FamilyDetailsComponent } from './family-details/family-details.component';
import { EducationalDetailsComponent } from './educational-details/educational-details.component';




@NgModule({
  declarations: [
    AppComponent,
    ErrorComponentComponent,
    FamilyDetailsComponent,
    EducationalDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route1)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
