import { Component, OnInit, ChangeDetectorRef, Input, HostListener } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image';
import { saveAs } from "file-saver";
import * as JSZip from 'jszip';
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";
import { Url } from 'src/app/services/url';
// import { PageScrollService } from 'ngx-page-scroll-core';
// import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {
    public get http(): HttpClient {
      return this._http;
    }
  public set http(value: HttpClient) {
    this._http = value;
  }
  constructor(private _http: HttpClient, public imagesService: ImagesService,
    private cdRef: ChangeDetectorRef) { }
  public num = [1, 2, 3, 4, 5];
  selected: boolean = false;
  selectedGroom: boolean = false;
  fileToUpload: File = null;
  currentUrl: Url;
  Files: FileList;
  numImage: number = 1;
  img = "img.jpg";
  getRequests = [];
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
          this.currentUrl.num = "image-" + this.numImage;
          this.numImage++;
          // this.urls.push(this.currentUrl);
          debugger;
          console.log(event.target.result);
        }
        reader.readAsDataURL(files[i]);
        console.log(JSON.stringify(_formData));
      }


      // this.downZip(files, files.length);
      this.InsertImages(_formData, files.length);//send the images' url to the server = in order to init the table
    }
    this.selected = true;
  }

  InsertImages(_formData, lengthFiles) {
    debugger;
    this.imagesService.gotImages = false;
    this.imagesService.InsertImages(_formData, lengthFiles).subscribe((res) => {
      debugger;
      if (res) {
        this.imagesService.imageMain = res;
        this.imagesService.imageTemp = res;
        this.imagesService.maxNumPerson();
        this.imagesService.gotImages = true;
        for (var i = 0; i < this.imagesService.imageTemp.length; i++) {
          this.imagesService.urls.push(this.imagesService.imageTemp[i].url);
        }
        // this.urls=this.imagesService.imageTemp["url"];
      }
    });
  }

 

  DeleteImg(url) {
    debugger;
    console.log(url);
    this.imagesService.imageMain = this.imagesService.imageMain.filter(a => a.url != url);
    this.imagesService.imageTemp = this.imagesService.imageTemp.filter(a => a.url != url);
    this.imagesService.urls = this.imagesService.urls.filter(a => a != url);
    // this.imagesService.urls = new Array;
    // for (var i = 0; i < this.imagesService.imageTemp.length; i++) {
    //   this.imagesService.urls.push(this.imagesService.imageTemp[i].url);
    // }
    debugger;
    this.imagesService.DeleteImage(url).subscribe(res => {
      this.imagesService.getRecycleBin().subscribe(res => {
        this.imagesService.recycleBin = res;
      })
    });
    this.cdRef.detectChanges();
  }


  downloadZip() {
    var data: string[] = [""];
    for (let index = 0; index < this.imagesService.imageTemp.length; index++) {
      data.push(this.imagesService.imageTemp[index].url.toString());

    }
    debugger;
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

 // downZip() {
  //   var zip = new JSZip();
  //   // zip.file("Hello.txt", "Hello World\n");
  //   var img = zip.folder("images");
  //   for (let i = 0; i < this.Files.length; i++) {
  //     this.fileToUpload = this.Files.item(i);

  //     img.file(this.fileToUpload.name, this.fileToUpload, { File: true });
  //   }
  //   // img.file("smile.jpg ", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Una-presidents-home.jpg");
  //   zip.generateAsync({ type: "blob" })
  //     // saveAs(zip, "PhotoZip.zip")
  //     .then(function (blob) {
  //       saveAs(blob, "photos.zip");

  //     });
  // }

  // downZip2() {
  //   var imageData: ImageData;
  //   // var imageData = new Array(width);

  //   var image = new Image;
  //   // image.url="../../../assets/1771.jpg";

  //   // for (var i = 0; i < width; i++) {
  //   //     imageData[i] = new Array(height);
  //   // }

  //   // image.src = imageData
  //   // var image:Image;
  //   // image.url.urlImage="../../../assets/1771.jpg";
  //   // image.url.nameImage="1771.jpg";
  //   // imageData.data(image)
  //   var zip = new JSZip();
  //   // zip.file("Hello.txt", "Hello World\n");
  //   var img = zip.folder("images");


  //   img.file("thisfileToUpload.jpg", "../../../assets/1771.jpg", { url: true });

  //   // img.file("smile.jpg ", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Una-presidents-home.jpg");
  //   zip.generateAsync({ type: "blob" })
  //     // saveAs(zip, "PhotoZip.zip")
  //     .then(function (blob) {
  //       saveAs(blob, "photos.zip");

  //     });
  // }
  // SelectGroom() {
  //   this.selectedGroom = true;
  // }