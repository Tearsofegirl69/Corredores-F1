import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCorredoresComponent } from './editar-corredores.component';

describe('EditarCorredoresComponent', () => {
  let component: EditarCorredoresComponent;
  let fixture: ComponentFixture<EditarCorredoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarCorredoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCorredoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
