import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { CourseModel } from "./courses/course.model";

@Injectable({ providedIn: 'root' })

export class CoursesService {
    constructor(private afDatabase: AngularFireDatabase) {
    }
    getAll() {
        return this.afDatabase.list('course').snapshotChanges();
    }
    getById(courseId: string) {
        return this.afDatabase.object<CourseModel>('course/' + courseId).valueChanges();
    }
    create(courseModel: CourseModel) {
        return this.afDatabase.list("course").push(courseModel);

    }
    update(courseId: string, courseModel: CourseModel) {
        return this.afDatabase.object("course/" + courseId).update(courseModel);
    }
    delete(courseId: string) {
        return this.afDatabase.object("course/" + courseId).remove();
    }
}