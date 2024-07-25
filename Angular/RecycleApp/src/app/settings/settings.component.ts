import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  user = {
    displayName: '',
    username: '',
    fullName: '',
    email: '',
    secondaryEmail: '',
    phoneNumber: '',
    country: '',
    state: '',
    zipCode: ''
  };

  billingAddress = {
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: ''
  };

  shippingAddress = {
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: ''
  };

  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor() { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Handle file upload
  }

  saveChanges() {
    // Call the service to save changes to user account
  }

  saveBillingAddress() {
    // Call the service to save changes to billing address
  }

  saveShippingAddress() {
    // Call the service to save changes to shipping address
  }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      // Show error message
      return;
    }
    // Call the service to change the password
  }
}
