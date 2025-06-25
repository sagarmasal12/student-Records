import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { studentStaus } from '../model/student-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-view-form',
  imports: [],
  templateUrl: './student-view-form.component.html',
  styleUrl: './student-view-form.component.css'
})
export class StudentViewFormComponent implements OnInit{

  studentstatus!: studentStaus;

  constructor(
    private route:ActivatedRoute,
    private studentsrvs:StudentServiceService,
    private router :Router
  ){}



  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam){
      const id = +idParam;
      debugger
      this.studentstatus = this.studentsrvs.studentList.find(
        (obj)=> obj.id === id
      )!
    }
  }

  backTolist(){
    this.router.navigateByUrl("student-list")
  }
}
