import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfUrlReaderComponent } from './pdf-url-reader.component';

describe('PdfUrlReaderComponent', () => {
  let component: PdfUrlReaderComponent;
  let fixture: ComponentFixture<PdfUrlReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfUrlReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfUrlReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
