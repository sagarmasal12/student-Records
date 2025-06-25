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

  filteredUser:any[]=[]

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
  editstudent(id:number){
    this.router.navigateByUrl(`student-edit/${id}`)
  }

  deleteRecord(id:number){
    const confirmed = confirm('are you sure want to delete this user?')
    if(confirmed){
      this.studentServ.deletedRecordser(id);
      this.filteredUser = this.studentServ.studentList
      console.log("record deleted")
    }
  }


  

  get studentStatuses(){
    return this.studentServ
  }

}
