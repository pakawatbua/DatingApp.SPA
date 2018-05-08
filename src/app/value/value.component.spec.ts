import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ValueComponent } from './value.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ValueComponent', () => {

  let fixture: ComponentFixture<ValueComponent>;
  let component: ValueComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ValueComponent]
    });

    fixture = TestBed.createComponent(ValueComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });

});
