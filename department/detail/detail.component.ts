import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  deptModel = new DepartmentModel();
  constructor(private deptService: DepartmentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.deptService.getById(id).subscribe(response => {
      this.deptModel = response;
    });
  }
}
