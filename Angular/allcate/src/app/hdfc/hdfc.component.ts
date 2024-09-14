import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { ActivatedRoute } from '@angular/router';
import { ReviewComponent } from "../review/review.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-hdfc',
  standalone: true,
  imports: [ReviewComponent,NgFor,NgIf],
  templateUrl: './hdfc.component.html',
  styleUrl: './hdfc.component.css'
})
export class HDFCComponent {
  bankDetails: any;
  bankId: string | null = null;

  constructor(private bankService: BankService) {}
  ngOnInit() {
    // Assume bankId is being set somehow, e.g., from a route parameter
    if (this.bankId) {
      this.bankService.getBankDetails(this.bankId).subscribe(data => {
        // Your code here
      });
    } else {
      // Handle the null case appropriately
    }
  }
}
