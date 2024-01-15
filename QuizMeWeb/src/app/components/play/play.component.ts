// Import necessary modules and components from Angular and custom files
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Question } from '../../models/question';
import { TriviaResponse } from '../../models/trivia';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-play', // Component selector used in HTML
  templateUrl: './play.component.html', // HTML file for the component
  styleUrl: './play.component.css', // CSS file for the component
})
export class PlayComponent {
  // Array to store trivia questions
  questions: Question[] = [];

  // Flags to manage state during the game
  loading: boolean = true;
  canClick: boolean = true;
  hasSessionEnded: boolean = false;
  currentIndex: number = 0;

  // Default value for selected answer index
  static selectedIndexDefaultValue: number = 100;
  selectedIndex: number = PlayComponent.selectedIndexDefaultValue;

  constructor(
    private http: HttpClient, // HttpClient for making HTTP requests
    private databaseService: DatabaseService // Custom service for database interaction
  ) {}

  ngOnInit(): void {
    // Lifecycle hook, runs when the component is initialized
    this.fetchTriviaQuestions(); // Fetch trivia questions when the component initializes
  }

  // Function to fetch trivia questions from an API
  fetchTriviaQuestions(): void {
    // Reset state variables
    this.questions = [];
    this.loading = true;
    this.canClick = true;
    this.hasSessionEnded = false;
    this.currentIndex = 0;
    this.selectedIndex = PlayComponent.selectedIndexDefaultValue;

    // API URL for fetching trivia questions
    const apiUrl = 'https://opentdb.com/api.php?amount=10';

    // Make an HTTP GET request to fetch trivia questions
    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        // Parse the API response into a TriviaResponse object
        const triviaResponse: TriviaResponse = TriviaResponse.fromJSON(response);
        // Store the retrieved questions
        this.questions = triviaResponse.results;
        // Update loading status to false
        this.loading = false;
      },
      error: (error) => {
        // Handle errors if fetching questions fails
        this.loading = false;
        console.error('Error fetching trivia questions:', error);
      },
    });
  }

  // Function to handle user selection of an answer
  selectAnswer(index: number): void {
    // Prevent multiple clicks before processing the answer
    if (!this.canClick) {
      return;
    }

    // Disable further clicking until the answer is processed
    this.canClick = false;

    // Store the index of the selected answer
    this.selectedIndex = index;

    // Check if the selected answer is correct and mark the question accordingly
    this.questions[this.currentIndex].wasAnswerCorrect = this.isAnswerCorrect(index);

    // Set a timeout to move to the next question after a delay of 500ms
    setTimeout(() => {
      if (this.currentIndex < this.questions.length - 1) {
        // Move to the next question if available
        this.currentIndex++;
      } else {
        // End the game if all questions are answered
        this.hasSessionEnded = true;
        // Update user score in the database
        this.databaseService.updateUserScore(this.getScore());
      }
    }, 500);

    // Enable clicking again and reset the selected index to default
    this.canClick = true;
    this.selectedIndex = PlayComponent.selectedIndexDefaultValue;
  }

  // Function to check if any answer index is selected
  isAnyIndexSelected(): boolean {
    return this.selectedIndex != PlayComponent.selectedIndexDefaultValue;
  }

  // Function to check if the selected answer is correct
  isAnswerCorrect(index: number): boolean {
    return (
      this.questions[this.currentIndex].incorrectAnswers[index].toLowerCase() ==
      this.questions[this.currentIndex].correctAnswer.toLowerCase()
    );
  }

  // Function to convert index to alphabet letter (A, B, C, etc.)
  indexToAlphabetLetter(index: number): string {
    // ASCII code for 'A' is 65
    return String.fromCharCode(65 + index);
  }

  // Function to calculate the user's score
  getScore(): number {
    return this.questions.filter((element) => element.wasAnswerCorrect).length;
  }
}
