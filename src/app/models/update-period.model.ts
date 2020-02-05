import { CurrencyTypes } from './currency-types.enum';

export class UpdatePeriod {
    public name: string;
    public startDate: Date;
    public endDate: Date;
    public amount: number;
    public currency: CurrencyTypes;

    constructor(name: string, startDate: Date, endDate: Date, amount: number, currency: CurrencyTypes) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.currency = currency;
    }
}
