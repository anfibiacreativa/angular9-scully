import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserlistComponent } from './teaserlist.component';

describe('TeaserlistComponent', () => {
  let component: TeaserlistComponent;
  let fixture: ComponentFixture<TeaserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
