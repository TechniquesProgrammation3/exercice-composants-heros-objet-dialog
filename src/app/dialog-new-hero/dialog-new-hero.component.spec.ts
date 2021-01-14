import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNewHeroComponent } from './dialog-new-hero.component';

describe('DialogNewHeroComponent', () => {
  let component: DialogNewHeroComponent;
  let fixture: ComponentFixture<DialogNewHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogNewHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
