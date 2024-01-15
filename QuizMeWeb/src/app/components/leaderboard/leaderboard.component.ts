import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore for Firestore functionality
import { Observable } from 'rxjs'; // Import Observable from RxJS for handling asynchronous data streams

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html', // HTML template for displaying leaderboard
  styleUrl: './leaderboard.component.css', // CSS file for styling this component
})
export class LeaderboardComponent implements OnInit {
  users$: Observable<any[]> = <any>[]; // Observable to hold user data retrieved from Firestore

  constructor(private firestore: AngularFirestore) {} // Inject AngularFirestore for Firestore interactions

  ngOnInit(): void {
    // Retrieve user data from Firestore collection 'user-data', order by 'score', and limit to 50 records
    this.users$ = this.firestore
      .collection('user-data', (ref) => ref.orderBy('score', 'desc').limit(50))
      .valueChanges(); // Subscribe to changes in the Firestore collection and store the data in users$
  }

  // Check if the user ID matches the ID of the current player stored in localStorage
  isPlayerMe(id: string): boolean {
    return id == localStorage.getItem('player_id')!; // Compare with the current player's ID from localStorage
  }
}
