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

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesComponent,
    SideBarComponent,
    HeaderComponent,
    ProgressBarComponent,
    GroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#FDB900",
      "radius": 200,
      "maxPercent": 100,
      "unitsColor": "#483500",
      "outerStrokeWidth": 5,
      "outerStrokeColor": "#FFFFFF",
      "innerStrokeColor": "#FFFFFF",
      "titleColor": "#483500",
      "subtitleColor": "#483500",
      "showSubtitle": false,
      "showInnerStroke": false,
      "startFromZero": false
    }),
 
  ],
  providers: [
    ImagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
