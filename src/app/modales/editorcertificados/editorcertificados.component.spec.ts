import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorcertificadosComponent } from './editorcertificados.component';

describe('EditorcertificadosComponent', () => {
  let component: EditorcertificadosComponent;
  let fixture: ComponentFixture<EditorcertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorcertificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorcertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
