import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    standalone: false
})
export class SidebarComponent {
  // Initially, the sidebar is open on large screens
  isSidebarOpen = true;

  // Method to toggle the sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    const wrapper = document.getElementById('wrapper');
    if (wrapper) {
      wrapper.classList.toggle('toggled', this.isSidebarOpen);
    }
  }
}
