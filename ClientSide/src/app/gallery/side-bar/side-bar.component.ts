import { Component, OnInit } from '@angular/core';
import { FilterImage } from 'src/app/models/filter-image';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';
import { ImagesComponent } from '../images/images.component';
import { Url } from 'src/app/services/url';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  filterImage: FilterImage = new FilterImage();

  // m: boolean;
  // imageMain: Image[];
  // imageTemp: Image[];
  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    // this.imagesService.getImages().subscribe(res => {
    //   this.imageMain = res;
    //   this.imageTemp = res;
    // })
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
    if (this.filterImage.isInside == true)
      this.isInside(true);
    if (this.filterImage.isOutdoor == true)
      this.isOutdoor(true);
    if (this.filterImage.isGroomAlone == true)
      this.isGroomAlone(true);
    if (this.filterImage.isGroomContain == true)
      this.isGroomContain(true);
    if (this.filterImage.ischild == true)
      this.isChild(true);
    if (this.filterImage.isAdult == true)
      this.isAdult(true);
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
      this.imagesService.urls.push(  u);
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
    this.filterImage.isInside = Inside;
    if (Inside == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isInside == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }
  isOutdoor(Outdoor) {
    this.filterImage.isOutdoor = Outdoor;
    if (Outdoor == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isInside == false);
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
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isGroom == true && p.numPerson > 1);
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
  isAdult(Adult) {
    this.filterImage.isAdult = Adult;
    if (Adult == true) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.hasAdults == true);
      // this.images.urls = this.imagesService.imageTemp["url"];
      this.urlFilter();

    }
    else
      this.filterAflerFalse();
  }
  numPerson(num) {
    // this.filterImage.numChild=num;
    // this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.numPerson==num);


    if (num != "") {
      this.filterImage.numChild = num;
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.numPerson == num);
      this.urlFilter();
    }
    else {
      this.filterImage.numChild = undefined;
      this.filterAflerFalse();
    }
  }
  maxNumPerson() {
    this.imagesService.maxNumPerson
  }
}
