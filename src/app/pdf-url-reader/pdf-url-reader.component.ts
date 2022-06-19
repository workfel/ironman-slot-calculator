import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AgeGroup, StartList } from '../start-list';


declare const pdfjsLib: any;

@Component({
  selector: 'app-pdf-url-reader',
  templateUrl: './pdf-url-reader.component.html',
  styleUrls: ['./pdf-url-reader.component.scss']
})
export class PdfUrlReaderComponent {
  @Output() startListLoaded: EventEmitter<StartList> = new EventEmitter<StartList>();
  @Output() startListLoading: EventEmitter<boolean> = new EventEmitter<boolean>();


  isLoading = false;

  private ageGroups: { from: number, to: number }[] = [];

  constructor() {

    this.ageGroups = [{
      from: 18,
      to: 24
    }];

    const computeAgeGroup = () => {
      let i = 25;
      while (i <= 74) {
        const to = i + 4;
        this.ageGroups.push({
          from: i,
          to,
        });

        i = to + 1;
      }
    };

    computeAgeGroup();
  }

  previewFile() {
    this.isLoading = true;
    this.startListLoading.emit(this.isLoading);

    // @ts-ignore
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      var loadingTask = pdfjsLib.getDocument({ data: reader.result });
      loadingTask.promise.then(async (pdf: any) => {

        let fullContent = '';
        for (let i = 1; i <= pdf._pdfInfo.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          fullContent += content.items.map((item: any) => item.str).flat();
        }


        const sexe = ['F', 'M'];

        let total = 0;
        let totalMale = 0;
        let totalFemale = 0;
        let femaleAgeGroup: AgeGroup[] = [];
        let maleAgeGroup: AgeGroup[] = [];
        sexe.forEach(sex => {
          this.ageGroups.forEach(ageGroup => {
            const label = `${sex}${ageGroup.from}-${ageGroup.to}`;
            const count = fullContent.split(label).length;
            total += count;

            if (sex === 'M') {
              totalMale += count;
              maleAgeGroup.push({
                count: count,
                label
              });
            } else {
              totalFemale += count;
              femaleAgeGroup.push({
                count: count,
                label
              });
            }
          });
        });


        this.startListLoaded.emit({
          totalFemale,
          totalMale,
          totalParticipants: total,
          maleAgeGroup: maleAgeGroup,
          femaleAgeGroup: femaleAgeGroup
        });
        this.isLoading = false;
        this.startListLoading.emit(this.isLoading);
      });
    }, false);

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  }
}
