import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestService } from './test.service';
import { SummaryPipe } from './summary.pipe';
import { RegistrationComponent } from './registration/registration.component';
import { ParentComponent } from './parent/parent.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { PostService } from './post/post.service';
import { CommonService } from './common.service';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InvoiceModule } from './invoice/invoice.module';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { AuthGuard } from './auth-guard.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AppInterceptor } from './app.interceptor';
import { DepartmentModule } from './department/department.module';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from 'src/environments/environment';
import { CoursesComponent } from './courses/courses.component';
import { CommonModule } from '@angular/common';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'course/:id', component: CourseDetailComponent, canActivate: [AuthGuard] },
  { path: 'course', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'input-output', component: ParentComponent, canActivate: [AuthGuard] },
  { path: 'contact-form', component: ContactFormComponent, canActivate: [AuthGuard] },
  { path: 'post/:postId', component: PostDetailComponent, canActivate: [AuthGuard] },
  { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'invoice', loadChildren: () => InvoiceModule, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'department', loadChildren: () => DepartmentModule, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'un-authorized', component: UnAuthorizedComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SummaryPipe,
    RegistrationComponent,
    ParentComponent,
    ChildInputComponent,
    ChildOutputComponent,
    InputFormatDirective,
    ContactFormComponent,
    PostComponent,
    PostDetailComponent,
    NotFoundComponent,
    UnAuthorizedComponent,
    CoursesComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    CoursesService,
    TestService,
    PostService,
    CommonService,
    AuthGuard,
    AdminAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
