import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-count-slot-sexe',
  templateUrl: './count-slot-sexe.component.html',
  styleUrls: ['./count-slot-sexe.component.scss']
})
export class CountSlotSexeComponent implements OnChanges {
  @Input() totalParticipants: number = 0;
  @Input() totalSlot: number = 0;
  @Input() percentage: number = 0;

  countSlot = 0;

  ngOnChanges(changes: SimpleChanges): void {
    this.recomputeNbSlots();
  }

  private recomputeNbSlots() {
    this.countSlot = this.totalSlot * (this.percentage / 100);
  }


}
