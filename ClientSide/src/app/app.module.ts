import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './gallery/side-bar/side-bar.component';
import { HeaderComponent } from './gallery/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from './gallery/progress-bar/progress-bar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GroomComponent } from './gallery/groom/groom.component';
import { CheckboxDirective } from './directive/checkbox.directive';
import { HomeComponent } from './home/home.component';
// import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesComponent,
    SideBarComponent,
    HeaderComponent,
    ProgressBarComponent,
    GroomComponent,
    CheckboxDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "maroon",
      "radius": 50,
      "maxPercent": 100,
      "unitsColor": "#FFFFFF",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#FFFFFF",
      "subtitleColor": "#483500",
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false,

     
      // HttpClientModule,
      // CookieModule.forRoot()
    })
    // ,NgxPageScrollCoreModule,
 
  ],
  providers: [
    ImagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
