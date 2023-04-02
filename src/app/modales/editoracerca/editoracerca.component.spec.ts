import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoracercaComponent } from './editoracerca.component';

describe('EditoracercaComponent', () => {
  let component: EditoracercaComponent;
  let fixture: ComponentFixture<EditoracercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoracercaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditoracercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
