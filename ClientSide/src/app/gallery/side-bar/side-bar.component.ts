// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ChangeDetectorRef, Input, HostListener } from '@angular/core';

import { FilterImage } from 'src/app/models/filter-image';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';
import { ImagesComponent } from '../images/images.component';
import { Url } from 'src/app/services/url';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import * as JSZip from 'jszip';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public get http(): HttpClient {
    return this._http;
  }
public set http(value: HttpClient) {
  this._http = value;
}
  filterImage: FilterImage = new FilterImage();

getRequests = [];
  // m: boolean;
  // imageMain: Image[];
  // imageTemp: Image[];
  constructor(private imagesService: ImagesService,private _http: HttpClient) { }

  ngOnInit() {
    // this.imagesService.getImages().subscribe(res => {
    //   this.imageMain = res;
    //   this.imageTemp = res;
    // })
  }
  showCycle(){
    this.imagesService.showCycle=!this.imagesService.showCycle;
  }
  filterAflerFalse() {
    this.imagesService.imageTemp = this.imagesService.imageMain;
    if (this.filterImage.isBlur == true)
      this.isBlur(true);
    if (this.filterImage.isDark == true)
      this.isDark(true);
    if (this.filterImage.isCloseEye == true)
      this.isCloseEye(true);
    if (this.filterImage.isCutFace == true)
      this.isCutFace(true);
    if (this.filterImage.isIndoors == true)
      this.isInside(true);
    if (this.filterImage.isOutdoors == true)
      this.isOutdoor(true);
    if (this.filterImage.isGroomAlone == true)
      this.isGroomAlone(true);
    if (this.filterImage.isGroomContain == true)
      this.isGroomContain(true);
    if (this.filterImage.ischild == true)
      this.isChild(true);
    // if (this.filterImage.isAdult == true)
    //   this.isAdult(true);
    if (this.filterImage.numChild != undefined)
      this.numPerson(this.filterImage.numChild);
    // this.images.urls = this.imagesService.imageTemp["url"];
    this.urlFilter();

  }
  urlFilter() {
    this.imagesService.urls = new Array;
    for (var i = 0; i < this.imagesService.imageTemp.length; i++) {
      var u=new Url;
      u=this.imagesService.imageTemp[i].url;
      this.imagesService.urls.push(u);
      // debugger;
    }

    this.maxNumPerson();

  }
  isBlur(blur) {
    this.filterImage.isBlur = blur;

    if (blur == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isBlur == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();
    }
    else
      this.filterAflerFalse();
  }
  isDark(dark) {
    this.filterImage.isDark = dark;
    if (dark == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isDark == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();


    }
    else
      this.filterAflerFalse();
  }
  isCloseEye(closeEye) {
    debugger;
    this.filterImage.isCloseEye = closeEye;
    if (closeEye == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isClosedEye == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }
  isCutFace(cutFace) {
    this.filterImage.isCutFace = cutFace;
    if (cutFace == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isCutFace == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }


  isInside(Inside) {
    this.filterImage.isIndoors = Inside;
    if (Inside == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isIndoors == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }
  isOutdoor(Outdoor) {
    this.filterImage.isOutdoors = Outdoor;
    if (Outdoor == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isOutdoors == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();
    }
    else
      this.filterAflerFalse();
  }
  isGroomAlone(GroomAlone) {
    this.filterImage.isGroomAlone = GroomAlone;
    if (GroomAlone == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isGroom == true && p.numPerson == 1);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }
  isGroomContain(GroomContain) {
    this.filterImage.isGroomContain = GroomContain;
    if (GroomContain == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isGroom == true );
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }
  isChild(child) {
    this.filterImage.ischild = child;
    if (child == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.hasChildren == true);
      this.urlFilter();
      // this.images.urls = this.imagesService.imageTemp["url"];
    }
    else
      this.filterAflerFalse();
  }
  // isAdult(Adult) {
  //   this.filterImage.isAdult = Adult;
  //   if (Adult == true) {
  //     this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.hasAdults == true);
  //     // this.images.urls = this.imagesService.imageTemp["url"];
  //     this.urlFilter();

  //   }
  //   else
  //     this.filterAflerFalse();
  // }
  numPerson(num) {
    // this.filterImage.numChild=num;
    // this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.numPerson==num);
    this.filterImage.numChild = undefined;
    this.filterAflerFalse();
    if (num != "") { 
      this.filterImage.numChild = num;
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.numPerson == num);
      this.urlFilter();
    }
    
  }
  maxNumPerson() {
    this.imagesService.maxNumPerson
  }
  downloadZip() {
    var data: string[] = [""];
    for (let index = 0; index < this.imagesService.imageTemp.length; index++) {
      data.push(this.imagesService.imageTemp[index].url.toString());

    }
    debugger;
    this.getRequests=new Array;
    //  this. data= this.service.urls[0].urlImage;
    this.createGetRequets(data);

    forkJoin(...this.getRequests)
      .subscribe((res) => {
        var zip = new JSZip();

        res.forEach((f, i) => {
          zip.file(`image${i}.jpg`, f);
        });

        /* With file saver */
        // zip
        //   .generateAsync({ type: 'blob' })
        //   .then(blob => saveAs(blob, 'image.zip'));

        /* Without file saver */
        zip
          .generateAsync({ type: 'blob' })
          .then(blob => {
            const a: any = document.createElement('a');
            document.body.appendChild(a);

            a.style = 'display: none';
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'pp.zip';
            a.click();
            window.URL.revokeObjectURL(url);
          });
      });
  }

  private createGetRequets(data: string[]) {
   
    data.forEach(url => this.getRequests.push(this._http.get(url, { responseType: 'blob' })));
  }
}
