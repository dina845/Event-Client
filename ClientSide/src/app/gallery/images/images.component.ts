import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @Input()
  urls:string[]=new Array;
  @Output() q = new EventEmitter<string[]>();

  constructor() { }
// urls:string[]=new Array;
  public num=[1,2,3,4,5];
  ngOnInit() {
    debugger;
  }
  debugger;
 updateQuestion()
  {
    this.q.emit(this.urls);
  }
}

