import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css'
})
export class FileComponent {
  selectedFile: any;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:3000/api/upload', formData)
      .subscribe(response => {
        console.log('File uploaded successfully', response);
      });
  }
}
