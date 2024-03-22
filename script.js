// First, fix the issue with the first library
(function(window){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();

      if (firstLetter === 'j') {
        window.byeSpeaker.speak(names[i]);
      } else {
        window.helloSpeaker.speak(names[i]);
      }
    }
})(window);

// Now, fix the issue with the second library
(function(window){
    var byeSpeaker = {};

    var speakWord = "Good Bye";

    byeSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }

    window.byeSpeaker = byeSpeaker;
})(window);

(function(window){
    var helloSpeaker = {};

    var speakWord = "Hello";

    helloSpeaker.speak = function(name) {
      console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;
})(window);
