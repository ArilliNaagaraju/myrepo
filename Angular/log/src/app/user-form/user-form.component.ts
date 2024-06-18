import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  user: any = { name: '', email: '', password: '' };
  id: number | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ? parseInt(params.get('id')!, 10) : null;
      if (this.id) {
        this.userService.getUsers().subscribe(users => {
          this.user = users.find(user => user.id === this.id);
          delete this.user.password;  // Remove password for editing
        });
      }
    });
  }

  saveUser(): void {
    if (this.id) {
      this.userService.updateUser(this.id, this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }

  }
