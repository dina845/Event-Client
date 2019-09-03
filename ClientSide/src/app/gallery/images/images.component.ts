import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { Image } from 'src/app/models/image';
import { saveAs } from "file-saver";
import * as JSZip from 'jszip';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  constructor(private imagesService: ImagesService) { }
  urls: string[] = new Array;
  public num = [1, 2, 3, 4, 5];
  selected: boolean = false;
  fileToUpload: File = null;


  ngOnInit() {

  }
  handleFileInput(files: FileList) {

    if (files && files[0]) {
      let _formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        this.fileToUpload=files.item(i);
       _formData.append("file",this.fileToUpload);
        var reader = new FileReader();
        reader.onload = (event: any) => {
          // this.urls.push(event.target.result);
          console.log(event.target.result);
        }
        reader.readAsDataURL(files[i]);
        console.log(JSON.stringify(_formData))
      }
      this.downZip(files,files.length);
      this.InsertImages(_formData);//send the images' url to the server = in order to init the table
    }
    this.selected = true;
  }

 
  InsertImages(_formData) {
    debugger;
    this.imagesService.InsertImages(_formData).subscribe((res) => {
      debugger;
      if(res){
      // this.imagesService.imageMain=res;
      // this.imagesService.imageTemp=res;
      // this.urls=this.imagesService.imageTemp["url"];
    }
    });
  }

  downZip(files:FileList, size:number) {
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    var img = zip.folder("images");
    for (let i = 0; i < size; i++) {
      this.fileToUpload=files.item(i);

    img.file(i.toString()+".jpg", this.fileToUpload,{File:true});
  }
    // img.file("smile.jpg ", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Una-presidents-home.jpg");
    zip.generateAsync({ type: "blob" })
      // saveAs(zip, "DevoraZip.zip");
      .then(function (blob) {
        saveAs(blob, "fffffff.zip");

      });
  }
}

