import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';
import { studentStaus } from '../model/student-model';

@Component({
  selector: 'app-student-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent implements OnInit {


  myform!:FormGroup;

  studentList:studentStaus[]=[];

  editId:number| null = null;

  
  constructor(
    private router:Router,
    private studentsrv: StudentServiceService,
    private route: ActivatedRoute,
    private fb:FormBuilder

  ){}
  
  ngOnInit(): void {
    this.studentList= this.studentsrv.studentList;
    this.myform = this.fb.nonNullable.group({
      fName:[''],
      age:[''],
      course:[''],
      email:['']
    })

    const idParam = this.route.snapshot.paramMap.get("id");
    if(idParam){
      this.editId = +idParam
      const findStudentList = this.studentList.find(
        (obj)=> obj.id === this.editId
      )
      this.myform.patchValue({
        fName:findStudentList?.fName,
        age:findStudentList?.age,
        course:findStudentList?.course,
        email:findStudentList?.email

      })
    }
  }
  onSubmit(){
    if(this.myform.invalid){
      debugger
      this.myform.markAllAsTouched()
    }
    if(this.editId !== null){
      if(this.myform.invalid){
        this.myform.markAllAsTouched()
        debugger
        return
      }
       this.studentsrv.updatestudent(this.editId,this.myform.value)
    }else{
      this.studentsrv.addStudent(this.myform.value)
    }
    debugger
    this.myform.reset() 
    this.backTolist();
  }

  backTolist(){
    this.router.navigateByUrl("student-list")
  }
  resetForm(){
    this.myform.reset()
  }

  

}
