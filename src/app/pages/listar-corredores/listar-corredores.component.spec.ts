import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorredoresComponent } from './listar-corredores.component';

describe('ListaCorredoresComponent', () => {
  let component: ListaCorredoresComponent;
  let fixture: ComponentFixture<ListaCorredoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCorredoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCorredoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
