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
import { GroomComponent } from './gallery/groom/groom.component';
import { NgDragDropModule } from 'ng-drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImagesComponent,
    SideBarComponent,
    HeaderComponent,
    GroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [
    ImagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
