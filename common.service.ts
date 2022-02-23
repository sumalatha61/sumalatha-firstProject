import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    constructor(@Inject(String) private APIBaseUrl: string, public httpClient: HttpClient) {
    }
    getAll() {
        return this.httpClient.get(this.APIBaseUrl);
    }
    getById(id: number) {
        let url: string = this.APIBaseUrl + '/' + id;
        return this.httpClient.get(url);
    }
    delete(id: number) {
        let url: string = this.APIBaseUrl + '/' + id;
        return this.httpClient.delete(url);
    }
    update(id: number, resource: any) {
        let url: string = this.APIBaseUrl + '/' + id;
        return this.httpClient.put(url, resource);
    }
    create(resource: any) {
        return this.httpClient.post(this.APIBaseUrl, resource);
    }
}