import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProductComponent } from './our-product.component';

describe('OurProductComponent', () => {
  let component: OurProductComponent;
  let fixture: ComponentFixture<OurProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
