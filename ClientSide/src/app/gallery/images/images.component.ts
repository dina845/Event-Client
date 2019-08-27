import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  constructor(private imagesService:ImagesService) { }
>>>>>>> a651ab1ff2767a61a0abbb09cb3d59012fa65a9e
  urls:string[]=new Array;
  public num=[1,2,3,4,5];
  selected:boolean=false;
  ngOnInit() {
    
  }
  //upload images
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.urls.push(event.target.result);
                   debugger;
                }
                reader.readAsDataURL(event.target.files[i]);
        }
        this.InsertImages(this.urls);//send the images' url to the server = in order to init the table
    }
    this.selected=true;
  }
  InsertImages(urls:string[])
  {
    alert("ts");
    debugger;
    this.imagesService.InsertImages(urls).subscribe((res: any) => {
     alert("gooooood");
     alert(res);
  });
}
}

