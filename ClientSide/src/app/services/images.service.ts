import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Image } from '../models/image';
import { Url } from './url';
import { WebResult } from '../models/web-result';

const httpOptions: any = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageMain: Image[];
  imageTemp: Image[];
  recycleBin: Image[] = null;
  isHome: boolean = true;
  showCycle: boolean = false;
  firstRecycleBin: Image;
  numPersonTemp: number = 0;
  selectedGroom: any;
  public urls: Url[] = new Array;
  sizeUploadFiles: number;
  gotImages: boolean = false;
  constructor(private http: HttpClient) {
    this.getImages().subscribe(res => {
      if (res.Status == false) {
        console.log(res.Message);
      }
      else {
        this.imageMain = res.Value;
        this.imageTemp = res.Value;
        this.gotImages = true;
        for (var i = 0; i < this.imageTemp.length; i++) {
          this.urls.push(this.imageTemp[i].url);
        }
      }
      this.getRecycleBin().subscribe(res => {
        if (res.Status == false) {
          console.log(res.Message);
        }
        else {
          this.recycleBin = res.Value;
        }
        this.hasGroom().subscribe(res => {
          if (res.Status == false) {
            this.selectedGroom=false;
            console.log(res.Message);
          }
          else {
            this.selectedGroom = res.Value;
          }
        })

      });
    });

  }
  InsertImages(formData, sizeFiles): Observable<WebResult<Image[]>> {
    this.sizeUploadFiles = sizeFiles;
    return this.http.post<WebResult<Image[]>>(environment.baseRoute + 'Image/InsertImages', formData);

  }
  hasGroom() {
    return this.http.get<WebResult<any>>(environment.baseRoute + 'Image/HasGroom');
  }
  getImages(): Observable<WebResult<Image[]>> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');
    // return this.http.get<Account>(baseUrl + 'accounts',  {headers});
    return this.http.get<WebResult<Image[]>>(environment.baseRoute + 'Image/getImages', { headers });

  }
  InsertImagesGroom(formData) {
    return this.http.post<WebResult<any>>(environment.baseRoute + 'Image/InsertGroom', formData);

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
    debugger;
    this.img = new Image();
    this.img.url = url;
    return this.http.post<WebResult<any>>(environment.baseRoute + 'Image/DeleteImage', this.img);
  }
  getRecycleBin(): Observable<WebResult<Image[]>> {
    return this.http.get<WebResult<Image[]>>(environment.baseRoute + 'Image/getRecycleBin');
  }
}
