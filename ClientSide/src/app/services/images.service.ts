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
    alert("beggin");
    alert(urls);
    debugger;
    console.log(urls);
    alert("service");
    return this.http.post(environment.baseRoute+'Image/InsertImages',urls);
  }
}
