import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecycleBinComponent } from './modal-recycle-bin.component';

describe('ModalRecycleBinComponent', () => {
  let component: ModalRecycleBinComponent;
  let fixture: ComponentFixture<ModalRecycleBinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRecycleBinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRecycleBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
