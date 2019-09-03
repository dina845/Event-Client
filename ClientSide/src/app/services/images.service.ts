import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageMain: Image[];
  imageTemp: Image[];
  constructor(private http:HttpClient) { 
    this.getImages().subscribe(res => {
      this.imageMain = res;
      this.imageTemp = res;
    })
  }
  InsertImages(formData): any
  {
    debugger;
    console.log(formData);
    return this.http.post(environment.baseRoute+'Image/InsertImages',formData);
    
  }
  getImages():Observable<Image[]>{
    return this.http.get<Image[]>(environment.baseRoute+'Image/getImages');

  }
}
