import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.scss']
})
export class AgeGroupComponent implements OnChanges {
  @Input() sex: 'f' | 'm' = 'm';
  @Input() totalParticipantsCat = 0;
  @Input() totalSlotsCat = 0;

  ageGroups: {
    from: number,
    to: number,
    nbParticipants: number
  }[] = [];

  defaultPercentByAgeGroup = [5, 10, 15, 15, 15, 15, 10, 8, 4, 2, 1];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalParticipantsCat']) {
      this.ageGroups = [
        {
          from: 18,
          to: 24,
          nbParticipants: this.totalParticipantsCat * (this.defaultPercentByAgeGroup[0] / 100)
        }
      ];

      let cptPercent = 1;
      let i = 25;
      while (i <= 74) {
        const to = i + 4;
        this.ageGroups.push({
          from: i,
          to,
          nbParticipants: this.totalParticipantsCat * (this.defaultPercentByAgeGroup[cptPercent] / 100)
        });

        i = to + 1;
        cptPercent++;
      }
    }

  }

}
