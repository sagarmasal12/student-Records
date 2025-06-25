import { Component, inject, Inject, OnInit } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent  implements OnInit{

  studentList:any[]=[];

  router = inject(Router)

  ngOnInit(): void {
    console.log('ngonint called');
    
    
  }
  constructor(private studentServ:StudentServiceService){
    console.log('constructor called')
  }

  viewStudents(id:number){
    this.router.navigateByUrl(`/student-viewForm/${id}`)
  }

  

  get studentStatuses(){
    return this.studentServ
  }

}
