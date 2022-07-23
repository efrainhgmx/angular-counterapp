import { Component } from "@angular/core";

@Component({
    selector: 'app-listcounter',
    templateUrl: './listcounter.component.html',
    styleUrls: ['./listcounter.component.css']
})
export class ListCounterComponent {
    listNumber: number[] = [];

    createList() {
        this.listNumber.push(this.listNumber.length + 1);
    }

    removeLastItem() {
        if(this.listNumber[0]) this.listNumber.pop();
    }
}