import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students: any[] = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A' },
    { id: 2, name: 'Jane Smith', age: 22, grade: 'B' },
    { id: 3, name: 'Alice Johnson', age: 21, grade: 'A-' },
    { id: 4, name: 'Bob Brown', age: 19, grade: 'B+' }
  ];

}
