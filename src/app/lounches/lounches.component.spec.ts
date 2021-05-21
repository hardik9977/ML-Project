import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LounchesComponent } from './lounches.component';

describe('LounchesComponent', () => {
  let component: LounchesComponent;
  let fixture: ComponentFixture<LounchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LounchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LounchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
