import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorexperienciaComponent } from './editorexperiencia.component';

describe('EditorexperienciaComponent', () => {
  let component: EditorexperienciaComponent;
  let fixture: ComponentFixture<EditorexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorexperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
