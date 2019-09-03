import { Component, OnInit } from '@angular/core';
import { FilterImage } from 'src/app/models/filter-image';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images.service';

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
    if (this.filterImage.isBlur == false)
      this.isBlur(false);
    if (this.filterImage.isDark == false)
      this.isDark(false);
    if (this.filterImage.isCloseEye == false)
      this.isCloseEye(false);
    if (this.filterImage.isCutFace == false)
      this.isCutFace(false);
    if (this.filterImage.isInside == false)
      this.isInside(false);
    if (this.filterImage.isGroomAlone == false)
      this.isGroomAlone(false);
    if (this.filterImage.isGroomContain == false)
      this.isGroomContain(false);
    if (this.filterImage.ischild == false)
      this.isChild(false);
    if (this.filterImage.isAdult == false)
      this.isAdult(false);
  }
  isBlur(blur) {
    this.filterImage.isBlur = blur;

    if (blur == false) {
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isBlur == true);
    }
    else
      this.filterAflerFalse();
  }
  isDark(dark) {
    this.filterImage.isDark = dark;
    if (dark == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isDark == true);
    else
      this.filterAflerFalse();
  }
  isCloseEye(closeEye) {
    this.filterImage.isCloseEye = closeEye;
    if (closeEye == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isClosedEye == true);
    else
      this.filterAflerFalse();
  }
  isCutFace(cutFace) {
    this.filterImage.isCutFace = cutFace;
    if (cutFace == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isCutFace == true);
    else
      this.filterAflerFalse();
  }


  isInside(Inside) {
    this.filterImage.isInside = Inside;
    if (Inside == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isInside == true);
    else
      this.filterAflerFalse();
  }
  isGroomAlone(GroomAlone) {
    this.filterImage.isGroomAlone = GroomAlone;
    if (GroomAlone == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isGroom == true && p.numPerson == 1);
    else
      this.filterAflerFalse();
  }
  isGroomContain(GroomContain) {
    this.filterImage.isGroomContain = GroomContain;
    if (GroomContain == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.isGroom == true && p.numPerson > 1);
    else
      this.filterAflerFalse();
  }
  isChild(child) {
    this.filterImage.ischild = child;
    if (child == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.hasChildren == true);
    else
      this.filterAflerFalse();
  }
  isAdult(Adult) {
    this.filterImage.isAdult = Adult;
    if (Adult == false)
      this.imagesService.imageTemp = this.imagesService.imageTemp.filter(p => p.hasAdults == true);
    else
      this.filterAflerFalse();
  }
}
