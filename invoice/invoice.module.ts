import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { InvoiceDetailComponent } from './invoice-detail.component';
import { InvoiceListComponent } from './invoice-list.component';
import { InvoiceService } from "./invoice.service";

const routes: Routes = [
    {
        path: ':id',
        component: InvoiceDetailComponent
    },
    {
        path: '',
        component: InvoiceListComponent
    }
]

@NgModule({
    declarations: [
        InvoiceListComponent,
        InvoiceDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        NgxPaginationModule
    ],
    providers: [InvoiceService],
    bootstrap: []
})
export class InvoiceModule {

}