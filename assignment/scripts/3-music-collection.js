console.log('***** Music Collection *****')

// > While working through the features below, make sure to commit after you complete a task! Your commit message should reflect what you added or changed since the previous commit.


// - Create a variable `collection` that starts as an empty array.
let collection = [];
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished, tracks){
  let album = {
    Title: title,
    Artist: artist,
    Year: yearPublished,
    Tracks: tracks,
  }
  collection.push(album);
  return album;
  }
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
addToCollection('Nevermind', 'Nirvana', '1991',['Smells Like Teen Spirit 5:01', 'In Bloom 4:15']);
addToCollection('In Utero', 'Nirvana', '1993');
addToCollection('Third Eye Blind', 'Third Eye Blind', '1997');
addToCollection('So Much for the Afterglow', 'Everclear', '1997');
addToCollection('Rumors', 'Fleetwoood Mac', '1977');
addToCollection('Dive','Tycho','2011');
console.log(collection);
// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection(array){
  console.log(array.length);
  for (let album of array){
    console.log(album.Title, 'by', album.Artist, 'published in', album.Year);
    }
}
// - Test the `showCollection` function.
showCollection(collection);
// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist){
  let artistList =[];
  for (let album of collection){
    if(album.Artist===artist){
      artistList.push(album)
    }
  }return artistList;
  
}

console.log(findByArtist('Nirvana'));
console.log(findByArtist('Third Eye Blind'));
console.log(findByArtist('Smashing Pumpkins'));
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.


function search(artist, year){
  if(!artist && !year){
    return collection;
  }
  let searchList = [];
  for (let i =0; i<collection.length; i++)
    if(collection[i].Artist==artist && collection[i].Year==year){
    searchList.push(collection[i]);
  }
  return searchList;
}

console.log(search('Nirvana','1991'));
console.log(search());
console.log(search(1991));

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!



// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
