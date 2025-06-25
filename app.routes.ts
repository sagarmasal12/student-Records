import { Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentAddComponent } from './pages/student-add/student-add.component';
import { StudentViewFormComponent } from './pages/student-view-form/student-view-form.component';

export const routes: Routes = [
    {
        path:'',
        component:StudentListComponent
    },
    {
        path:'student-list',
        component:StudentListComponent
    },
    {
        path:'student-add',
        component:StudentAddComponent
    },
    {
        path:'student-viewForm/:id',
        component:StudentViewFormComponent
    }
];
