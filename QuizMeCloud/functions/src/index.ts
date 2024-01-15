import * as admin from "firebase-admin";
import { FieldValue } from "firebase-admin/firestore";
import * as functions from "firebase-functions";
import { Player } from "./models/player";

const randomUsernameGenerator = require("random-username-generator");

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

export const createUser = functions.auth.user().onCreate(async (event) => {
  const name: string = randomUsernameGenerator.generate().toLowerCase();
  const player: Player = new Player(event.uid, name, 0);

  return firestore.collection("user-data").doc(event.uid).set(player.toJSON());
});

export const updateUserScore = functions.https.onRequest(async (req, res) => {
  try {
    const data = JSON.parse(req.body);
    const playerId: string = data["id"];
    const playerScore: number = data["score"];

    if (playerScore == 0) {
      res.status(200).send();
    }

    await firestore
      .collection("user-data")
      .doc(playerId)
      .update({
        score: FieldValue.increment(playerScore),
      });

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export const deletePlayer = functions.auth.user().onDelete(async (event) => {
  return await firestore.collection("user-data").doc(event.uid).delete();
});
