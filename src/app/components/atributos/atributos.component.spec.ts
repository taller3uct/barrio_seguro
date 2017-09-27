import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosComponent } from './atributos.component';

describe('AtributosComponent', () => {
  let component: AtributosComponent;
  let fixture: ComponentFixture<AtributosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
