function appInit() {

    const config = {
        apiKey: "AIzaSyDLFK8TCZ14wnZhRNhfyFswMda21yIowf0",
        authDomain: "inf551-db90c.firebaseapp.com",
        databaseURL: "https://inf551-db90c.firebaseio.com",
        projectId: "inf551-db90c",
        storageBucket: "inf551-db90c.appspot.com",
        messagingSenderId: "562245129922"
    };
    firebase.initializeApp(config);

    /*      var big = document.getElementById('big');
          var dbRef = firebase.database().ref().child('text');
          dbRef.on('value', snap => big.innerText = snap.val());*/
    const inputEmail = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const btnIn = document.getElementById("btnIn");
    const btnUp = document.getElementById("btnUp");
};
