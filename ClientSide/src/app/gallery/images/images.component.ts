import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image';
import { saveAs } from "file-saver";
import * as JSZip from 'jszip';
import { Url } from 'src/app/services/url';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  constructor(private imagesService: ImagesService) { }
  urls: Url[] = new Array;
  public num = [1, 2, 3, 4, 5];
  selected: boolean = false;
  selectedGroom:boolean=false;
  fileToUpload: File;
  currentUrl: Url;
  Files: FileList;
  ngOnInit() {

  }

  handleFileInput(files: FileList) {
    this.Files = files;
    if (files && files[0]) {
      let _formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        var fileToUpload: File = null;
        this.fileToUpload = files.item(i);

        _formData.append("file", this.fileToUpload);
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.currentUrl = new Url();
          this.currentUrl.urlImage = event.target.result;
          this.currentUrl.nameImage = this.fileToUpload.name;
          this.urls.push(this.currentUrl);
          debugger;
          console.log(event.target.result);
        }
        reader.readAsDataURL(files[i]);
        console.log(JSON.stringify(_formData));
      }


      // this.downZip(files, files.length);
      this.InsertImages(_formData);//send the images' url to the server = in order to init the table
    }
    this.selected = true;
  }

  InsertImages(_formData) {
    debugger;
    this.imagesService.InsertImages(_formData).subscribe((res) => {
      debugger;
      if (res) {
        // this.imagesService.imageMain=res;
        // this.imagesService.imageTemp=res;
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
  SelectGroom()
  {
    this.selectedGroom=true;
  }
}

