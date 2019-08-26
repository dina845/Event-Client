import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImagesComponent } from './gallery/images/images.component';
import { UploadComponent } from './gallery/images/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ImagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
