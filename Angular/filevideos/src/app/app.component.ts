import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoandfileComponent } from "./videoandfile/videoandfile.component";
import { FileComponent } from "./file/file.component";
import { GetmassageComponent } from "./getmassage/getmassage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, VideoandfileComponent, FileComponent, GetmassageComponent]
})
export class AppComponent {
  title = 'filevideos';

}
