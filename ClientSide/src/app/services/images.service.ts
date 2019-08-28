import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }
  InsertImages(formData): any
  {
    debugger;
    console.log(formData);
    return this.http.post(environment.baseRoute+'Image/file',formData);
  }
}
