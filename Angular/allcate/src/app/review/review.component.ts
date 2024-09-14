import { Component, Input } from '@angular/core';
import { ReviewsService } from '../reviews.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [NgIf,NgFor,NgClass,FormsModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})


export class ReviewComponent {
  @Input() 
  bankId: string = '';
  reviews: any[] = [];
 
  showModal: boolean = false;
  review = { name: '', review: '', rating: 0, email: '', phoneNumber: '', website: '', address: '', profilePhoto: '', bankId: '' };

  constructor(private reviewService: ReviewsService) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(): void {
    this.reviewService.getReviews(this.bankId).subscribe((data: any[]) => {
      this.reviews = data;
    });
  }

  onSubmit(): void {
    this.review.bankId = this.bankId;
    this.reviewService.addReview(this.review).subscribe(response => {
      this.review = { name: '', review: '', rating: 0, email: '', phoneNumber: '', website: '', address: '', profilePhoto: '', bankId: '' };
      this.showModal = true;
      this.loadReviews();
    });
  }

  closeModal(): void {
    this.showModal = false;
  }
}
