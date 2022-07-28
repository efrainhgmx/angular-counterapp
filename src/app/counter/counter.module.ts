import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter/counter.component';
import { ListCounterComponent } from "./listcounter/listcounter.component";
import { CounterService } from "./service/counter.service";

@NgModule({
    declarations: [
        CounterComponent,
        ListCounterComponent
    ],
    exports: [
        CounterComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        CounterService
    ]
})
export class CounterModule {}