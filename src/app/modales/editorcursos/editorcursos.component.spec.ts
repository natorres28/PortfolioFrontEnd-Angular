import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorcursosComponent } from './editorcursos.component';

describe('EditorcursosComponent', () => {
  let component: EditorcursosComponent;
  let fixture: ComponentFixture<EditorcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
