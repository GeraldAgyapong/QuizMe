import { Question } from './question';
// I am creating a trivia class that takes a response code and a results array that displays a
// list of questions as an array
class TriviaResponse {
  responseCode: number;
  results: Question[];

  // I am creating the constructor for the class
  constructor(responseCode: number, results: Question[]) {
    this.responseCode = responseCode;
    this.results = results;
  }
  // Now i am creating a method that receives json from the api i am working with and converts or
  //  breaks down the json file into simple englsh so that the users can understand
  static fromJSON(json: any): TriviaResponse {
    const questionsFromJSON = json['results'] as any[] | null;
    return new TriviaResponse(
      json['response_code'],
      questionsFromJSON == null
        ? []
        : questionsFromJSON.map((element) => Question.fromJSON(element))
    );
  }
}
// this code exports the Trivia response class
export { TriviaResponse };
