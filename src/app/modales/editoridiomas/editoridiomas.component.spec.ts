import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoridiomasComponent } from './editoridiomas.component';

describe('EditoridiomasComponent', () => {
  let component: EditoridiomasComponent;
  let fixture: ComponentFixture<EditoridiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoridiomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoridiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
