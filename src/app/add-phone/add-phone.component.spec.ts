import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphoneComponent } from './add-phone.component';

describe('AddphoneComponent', () => {
  let component: AddphoneComponent;
  let fixture: ComponentFixture<AddphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddphoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
