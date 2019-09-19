import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-groom',
  templateUrl: './groom.component.html',
  styleUrls: ['./groom.component.css']
})
export class GroomComponent implements OnInit {

  constructor(public imagesService: ImagesService) { }
  fileToUpload: File = null;
  url: string;
  ngOnInit() {
  }
  handleFileInput(files: FileList) {

    if (files && files[0]) {
      let _formData = new FormData();
      this.fileToUpload = files[0];
      _formData.append("file", this.fileToUpload);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;

      }
      for (let index = 0; index < files.length; index++) {
        reader.readAsDataURL(files[index]);
        console.log(JSON.stringify(_formData))

      }
      this.imagesService.InsertImagesGroom(_formData).subscribe(res => {
        if (res.Status == false) {
          console.log(res.Message);
          // this.toastr.error(res.Message);
        }
        else {
          debugger;
          this.imagesService.imageMain = res.Value;
          console.log(res.Value);
          this.imagesService.imageTemp = res.Value;
          this.imagesService.maxNumPerson();
          this.imagesService.gotImages = true;
          this.imagesService.urls = new Array();
          for (var i = 0; i < this.imagesService.imageTemp.length; i++) {
            this.imagesService.urls.push(this.imagesService.imageTemp[i].url);
          }
        }
      })
      

    }
  }
}
