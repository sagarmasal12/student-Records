import { Injectable } from '@angular/core';
import { studentStaus } from '../model/student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  studentList:studentStaus[]=[
    {id:1, fName:"Rajesh",age: 'kadam' ,course: 'Angular developer',email:'rajesh@gmail.com'},
    {id:2, fName:"Mahesh",age: 'Mote' ,course: 'React',email:'mahesh2@gmail.com'},
    {id:3, fName:"Sharad",age: 'Kharat' ,course: 'Data Analytics',email:'sharad99@gmail.com'},
    {id:4, fName:"Pintu",age: 'Kumhar' ,course: 'Python developer',email:''},
    {id:5, fName:"Sid",age: 'Jadhav' ,course: 'Java developer',email:''},
    {id:6, fName:"Rahul",age: 'Thik' ,course: 'React developer',email:''},
    // {id:7, fName:"Mayur",age: 'Masal' ,course: 'Java developer',email:''},
    // {id:8, fName:"Karan",age: 'Dadas' ,course: 'Python developer',email:''},
    // {id:9, fName:"Anosh",age: 'Zimal' ,course: 'Angular developer',email:''},
    // {id:10, fName:"Pankaj",age: 'Masal' ,course: 'React developer',email:''},
    // {id:11, fName:"Chinmay",age: 'salvi' ,course: 'Data Analytics',email:''},
    // {id:12, fName:"Vijay",age: 'Mane' ,course: 'Java developer',email:''},
    // {id:13, fName:"Shubham",age: 'Mane' ,course: 'React developer',email:''},
    // {id:14, fName:"Satyam",age: 'Mane' ,course: 'Python developer',email:''}
  ]

  updatestudent(id:number,obj:studentStaus){
    this.studentList = this.studentList.map((studentupdateid)=>{
      if(studentupdateid.id ===id){
        obj['id']=id;
        return obj
      } 
      return studentupdateid
    })
  }
  addStudent(obj:studentStaus){
    obj['id']=this.studentList.length+1;
    this.studentList.push(obj)
  }
  deletedRecordser(id:number){
    this.studentList = this.studentList.filter(x => x.id !== id)
    console.log(this.studentList)
  }
}
