import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Image } from '../models/image';
import { Url } from './url';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageMain: Image[];
  imageTemp: Image[];
  recycleBin: Image[];
  firstRecycleBin: Image;
  numPersonTemp: number = 0;
  public urls: Url[] = new Array;
  sizeUploadFiles: number;
  gotImages: boolean = false;
  constructor(private http: HttpClient) {
    this.getImages().subscribe(res => {
      this.imageMain = res;
      this.imageTemp = res;
      this.gotImages = true;
      for (var i = 0; i < this.imageTemp.length; i++) {
        this.urls.push(this.imageTemp[i].url);
      } 
      this.getRecycleBin().subscribe(res => {
        this.recycleBin = res;
       
      });
    });

  }
  InsertImages(formData, sizeFiles): Observable<Image[]> {
    this.sizeUploadFiles = sizeFiles;
    return this.http.post<Image[]>(environment.baseRoute + 'Image/InsertImages', formData);

  }
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.baseRoute + 'Image/getImages');

  }
  InsertImagesGroom(formData) {
    return this.http.post(environment.baseRoute + 'Image/InsertGroom', formData);

  }
  maxNumPerson() {
    var max: number = 0
    this.imageTemp.forEach(element => {
      if (element.numPerson > max)
        max = element.numPerson
    });
    this.numPersonTemp = max;
  }
  img: Image;
  DeleteImage(url) {
    this.img = new Image();
    this.img.url = url;
    return this.http.post(environment.baseRoute + 'Image/DeleteImage', this.img);
  }
  getRecycleBin(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.baseRoute + 'Image/getRecycleBin');
  }
}
