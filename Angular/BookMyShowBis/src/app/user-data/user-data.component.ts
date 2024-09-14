import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeatsService } from '../seats.service';
import { NgFor } from '@angular/common';
import { SiginAndSigUpService } from '../sigin-and-sig-up.service';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  seatingForm!: FormGroup;
  movieName: string = '';
  numberOfHalls: number = 0;
  currentHallIndex: number = 0; // To track which hall's data is being entered

  constructor(
    private fb: FormBuilder, 
    private seatsService: SeatsService, 
    private siginAndSigUpService: SiginAndSigUpService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadMovieData();
  }

  initializeForm(): void {
    this.seatingForm = this.fb.group({
      theaterId: ['', Validators.required],
      totalSeats: ['', Validators.required],
      leftTotalSeats: [''],
      leftColumns: [''],
      leftRows: this.fb.array([]),
      middleTotalSeats: [''],
      middleColumns: [''],
      middleRows: this.fb.array([]),
      rightTotalSeats: [''],
      rightColumns: [''],
      rightRows: this.fb.array([]),
    });
  }


  loadMovieData(): void {
    this.siginAndSigUpService.getUsers().subscribe(data => {
      this.movieName=data.movieName
      this.numberOfHalls=data.moviehall
      console.log("this my movie name: "+this.movieName);
      console.log("this my movie name: "+this.numberOfHalls);
  })
    //   if (data && data.length > 0) {
    //     this.movieName = data[0].movieName; 
    //     this.numberOfHalls = data[0].moviehall;  
    //   }
    // }, error => {
    //   console.log('Error fetching movie data', error);
    // });
  }
  

  get leftRows(): FormArray {
    return this.seatingForm.get('leftRows') as FormArray;
  }

  get middleRows(): FormArray {
    return this.seatingForm.get('middleRows') as FormArray;
  }

  get rightRows(): FormArray {
    return this.seatingForm.get('rightRows') as FormArray;
  }

  onLeftColumnsChange(event: any): void {
    const totalColumns = event.target.value;
    this.updateRows('left', totalColumns);
  }

  onMiddleColumnsChange(event: any): void {
    const totalColumns = event.target.value;
    this.updateRows('middle', totalColumns);
  }

  onRightColumnsChange(event: any): void {
    const totalColumns = event.target.value;
    this.updateRows('right', totalColumns);
  }

  updateRows(side: string, totalColumns: number): void {
    const formArray = this.getFormArray(side);
    formArray.clear();

    for (let i = 0; i < totalColumns; i++) {
      this.addRow(side);
    }
  }

  getFormArray(side: string): FormArray {
    switch (side) {
      case 'left':
        return this.leftRows;
      case 'middle':
        return this.middleRows;
      case 'right':
        return this.rightRows;
      default:
        throw new Error('Invalid side');
    }
  }

  addRow(side: string): void {
    const row = this.fb.group({
      seats: [''],
      rows: ['']
    });
    this.getFormArray(side).push(row);
  }

  addLeftRow(): void {
    this.addRow('left');
  }

  addMiddleRow(): void {
    this.addRow('middle');
  }

  addRightRow(): void {
    this.addRow('right');
  }

  skip(): void {
    if (this.currentHallIndex < this.numberOfHalls - 1) {
      this.currentHallIndex++;
      this.initializeForm(); // Reset form for the next hall
      // Optionally, you can set specific data here if needed
    } else {
      console.log('All halls data entered.');
    }
  }

  onSubmit(): void {
    if (this.currentHallIndex < this.numberOfHalls - 1) {
      console.log('Please enter data for all halls.');
      return;
    }

    const formData = this.seatingForm.value;
    this.seatsService.saveSeatingData(formData).subscribe(response => {
      console.log('Seating data saved', response);
    }, error => {
      console.log('Error saving seating data', error);
    });
  }
}
