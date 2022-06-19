import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountSlotSexeComponent } from './count-slot-sexe/count-slot-sexe.component';
import { FormsModule } from '@angular/forms';
import { AgeGroupComponent } from './age-group/age-group.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PdfUrlReaderComponent } from './pdf-url-reader/pdf-url-reader.component';
import { TableAgeGroupComponent } from './table-age-group/table-age-group.component';

@NgModule({
  declarations: [
    AppComponent,
    CountSlotSexeComponent,
    AgeGroupComponent,
    CalculatorComponent,
    PdfUrlReaderComponent,
    TableAgeGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
