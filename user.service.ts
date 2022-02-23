import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
})

export class UserService extends CommonService {
    constructor(public override httpClient: HttpClient) {
        super('https://jsonplaceholder.typicode.com/users', httpClient)
    }
}