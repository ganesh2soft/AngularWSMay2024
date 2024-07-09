export class Avail {
    availId: number;
    availabilityDateTime: Date;
    availableStatus: string;
    hallId: number;

    constructor(
        availId: number,
        availabilityDateTime: Date,
        availableStatus: string,
        hallId: number,
    ) {
        this.availId = availId;
        this.availabilityDateTime = availabilityDateTime;
        this.availableStatus = availableStatus;
        this.hallId = hallId;

    }
}
