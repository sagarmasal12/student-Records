import { Component } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent  {

  studentList:any[]=[];
  constructor(private studentServ:StudentServiceService){}

  get studentStatuses(){
    return this.studentServ
  }

}
