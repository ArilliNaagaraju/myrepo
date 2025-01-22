import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SiginAndSigUpService } from './sigin-and-sig-up.service';
import { ChildComponent } from "./child/child.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookMyShowBis';
  movie:any;
  name='Child is Nagaraju';
  constructor(private siginAndSigUpService: SiginAndSigUpService){

  }
  AData(): void {
    this.siginAndSigUpService.getUsers().subscribe(data => {
    this.movie=data.movieName
    console.log("movename");
  })

}
}
