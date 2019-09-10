import { Component, OnInit, ChangeDetectorRef, Input, HostListener } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image';
import { saveAs } from "file-saver";
import * as JSZip from 'jszip';
import { Url } from 'src/app/services/url';
// import { PageScrollService } from 'ngx-page-scroll-core';
// import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
  constructor(public imagesService: ImagesService) { }
 

  public num = [1, 2, 3, 4, 5];
  selected: boolean = false;
  selectedGroom: boolean = false;
  fileToUpload: File=null;
  currentUrl: Url;
  Files: FileList;
  numImage:number=1;
  ngOnInit() {
  
  }

  handleFileInput(files: FileList) {
    this.Files = files;
    if (files && files[0]) {
      let _formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        this.fileToUpload = files.item(i);
        _formData.append("file", this.fileToUpload);
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.currentUrl = new Url();
          this.currentUrl.urlImage = event.target.result;
          this.currentUrl.nameImage = this.fileToUpload.name;
          this.currentUrl.num="image-"+this.numImage;
          this.numImage++;
          // this.urls.push(this.currentUrl);
          debugger;
          console.log(event.target.result);
        }
        reader.readAsDataURL(files[i]);
        console.log(JSON.stringify(_formData));
      }


      // this.downZip(files, files.length);
      this.InsertImages(_formData,files.length);//send the images' url to the server = in order to init the table
    }
    this.selected = true;
  }

  InsertImages(_formData,lengthFiles) {
    debugger;
    this.imagesService.InsertImages(_formData,lengthFiles).subscribe((res) => {
      debugger;
      if (res) {
        this.imagesService.imageMain=res;
        this.imagesService.imageTemp=res;
        this.imagesService.maxNumPerson();
        
        for (var i = 0; i < this.imagesService.imageTemp.length; i++) {
          this.imagesService.urls.push(this.imagesService.imageTemp[i].url);
        }
        // this.urls=this.imagesService.imageTemp["url"];
      }
    });
  }

  downZip() {
    var zip = new JSZip();
    // zip.file("Hello.txt", "Hello World\n");
    var img = zip.folder("images");
    for (let i = 0; i < this.Files.length; i++) {
      this.fileToUpload = this.Files.item(i);

      img.file(this.fileToUpload.name, this.fileToUpload, { File: true });
    }
    // img.file("smile.jpg ", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Una-presidents-home.jpg");
    zip.generateAsync({ type: "blob" })
      // saveAs(zip, "PhotoZip.zip")
      .then(function (blob) {
        saveAs(blob, "photos.zip");

      });
  }
  SelectGroom() {
    this.selectedGroom = true;
  }


  // scroll------------------------
  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}

