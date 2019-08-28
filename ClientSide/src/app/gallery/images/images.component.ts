import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

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
          this.urls.push(event.target.result);
          console.log(event.target.result);
        }
        reader.readAsDataURL(files[i]);
        console.log(JSON.stringify(_formData))
      }

      this.InsertImages(_formData);//send the images' url to the server = in order to init the table
    }
    this.selected = true;
  }

 
  InsertImages(_formData) {
    debugger;
    this.imagesService.InsertImages(_formData).subscribe((res: any) => {
      alert(res);
    });
  }


}

