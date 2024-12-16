import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecommerce-shop';

  sidebarOpen = true;

  constructor(private userService: UserService){}

  ngOnInit(): void {
      this.userService.initializeUser();
  }

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  getOutput(sidebarOpen: boolean){
    this.sidebarOpen = sidebarOpen;
  }
}
