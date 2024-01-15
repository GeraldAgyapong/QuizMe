// this is the Player class that takes has an id, name and score parameter
class Player {
  id: string;
  name: string;
  score: number;

  // here is the constructor for the class
  constructor(id: string, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  // this method below takes a json file and converts it to a player object
  static fromJSON(json: any): Player {
    const { id, name, score } = json;
    return new Player(id, name, score);
  }

  // this writes to json about a players details
  toJSON(): any {
    return { id: this.id, name: this.name, score: this.score };
  }
}
// this code exports the class so that it can be used in other classes
export { Player };
