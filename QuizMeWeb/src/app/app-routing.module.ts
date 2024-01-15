import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import necessary modules for routing

const routes: Routes = []; // Define an empty array of routes

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up the root router configuration with the defined routes
  exports: [RouterModule] // Export the configured RouterModule for use in other modules
})
export class AppRoutingModule { } // Define the AppRoutingModule as a module for routing
