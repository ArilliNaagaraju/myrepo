import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  showAdditionalImages() {
    const additionalImages = document.querySelector('.additional-images') as HTMLElement;
    additionalImages.innerHTML = `
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nuQGQMTpwoKccABcBvFWhBKbHBA_2vWmdQ&usqp=CAU" height="150px" width="150px">
      <img src="https://www.jkcement.com/wp-content/uploads/2023/09/group-construction-worker-installation-steel-re-bar-big-foundation-1024x683-jpg.webp" height="150px" width="150px">
      <img src="https://5.imimg.com/data5/EO/JV/SF/SELLER-17046373/reinforced-cement-concrete-500x500.jpg" height="150px" width="150px">
      <!-- Add more images here -->
    `;
    additionalImages.style.display = 'block';
  }
}
