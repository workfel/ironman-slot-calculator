export interface AgeGroup {
  label: string;
  count: number;
}

export interface StartList {
  totalParticipants: number;
  totalFemale: number;
  totalMale: number;
  femaleAgeGroup: AgeGroup[];
  maleAgeGroup: AgeGroup[];
}
