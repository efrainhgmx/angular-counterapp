import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css'], 
    
})
export class CounterComponent {
    numberToIncrease: number = 0;

    increaseOrDecrease(value: number):void {
        this.numberToIncrease += value;
    }
}