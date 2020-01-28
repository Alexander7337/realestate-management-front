import { RealEstateTypes } from '../lease-out/real-estate-types.enum';

export class RealEstate {

    public address: string;
    public city: string;
    public name: string;
    public type: RealEstateTypes;
    public startDateLeasing: Date;
    public endDateLeasing: Date;  

    constructor() {}
}
