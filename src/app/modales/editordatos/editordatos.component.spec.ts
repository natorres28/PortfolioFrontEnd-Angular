import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditordatosComponent } from './editordatos.component';

describe('EditordatosComponent', () => {
  let component: EditordatosComponent;
  let fixture: ComponentFixture<EditordatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditordatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditordatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
