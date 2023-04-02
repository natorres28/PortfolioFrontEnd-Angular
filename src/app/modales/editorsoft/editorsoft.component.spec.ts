import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorsoftComponent } from './editorsoft.component';

describe('EditorsoftComponent', () => {
  let component: EditorsoftComponent;
  let fixture: ComponentFixture<EditorsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorsoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
