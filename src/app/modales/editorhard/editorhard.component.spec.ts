import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorhardComponent } from './editorhard.component';

describe('EditorhardComponent', () => {
  let component: EditorhardComponent;
  let fixture: ComponentFixture<EditorhardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorhardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorhardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
