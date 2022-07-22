import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaComponent } from './insta.component';

describe('InstaComponent', () => {
  let component: InstaComponent;
  let fixture: ComponentFixture<InstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
