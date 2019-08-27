import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }
  InsertImages(urls:string[])
  {
    debugger;
    console.log(urls);
    return this.http.post(environment.baseRoute+'Image/InsertImages',urls);
  }
}
