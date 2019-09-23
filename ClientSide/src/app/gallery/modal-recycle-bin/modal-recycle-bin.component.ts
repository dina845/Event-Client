import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-modal-recycle-bin',
  templateUrl: './modal-recycle-bin.component.html',
  styleUrls: ['./modal-recycle-bin.component.css']
})
export class ModalRecycleBinComponent implements OnInit {

  constructor(public service:ImagesService) { }

  ngOnInit() {
  }
  showCycle() {
    this.service.showCycle = !this.service.showCycle;
// this.gotoBotton();
  }

}
