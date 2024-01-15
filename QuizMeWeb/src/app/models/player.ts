// Player class that represents a player with an id, name, and score
class Player {
  id: string;
  name: string;
  score: number;

  // Constructor to initialize a Player object
  constructor(id: string, name: string, score: number) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  // Static method to create a Player object from JSON data
  static fromJSON(json: any): Player {
    const { id, name, score } = json;
    return new Player(id, name, score);
  }

  // Method to convert a Player object's data to JSON format
  toJSON(): any {
    return { id: this.id, name: this.name, score: this.score };
  }
}

// Export the Player class to make it accessible to other modules
export { Player };
