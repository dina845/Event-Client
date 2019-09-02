import { Component, OnInit } from '@angular/core';
import { FilterImage } from 'src/app/models/filter-image';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
imageResult:FilterImage=new FilterImage();
  constructor() { }

  ngOnInit() {

  }
  filter(){
    this.imageResult;
    this.imageResult.isAdult;
    debugger
  }

}
