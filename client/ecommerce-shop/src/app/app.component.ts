import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-shop';

  sidebarOpen = true;

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  getOutput(sidebarOpen: boolean){
    this.sidebarOpen = sidebarOpen;
  }
}
