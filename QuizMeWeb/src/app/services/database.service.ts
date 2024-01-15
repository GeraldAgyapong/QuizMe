import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore for Firestore functionality
import { increment } from '@angular/fire/firestore'; // Import increment function for Firestore updates

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: AngularFirestore) {} // Inject AngularFirestore in the constructor

  // Method to update user score in Firestore
  async updateUserScore(score: number): Promise<void> {
    // Check if the score is zero; if so, return without performing an update
    if (score === 0) {
      return;
    }

    // Update user score in Firestore using an atomic increment operation
    await this.firestore
      .collection('user-data') // Access the 'user-data' collection in Firestore
      .doc(localStorage.getItem('player_id')!) // Get the document with the player's ID from local storage
      .update({
        score: increment(score), // Increment the current score by the provided score value
      });
  }
}
