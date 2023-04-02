import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditordocenteComponent } from './editordocente.component';

describe('EditordocenteComponent', () => {
  let component: EditordocenteComponent;
  let fixture: ComponentFixture<EditordocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditordocenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditordocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
