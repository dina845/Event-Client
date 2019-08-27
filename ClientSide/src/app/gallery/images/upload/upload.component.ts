import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesComponent } from '../images.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  globalService: any;

  constructor(private router:Router,public imageComponent:ImagesComponent) { }

  ngOnInit() {
  }
  name = 'Angular 4';
  urls = [];
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                  //  this.urls.push(event.target.result);
                   debugger;
                   this.imageComponent.urls.push(event.target.result);
                }

                reader.readAsDataURL(event.target.files[i]);
        }
        // this.imageComponent.urls=this.urls;
        // this.router.navigate(['/file']);
    }
  }
}
