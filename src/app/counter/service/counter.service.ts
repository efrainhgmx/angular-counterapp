import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    private numberService: number = 5;

    get serviceNumber():number {
        return this.numberService;
    }
}