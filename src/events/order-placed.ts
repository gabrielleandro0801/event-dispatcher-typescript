import { EventInterface } from "./interfaces/event.interface";

export class OrderPlacedEvent implements EventInterface {
    dateTimeOccured: Date;
    eventData: any;

    constructor(eventData: any) {
        this.dateTimeOccured = new Date();
        this.eventData = eventData;
    }

}
