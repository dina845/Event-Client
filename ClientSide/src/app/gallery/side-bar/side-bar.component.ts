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
  m: boolean;
  imageMain: Image[];
  imageTemp: Image[];
  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe(res => {
      this.imageMain = res;
      this.imageTemp = res;
    })
  }
  filterAflerFalse() {
    this.imageTemp = this.imageMain;
    if (this.filterImage.isBlur == true)
      this.isBlur(false);
    if (this.filterImage.isDark == true)
      this.isDark(false);
    if (this.filterImage.isCloseEye == true)
      this.isCloseEye(false);
    if (this.filterImage.isCutFace == true)
      this.isCutFace(false);
    if (this.filterImage.isInside == true)
      this.isInside(false);
    if (this.filterImage.isGroomAlone == true)
      this.isGroomAlone(false);
    if (this.filterImage.isGroomContain == true)
      this.isGroomContain(false);
    if (this.filterImage.ischild == true)
      this.isChild(false);
    if (this.filterImage.isAdult == true)
      this.isAdult(false);
  }
  isBlur(blur) {
    this.filterImage.isBlur = blur;

    if (blur == false) {
      this.imageTemp = this.imageTemp.filter(p => p.isBlur == true);
    }
    else
      this.filterAflerFalse();
  }
  isDark(dark) {
    this.filterImage.isDark = dark;
    if (dark == false)
      this.imageTemp = this.imageTemp.filter(p => p.isDark == true);
    else
      this.filterAflerFalse();
  }
  isCloseEye(closeEye) {
    this.filterImage.isCloseEye = closeEye;
    if (closeEye == false)
      this.imageTemp = this.imageTemp.filter(p => p.isClosedEye == true);
    else
      this.filterAflerFalse();
  }
  isCutFace(cutFace) {
    this.filterImage.isCutFace = cutFace;
    if (cutFace == false)
      this.imageTemp = this.imageTemp.filter(p => p.isCutFace == true);
    else
      this.filterAflerFalse();
  }


  isInside(Inside) {
    this.filterImage.isInside = Inside;
    if (Inside == false)
      this.imageTemp = this.imageTemp.filter(p => p.isInside == true);
    else
      this.filterAflerFalse();
  }
  isGroomAlone(GroomAlone) {
    this.filterImage.isGroomAlone = GroomAlone;
    if (GroomAlone == false)
      this.imageTemp = this.imageTemp.filter(p => p.isGroom == true && p.numPerson == 1);
    else
      this.filterAflerFalse();
  }
  isGroomContain(GroomContain) {
    this.filterImage.isGroomContain = GroomContain;
    if (GroomContain == false)
      this.imageTemp = this.imageTemp.filter(p => p.isGroom == true && p.numPerson > 1);
    else
      this.filterAflerFalse();
  }
  isChild(child) {
    this.filterImage.ischild = child;
    if (child == false)
      this.imageTemp = this.imageTemp.filter(p => p.hasChildren == true);
    else
      this.filterAflerFalse();
  }
  isAdult(Adult) {
    this.filterImage.isAdult = Adult;
    if (Adult == false)
      this.imageTemp = this.imageTemp.filter(p => p.hasAdults == true);
    else
      this.filterAflerFalse();
  }
}
