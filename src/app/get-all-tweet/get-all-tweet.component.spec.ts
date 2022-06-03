import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTweetComponent } from './get-all-tweet.component';

describe('GetAllTweetComponent', () => {
  let component: GetAllTweetComponent;
  let fixture: ComponentFixture<GetAllTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
