import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWapperComponent } from './page-wapper.component';

describe('PageWapperComponent', () => {
  let component: PageWapperComponent;
  let fixture: ComponentFixture<PageWapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
