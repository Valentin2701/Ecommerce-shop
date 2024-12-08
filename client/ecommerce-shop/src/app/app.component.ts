import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-shop';

  sidebarOpen = true;

  test = setInterval(() => {
    console.log(this.sidebarOpen)
  }, 1000);

  toggleSidebar(){
    this.sidebarOpen = !this.sidebarOpen;
  }

  getOutput(sidebarOpen: boolean){
    this.sidebarOpen = sidebarOpen;
  }
}
