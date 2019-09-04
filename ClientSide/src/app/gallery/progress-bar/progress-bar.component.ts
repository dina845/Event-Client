import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
@Injectable()
export class ProgressBarComponent{


  constructor() {
    setInterval(() => {
      this.per=this.per+1;
    }, 100);
  }
  per:number=0;
}
