import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './gallery/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ImagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
