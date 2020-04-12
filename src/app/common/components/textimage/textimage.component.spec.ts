import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextimageComponent } from './textimage.component';

describe('TextimageComponent', () => {
  let component: TextimageComponent;
  let fixture: ComponentFixture<TextimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
