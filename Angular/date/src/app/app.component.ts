import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
FormsModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf,NgFor,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'date';
  // form: FormGroup;
  // startTime: { hours: string, minutes: string } | null = null;
  // endTime: { hours: string, minutes: string } | null = null;

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     start_date: [''],
  //     end_date: ['']
  //   });
  // }

  // onDateChange() {
  //   const startDateValue = this.form.get('start_date')?.value;
  //   const endDateValue = this.form.get('end_date')?.value;

  //   this.startTime = this.extractTime(startDateValue);
  //   this.endTime = this.extractTime(endDateValue);
  // }

  // extractTime(dateTime: string | null): { hours: string, minutes: string } | null {
  //   if (dateTime) {
  //     const date = new Date(dateTime);
  //     return {
  //       hours: this.padZero(date.getHours()),
  //       minutes: this.padZero(date.getMinutes())
  //     };
  //   }
  //   return null;
  // }

  // padZero(num: number): string {
  //   return num < 10 ? `0${num}` : `${num}`;
  // }

  
  // hours:any;
  // minutes:any;
  // selectedDateTime:any;

  // onDateTimeChange() {
  //   if (this.selectedDateTime) {
  //     const date = new Date(this.selectedDateTime);
  //     this.hours = date.getHours();
  //     this.minutes = date.getMinutes();
  //   }
  // }

  showLabels: boolean = false;

  onTimeChange(event: Event): void {
    // Handle time change if needed
    console.log((event.target as HTMLInputElement).value);
  }



  // time = {
  //   hours: '',
  //   minutes: ''
  // };

  // submittedTime: { hours: string; minutes: string } | null = null;

  // onSubmit() {
  //   if (this.time.hours !== '' && this.time.minutes !== '') {
  //     // Save the submitted time
  //     this.submittedTime = { ...this.time };
  //   }
  // }
}
