import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MediaObjectComponent } from './media-object.component';
describe('MediaObjectComponent', () => {
  let component: MediaObjectComponent;
  let fixture: ComponentFixture<MediaObjectComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MediaObjectComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(MediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
