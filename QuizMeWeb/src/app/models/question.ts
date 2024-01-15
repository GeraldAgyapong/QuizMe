import * as he from 'he'; // Importing the 'he' library for HTML entity decoding

// Class representing a question entity
class Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  wasAnswerCorrect: boolean;

  // Constructor for the Question class
  constructor(
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[],
    wasAnswerCorrect: boolean,
  ) {
    // Assigning values to class properties
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
    this.wasAnswerCorrect = wasAnswerCorrect;
  }

  // Method to shuffle an array (used to randomize answer order)
  static shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array]; // Copying the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swapping elements randomly
    }
    return shuffledArray;
  }

  // Method to convert JSON data to a Question object
  static fromJSON(json: any): Question {
    // Extracting data from the JSON object
    let incorrectAnswersFromJSON = json['incorrect_answers'];
    let correctAnswerFromJSON = he.decode(json['correct_answer']); // Decoding HTML entities

    // Adding the correct answer to the list of incorrect answers
    incorrectAnswersFromJSON.push(correctAnswerFromJSON);

    // Shuffling the answers to randomize their order
    incorrectAnswersFromJSON = this.shuffleArray(incorrectAnswersFromJSON);

    // Decoding HTML entities for all answers
    incorrectAnswersFromJSON = incorrectAnswersFromJSON.map((element: string) =>
      he.decode(element)
    );

    // Creating a new Question object with the extracted and processed data
    return new Question(
      json['category'],
      json['type'],
      json['difficulty'],
      json['question'],
      correctAnswerFromJSON,
      incorrectAnswersFromJSON,
      false, // Defaulting 'wasAnswerCorrect' to false
    );
  }
}

// Exporting the Question class for use in other modules
export { Question };
