import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCryx8-gR3syXOMY3ZtOJ43Pp54tz7J4OU",
    authDomain: "goal-coach-e64fb.firebaseapp.com",
    databaseURL: "https://goal-coach-e64fb.firebaseio.com",
    projectId: "goal-coach-e64fb",
    storageBucket: "goal-coach-e64fb.appspot.com",
    messagingSenderId: "594533005287"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
