import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "src/environments/environment";
import { DepartmentService } from "./department.service";

const routes: Routes = [
    {
        path: ':id',
        component: DetailComponent
    },
    {
        path: '',
        component: ListComponent
    }
]

@NgModule({
    declarations: [
        DetailComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [DepartmentService],
    bootstrap: []
})
export class DepartmentModule {

}