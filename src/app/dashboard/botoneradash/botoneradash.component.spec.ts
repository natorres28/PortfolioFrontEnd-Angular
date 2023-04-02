import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneradashComponent } from './botoneradash.component';

describe('BotoneradashComponent', () => {
  let component: BotoneradashComponent;
  let fixture: ComponentFixture<BotoneradashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneradashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoneradashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
