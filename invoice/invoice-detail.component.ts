import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InvoiceModel } from "../models/invoice.model";
import { InvoiceService } from "./invoice.service";

@Component({
    selector: 'invoice-detail',
    templateUrl: './invoice-detail.component.html',
    styleUrls: ['./invoice-detail.component.css']
})

export class InvoiceDetailComponent {
    invoiceDetail: InvoiceModel;
    constructor(private route: ActivatedRoute, private invoiceService: InvoiceService) {
        route.paramMap.subscribe((param) => {
            let id = param.get('id');
            this.invoiceDetail = invoiceService.getInvoiceById(parseInt(id));
        });
    }
}