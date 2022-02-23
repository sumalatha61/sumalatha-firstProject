import { Component } from "@angular/core";
import { CoursesService } from "../courses.service";
import { TestService } from "../test.service";

@Component({
    selector: 'home',
    //template: '<h1>Hello from Home component</h1>',
    templateUrl: './home.component.html',
    //styles: ['.btnStyle{ color : red}', '.txtStyle{height : 25px;width:300px}'],
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    imgUrl: string = '../assets/Profile.png';

}