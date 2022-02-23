import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/courses.service';
import { CourseModel } from '../course.model';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  courseModel = new CourseModel();
  constructor(private activatedRoute: ActivatedRoute, private courseService: CoursesService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.courseService.getById(id)
      .subscribe(
        response => {
          this.courseModel = response;
        }
      )
  }
}
