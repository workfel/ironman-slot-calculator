import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgeGroupComponent } from './table-age-group.component';

describe('TableAgeGroupComponent', () => {
  let component: TableAgeGroupComponent;
  let fixture: ComponentFixture<TableAgeGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAgeGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
