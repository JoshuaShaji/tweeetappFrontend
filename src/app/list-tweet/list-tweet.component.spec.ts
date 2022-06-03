import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTweetComponent } from './list-tweet.component';

describe('ListTweetComponent', () => {
  let component: ListTweetComponent;
  let fixture: ComponentFixture<ListTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
