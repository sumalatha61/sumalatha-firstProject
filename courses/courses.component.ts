import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CoursesService } from '../courses.service';
import { CourseModel } from './course.model';

@Component({
    selector: 'app-course',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    lstCourse: CourseModel[] = [];
    title: string = 'Add Course';
    courseModel = new CourseModel();

    constructor(private courseService: CoursesService, private toastrService: ToastrService) { }

    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.courseService.getAll()
            .subscribe(response => {
                //console.log(response);
                this.lstCourse = response.map((data: any) => {
                    return {
                        id: data.payload.key,
                        ...data.payload.val() as CourseModel
                    }
                });
                //console.log(this.lstCourse);
            })
    }
    addCourse() {
        this.title = 'Add Course';
        this.courseModel = new CourseModel();
    }
    editCourse(courseModel: CourseModel) {
        this.title = 'Edit Course';
        this.courseModel = courseModel;
    }
    deleteCourse(id: string) {
        if (confirm('Are you sure you want to delete?')) {
            this.courseService.delete(id)
                .then(response => {
                    console.log(response);
                    this.toastrService.success('Deleted successfully..!');
                })
                .catch((error: Response) => {
                    console.log(error);
                    this.toastrService.error(error.statusText);
                })
            this.loadData();
        }
    }
    saveCourse() {
        if (this.courseModel.id) {
            this.courseService.update(this.courseModel.id, this.courseModel)
                .then(response => {
                    console.log(response);
                    this.toastrService.success('Updated successfully..!');
                })
                .catch((error: Response) => {
                    console.log(error);
                    this.toastrService.error(error.statusText);
                })
        }
        else {
            this.courseService.create(this.courseModel)
                .then(response => {
                    console.log(response);
                    this.toastrService.success('Created successfully..!');
                })
                .catch((error: Response) => {
                    console.log(error);
                    this.toastrService.error(error.statusText);
                })
        }
        this.courseModel = new CourseModel();
        this.loadData();
    }
}
