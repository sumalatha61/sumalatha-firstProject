import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'summary' })

export class SummaryPipe implements PipeTransform {
    transform(value: string, length?: number) {
        if (!value) {
            return null;
        }
        else {
            return value.substring(0, length ? length : 20) + '...';
        }
    }
}