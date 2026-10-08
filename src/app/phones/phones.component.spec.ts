import { ComponentFixture, TestBed } from '@angular/core/testing';

import { phonesComponent } from './phones.component';

describe('phonesComponent', () => {
  let component: phonesComponent;
  let fixture: ComponentFixture<phonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [phonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(phonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
