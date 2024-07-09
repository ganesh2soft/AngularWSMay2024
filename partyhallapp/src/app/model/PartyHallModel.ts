export class PartyHall  {
    hallId: number;
    hallName: string;
    hallDesc: string;
    hallCapacity: number;
    hallAc: string;
    diningCapacity: string;
    diningType: string;
    hallChargePerDay: number;
    hallImage: string;
  
    constructor(
      hallId: number,
      hallName: string,
      hallDesc: string,
      hallCapacity: number,
      hallAc: string,
      diningCapacity: string,
      diningType: string,
      hallChargePerDay: number,
      hallImage: string
    ) {
      this.hallId = hallId;
      this.hallName = hallName;
      this.hallDesc = hallDesc;
      this.hallCapacity = hallCapacity;
      this.hallAc = hallAc;
      this.diningCapacity = diningCapacity;
      this.diningType = diningType;
      this.hallChargePerDay = hallChargePerDay;
      this.hallImage = hallImage;
    }
  }
  