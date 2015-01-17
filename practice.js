var assert = require('assert');

//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
  var me = {
    name: 'Stephen Done',
    age: 33
  };

  me.introduceMe = function() {
    return 'Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
  };

  var intro = me.introduceMe();
  console.log(intro);

  var expectedIntro = "Hi, my name is " + me.name + " and I am " + me.age + " years old.";
  assert.equal(intro, expectedIntro);

//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
  function FavoriteThings(band, food, person, book, movie, holiday) {
    this.band = band;
    this.food = food;
    this.person = person;
    this.book = book;
    this.movie = movie;
    this.holiday = holiday;
  }

  var myFavoriteThings = new FavoriteThings("The Beatles", "Pizza", "Tiffany Done",
      "Lord of the Rings", "Mr. Holland's Opus", "Today");

  console.log(myFavoriteThings);


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
  myFavoriteThings.car = "VW Jetta";
  myFavoriteThings.brand = "Apple";

  console.log(myFavoriteThings.car);
  console.log(myFavoriteThings.brand);

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
  myFavoriteThings.food = "Lettuce";
  myFavoriteThings.book = "50 Shades of Gray";

  console.log(myFavoriteThings.food);
  console.log(myFavoriteThings.book);

//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  //Code here
  var backPack = {};
  var item = 'firstPocket';
  backPack[item] = 'chapstick';

//After you do the above, alert your entire backPack object.

  //Code here
  console.log(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here
  var me2 = {
    name: "Stephen Done",
    age: 33,
    height: "5'6''",
    gender: "male",
    married: true,
    eyeColor: "blue",
    hairColor: "blonde"
  };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
  for (var key in me2) {
    console.log(me2[key]);
  }



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  //Code Here
  var album = {
    iHateSongs: 3.33,
    iLoveSongs: 1.001,
    iDontCare: 100,
    why: 0.1,
    oops: "sing"
  };

//Now, loop through your album object alerting every song title individually.

  //Code Here
  for (var key in album) {
    console.log(key);
  }



//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here
  var states = {
    Utah: 3,
    Arizona: 3,
    Canada: 0,
    Cali: 1000,
    NewMexico: 30001
  };

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here
  for (var key in states) {
    if (states[key] > 30000) console.log(key);
  }


//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
};
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  //Code Here
  for (var key in user) {
    if(!user[key]) delete user[key];
  }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here
  user.name = "Stephen";
  user.username = "srdone";

  console.log(user);

//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            return 'Email is : ' + this.email;
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  //Code Here
  user.name = "Tyler S. McGinnis";
  user.email = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here
  console.log(user.sayName());



//NEXT PROBLEM




//Create an empty object called methodCollection.

  //Code Here
  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  //Code Here
  methodCollection.alertHello = function() {
    console.log('hello -- pretend I am alerting');
  };

  methodCollection.logHello = function() {
    console.log('hello -- i am in the console now');
  };

//Now call your alertHello and logHello methods.

  //Code Here
  methodCollection.alertHello();
  methodCollection.logHello();



//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  //Code Here
  devMountainEmployees.push(tyler, cahlan, ryan, colt);
  console.log(devMountainEmployees.length);
  assert.equal(devMountainEmployees.length, 4);

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here
  //Assumes that we have an array of objects with name properties.
  //We really shouldn't add it to the array prototype
  //Instead we should add this to the prototype for the object
  //If we want it in the prototype in the first place
  //This is just fun practice to see what is possible
  //Bad, bad, bad - don't do it exactly this way in real systems - this can't operate on all arrays.
  Array.prototype.removeByName = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this[i].name === name) this.splice(i,1);
    }
    return this;
  };

  console.log(devMountainEmployees.removeByName('Cahlan'));

  var expected = [tyler, ryan, colt];
  assert.deepEqual(devMountainEmployees.removeByName('Cahlan'), expected);


//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

  //Code Here
  var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};

var user2 = {
    name: 'Stephen Done',
    email: 'myfakeemail@gmail.com',
    password: 'ohdddear',
    username: 'hah'
};

var user3 = {
  name: 'Fred Flintstone',
  email: 'freddy@gmail.com',
  password: 'yabbadabbadoo',
  username: 'barney'
};

//Your Code Here
users.push(user1, user2, user3);

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular indice he's located in, delete him from the array.*/

  //Code Here
  var removeUser = function(email) {
    //another test - does this work on any array with email objects?
    //again - probably not best practice
    for (var i = 0; i < this.length; i++) {
      if(this[i].email === email) {
        this.splice(i,1);
        //breaking the loop after we delet (so we only delete one match)
        return this;
      }
    }
    return this;
  };

  //attach the above method to users
  users.removeUser = removeUser;

  //notice that now our method is listed on the object
  console.log(users);
  users.removeUser('tylermcginnis33@gmail.com');
  console.log(users);

//The activity we just did is very much how data works in 'the real world'.



