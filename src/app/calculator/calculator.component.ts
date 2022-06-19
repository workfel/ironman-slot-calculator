import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AgeGroup } from '../start-list';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnChanges {
  @Input() nbSlots = 45;
  @Input() totalParticipants = 2000;
  @Input() totalParticipantsFemale = 500;
  @Input() totalParticipantsMale = 1500;
  @Input() femaleAgeGroup: AgeGroup[] = [];
  @Input() maleAgeGroup: AgeGroup[] = [];
  percentFemale = 20;
  percentMale = 80;

  slotsFemale = 0;
  slotsMale = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['totalParticipantsMale']) {
      //
      this.totalParticipantsFemale = this.totalParticipants - this.totalParticipantsMale;
    }
    if (changes['totalParticipantsFemale']) {
      //
      this.totalParticipantsMale = this.totalParticipants - this.totalParticipantsFemale;
    }

    this.percentFemale = parseFloat(((this.totalParticipantsFemale / this.totalParticipants) * 100).toFixed(2));
    this.percentMale = parseFloat(((this.totalParticipantsMale / this.totalParticipants) * 100).toFixed(2));
    this.recomputeNbSlots();
  }

  private recomputeNbSlots() {
    this.slotsFemale = parseInt((this.nbSlots * (this.percentFemale / 100)).toFixed(2));
    this.slotsMale = parseInt((this.nbSlots * (this.percentMale / 100)).toFixed(2));
  }


  updateNbSlot() {
    this.recomputeNbSlots();
  }
}
