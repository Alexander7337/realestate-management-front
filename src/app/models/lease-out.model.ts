import { RealEstateTypes } from "./real-estate-types.enum"

export class LeaseOut {
    public name: string;
    public type: RealEstateTypes;

    constructor(name: string, type: RealEstateTypes) {
        this.name = name,
        this.type = type
    }
}
