import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosPagesComponent } from './alumnos-pages.component';

describe('AlumnosPagesComponent', () => {
  let component: AlumnosPagesComponent;
  let fixture: ComponentFixture<AlumnosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
