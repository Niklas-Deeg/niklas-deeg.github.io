import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpieltagsplanungComponent } from './spieltagsplanung.component';

describe('SpieltagsplanungComponent', () => {
  let component: SpieltagsplanungComponent;
  let fixture: ComponentFixture<SpieltagsplanungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpieltagsplanungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpieltagsplanungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
