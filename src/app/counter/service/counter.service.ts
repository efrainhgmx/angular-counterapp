import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    private numberService: number = 5;
    private _listNumber: number[] = [this.numberService];

    get serviceNumber():number {
        return this.numberService;
    }

    get listNumber(): number[] {
        return this._listNumber;
    }

    set SetnumberService(value: number) {
        this.numberService += value;
        (value === 1) 
            ? this._listNumber.push(this.numberService)
            : this._listNumber.pop();
        
    }
}