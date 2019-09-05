import { Component, OnInit, Injectable } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
@Injectable()
export class ProgressBarComponent{


  constructor(private imageService:ImagesService) {
    this.sizeUploadFiles=imageService.sizeUploadFiles;
    this.part=this.sizeUploadFiles/100;
    setInterval(() => { 
      this.per=this.per+1;
    }, this.sizeUploadFiles*10);
  }
  per:any=0.0;
  sizeUploadFiles:number;
  part:any=0.0;
}
