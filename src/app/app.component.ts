import { Component } from '@angular/core';
import { AgeGroup, StartList } from './start-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'ng-ironman-slots-calculation';

  nbSlots = 45;
  totalParticipants = 2000;
  totalParticipantsFemale = 500;
  totalParticipantsMale = 1500;
  femaleAgeGroup: AgeGroup[] = [];
  maleAgeGroup: AgeGroup[] = [];

  isStartListFileLoading = true;


  updateTotalCat(sex: 'f' | 'm') {
    if (sex === 'f') {
      this.totalParticipantsMale = this.totalParticipants - this.totalParticipantsFemale;
    } else {
      this.totalParticipantsFemale = this.totalParticipants - this.totalParticipantsMale;
    }
  }

  updateTotalParticipant() {
    this.totalParticipantsMale = this.totalParticipants - this.totalParticipantsFemale;
  }

  onStartListLoaded($event: StartList) {

    this.totalParticipantsMale = $event.totalMale;
    this.totalParticipantsFemale = $event.totalFemale;
    this.totalParticipants = $event.totalParticipants;
    this.femaleAgeGroup = $event.femaleAgeGroup;
    this.maleAgeGroup = $event.maleAgeGroup;
  }

  onStartListLoading($event: boolean) {
    this.isStartListFileLoading = $event;

  }
}
