import { Component, Input } from '@angular/core';
import { AgeGroup } from '../start-list';

@Component({
  selector: 'app-table-age-group',
  templateUrl: './table-age-group.component.html',
  styleUrls: ['./table-age-group.component.scss']
})
export class TableAgeGroupComponent {
  @Input() totalParticipantsCat = 0;
  @Input() totalSlotsCat = 0;
  @Input() ageGroups: AgeGroup[] = [];
}
