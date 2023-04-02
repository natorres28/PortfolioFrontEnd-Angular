import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorformacionacademicaComponent } from './editorformacionacademica.component';

describe('EditorformacionacademicaComponent', () => {
  let component: EditorformacionacademicaComponent;
  let fixture: ComponentFixture<EditorformacionacademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorformacionacademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorformacionacademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
