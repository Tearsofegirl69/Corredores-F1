import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCorredorComponent } from './agregar-corredor.component';

describe('AgregarCorredorComponent', () => {
  let component: AgregarCorredorComponent;
  let fixture: ComponentFixture<AgregarCorredorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarCorredorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarCorredorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
