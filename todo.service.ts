import { HttpClient } from "@angular/common/http";
import { CommonService } from "./common.service";

export class TodoService extends CommonService {
    constructor(public override httpClient: HttpClient) {
        super('https://jsonplaceholder.typicode.com/todos', httpClient)
    }
}