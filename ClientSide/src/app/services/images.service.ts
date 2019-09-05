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
  public urls: Url[] = new Array;

  constructor(private http: HttpClient) {
    this.getImages().subscribe(res => {
      this.imageMain = res;
      this.imageTemp = res;
    })
  }
  InsertImages(formData):Observable<Image[]> {
    return this.http.post<Image[]>(environment.baseRoute + 'Image/InsertImages', formData);

  }
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.baseRoute + 'Image/getImages');

  }
  InsertImagesGroom(formData) {
    return this.http.post(environment.baseRoute + 'Image/InsertImagesGroom', formData);

  }
}
