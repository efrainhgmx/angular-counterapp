import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';
import { ListCounterComponent } from "./listcounter/listcounter.component";

@NgModule({
    declarations: [
        CounterComponent,
        ListCounterComponent
    ],
    exports: [
        CounterComponent
    ] 
})
export class CounterModule {}