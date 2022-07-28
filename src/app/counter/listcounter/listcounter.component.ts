import { Component } from "@angular/core";
import { CounterService } from "../service/counter.service";

@Component({
    selector: 'app-listcounter',
    templateUrl: './listcounter.component.html',
    styleUrls: ['./listcounter.component.css']
})
export class ListCounterComponent {
    listNumber: number[] = [];

    constructor(private counterService: CounterService){}
    createList() {
        console.log(this.counterService.serviceNumber);
        this.listNumber.push(this.listNumber.length + 1);
    }

    removeLastItem() {
        if(this.listNumber[0]) this.listNumber.pop();
    }
}