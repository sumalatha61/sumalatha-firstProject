import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lstDepartment: DepartmentModel[] = [];
  departmentModel = new DepartmentModel();
  title: string = 'Add Department';
  constructor(private deptService: DepartmentService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.deptService.getAll()
      .subscribe((response: any) => {
        this.lstDepartment = response.map((data: any) => {
          return {
            id: data.payload.doc.id,
            ...data.payload.doc.data() as DepartmentModel
          }
        });
      })
  }
  addDepartment() {
    this.title = 'Add Department';
    this.departmentModel = new DepartmentModel();
  }
  editDepartment(departmentModel: DepartmentModel) {
    this.title = 'Edit Department';
    this.departmentModel = departmentModel;
  }
  deleteDepartment(id: string) {
    if (confirm('Are you sure you want to delete?')) {
      this.deptService.delete(id)
        .then((response: any) => {
          this.toastrService.success('Deleted successfully..!');
        })
        .catch((error: Response) => {
          this.toastrService.error(error.statusText);
        })
      this.loadData();
    }
  }
  saveDepartment() {
    if (this.departmentModel.id) {
      this.deptService.update(this.departmentModel.id, this.departmentModel)
        .then((response: any) => {
          this.toastrService.success('Updated successfully..!');
        })
        .catch((error: Response) => {
          this.toastrService.error(error.statusText);
        })
    }
    else {
      this.deptService.create(this.departmentModel)
        .then((response: any) => {
          this.toastrService.success('Created successfully..!');
        })
        .catch((error: Response) => {
          this.toastrService.error(error.statusText);
        })
    }
    this.departmentModel = new DepartmentModel();
    this.loadData();
  }
}
