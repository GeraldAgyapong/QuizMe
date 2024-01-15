import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth for authentication

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {} // Inject AngularFireAuth in the constructor

  // Initialize method to check if a player is logged in and create a player if not
  init(): void {
    if (!this.isPlayerLoggedIn()) {
      this.createPlayer(); // Create a player if not logged in
    } else {
      this.setPlayerId(this.getPlayerIdFromLocalStorage()); // Set player ID if logged in
    }
  }

  // Retrieve player ID from local storage
  getPlayerIdFromLocalStorage(): string {
    return localStorage.getItem('player_id')!;
  }

  // Check if a player is logged in based on the presence of a player ID in local storage
  isPlayerLoggedIn(): boolean {
    return localStorage.getItem('player_id') != null;
  }

  // Set the player ID in local storage
  setPlayerId(id: string): void {
    localStorage.setItem('player_id', id);
  }

  // Asynchronously create a player using AngularFireAuth's signInAnonymously method
  async createPlayer(): Promise<void> {
    try {
      const result = await this.angularFireAuth.signInAnonymously(); // Sign in anonymously
      this.setPlayerId(result.user?.uid!); // Set the player ID obtained from authentication
    } catch (error) {
      console.log(error); // Log any errors that occur during player creation
    }
  }
}
