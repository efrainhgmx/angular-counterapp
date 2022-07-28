import { Component } from "@angular/core";
import { CounterService } from "../service/counter.service";

@Component({
    selector: 'app-listcounter',
    templateUrl: './listcounter.component.html',
    styleUrls: ['./listcounter.component.css']
})
export class ListCounterComponent {

    get listNumber(): number[] {
        return this.counterService.listNumber;
    }

   

    constructor(private counterService: CounterService){}
     createList() {
        this.listNumber.push(this.counterService.serviceNumber);
        //this.counterService.createList();
        //this.listNumber = this.listNumber;
        //this.listNumber.push(this.listNumber.length + 1);
    }

    removeLastItem() {
        if(this.listNumber[0]) this.listNumber.pop();
    } 
}