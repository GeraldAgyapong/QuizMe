// Import Component decorator from Angular core
import { Component } from '@angular/core';

// Import AuthService from services
import { AuthService } from './services/auth.service';

// Component decorator indicating metadata for the component
@Component({
  selector: 'app-root', // HTML selector for the component
  templateUrl: './app.component.html', // Template file for the component
  styleUrl: './app.component.css', // Stylesheet file for the component
})

// Class representing the root component of the Angular application
export class AppComponent {
  title = 'quiz-me'; // Property to store the title of the application

  // Constructor to inject AuthService dependency
  constructor(private authService: AuthService) {}

  // Lifecycle hook - ngOnInit is called after the component is initialized
  ngOnInit(): void {
    this.authService.init(); // Initialize AuthService when the component initializes
  }
}
