import { Component } from "@angular/core";
import { CounterService } from "../service/counter.service";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'], 
    
})
export class CounterComponent {
    get numberToIncrease() {
        return this.counterService.serviceNumber;
    }

    constructor(private counterService: CounterService){}
    increaseOrDecrease(value: number):void {
        this.counterService.SetnumberService =  value ;
    }
}