import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchnittTableComponent } from './schnitt-table.component';

describe('SchnittTableComponent', () => {
  let component: SchnittTableComponent;
  let fixture: ComponentFixture<SchnittTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchnittTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchnittTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
