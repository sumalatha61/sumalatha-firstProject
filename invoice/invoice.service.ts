import { InvoiceModel } from "../models/invoice.model";
export class InvoiceService {
    lstInvoices: InvoiceModel[] = [
        { Id: 1, InvoiceNumber: 'Inv_1', Amount: 2000, CreatedBy: 'Sreeram' },
        { Id: 2, InvoiceNumber: 'Inv_2', Amount: 5000, CreatedBy: 'Lasya' },
        { Id: 3, InvoiceNumber: 'Inv_3', Amount: 7000, CreatedBy: 'Divya' },
        { Id: 4, InvoiceNumber: 'Inv_4', Amount: 800, CreatedBy: 'RaviTeja' }
    ];
    getInvoices(): InvoiceModel[] {
        return this.lstInvoices;
    }
    getInvoiceById(id: number): InvoiceModel {
        let invoiceDetail = this.lstInvoices.filter(x => x.Id == id)[0];
        return invoiceDetail;
    }
}