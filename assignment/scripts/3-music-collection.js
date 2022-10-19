console.log('***** Music Collection *****')

let collection = [];

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

function showCollection(array){
  console.log(array.length);
  for (let album of array){
    console.log(album.Title, 'by', album.Artist, 'published in', album.Year+':');
    for (let track of album.Tracks){
      console.log(album.Tracks.indexOf(track)+1,track.Name,track.Duration);
    }
  }
}

function findByArtist(artist){
  let artistList =[];
  for (let album of collection){
    if(album.Artist===artist){
      artistList.push(album)
    }
  }return artistList;
}

// Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.

function search(artist, year, trackName){
  if(!artist && !year && !trackName){
    return collection;
  }
  let searchList = [];
  for (let i = 0; i<collection.length; i++){
    if(collection[i].Artist == artist && collection[i].Year == year && trackName == ''){
        searchList.push(collection[i]);
    }else if(collection[i].Year == year && artist == '' && trackName == ''){
        searchList.push(collection[i]);
    }else if(collection[i].Artist == artist && year == '' && trackName == ''){
    searchList.push(collection[i]);
}
  for (let j =0; j < collection[i].Tracks.length; j++){
    if(collection[i].Tracks[j].Name == trackName && collection[i].Artist == artist && collection[i].Year == year){
    return (collection[i].Tracks[j].Name);
    }else if(collection[i].Tracks[j].Name == trackName && collection[i].Artist == artist && collection[i].Year == ''){
      return (collection[i].Tracks[j].Name);
    }else if(collection[i].Tracks[j].Name == trackName && collection[i].Artist == '' && collection[i].Year == year){
        return (collection[i].Tracks[j].Name);
      }
  }
  }
  return searchList;
}

addToCollection('Nevermind', 'Nirvana', '1991',[{
  Name: 'Smells Like Teen Spirit',
  Duration: '5:01',
  }, 
  {
  Name:'Come as You Are',
  Duration:'3:39',
  },
  {
  Name:'In Bloom',
  Duration:'4:15',
  },
  {
  Name:'Breed',
  Duration:'3:04',
  },
  {
  Name:'Lithium',
  Duration:'4:17',
  },
  {
  Name:'Polly',
  Duration:'2:57',
  },
  {
  Name:'Territorial Pissings',
  Duration:'2:23',
  },
  {
  Name:'Drain You',
  Duration:'3:34',
  },
  {
  Name:'Lounge Act',
  Duration:'2:37',
  },
  {
  Name:'Stay Away',
  Duration:'3:32',
  },
  {
  Name:'On a Plane',
  Duration:'3:16',
  },
  {
  Name:'Something in the Way',
  Duration:'3:52',
  },
]);

addToCollection('In Utero', 'Nirvana', '1993',[{
  Name:'Serve the Servants',
  Duration:'3:37',
  },
  {
  Name:'Scentless Apprentice',
  Duration:'3:48',
  },
  {
  Name:'Heart Shaped Box',
  Duration:'4:41',
  },
  {
  Name:'Rape Me',
  Duration:'2:50',
  },
  {
  Name:'Frances Farmer Will Have Her Revenge On Seattle',
  Duration:'4:10',
  },
  {
  Name:'Dumb',
  Duration:'2:32',
  },
  {
  Name:'Very Ape',
  Duration:'1:56',
  },
  {
  Name:'Milk It',
  Duration:'3:54',
  },
  {Name:'PennyRoyal Tea',
  Duration:'3:37',
  },
  {Name:'Radio Friendly Unit Shifter',
  Duration:'4:51',
  },
  {Name:"Tourette's",
  Duration:'1:35',
  },
  {Name:'All Alpologies',
  Duration:'3:51',
  },
  ]);

addToCollection('Third Eye Blind', 'Third Eye Blind', '1997', [{
  Name:'Losing a Whole Year',
  Duration:'3:21',
  },
  {
  Name:'Narcolepsy',
  Duration:'3:49',
  },
  {
  Name:'Semi-Charmed Life',
  Duration:'4:29',
  },
  {
  Name:'Jumper',
  Duration:'4:32',
  },
  {
  Name:'Gratitude',
  Duration:'3:10',
  },
  {
  Name:"How's It Going to Be",
  Duration:'4:13',
  },
  {
  Name:'Thanks a Lot',
  Duration:'4:58',
  },
  {
  Name:'Bruning Man',
  Duration:'3:00',
  },
  {
  Name:'Good for You',
  Duration:'3:52',
  },
  {
  Name:'London',
  Duration:'3:07',
  },
  {
  Name:'I Want You',
  Duration:'4:29',
  },
  {
  Name:'The Background',
  Duration:'4:57',
  },
  {  
  Name:'Motorcycle Drive By',
  Duration:'4:23',
  },
  {
  Name:'God of Wine',
  Duration:'5:18',
  },
]);

addToCollection('So Much for the Afterglow', 'Everclear', '1997',[{
  Name:'So Much for the Afterglow',
  Duration:'3:55',
  },
  {
  Name:'Everything to Everyone',
  Duration:'3:20',
  },
  {
  Name:'Ataraxia',
  Duration:'0:35',
  },
  {
  Name:'Normal Like You',
  Duration:'3:13',
  },
  {
  Name:'I Will Buy You a New Life',
  Duration:'3:54',
  },
  {
  Name:'Father of Mine',
  Duration:'3:52',
  },
  {
  Name:'One Hit Wonder',
  Duration:'3:28',
  },
  {
  Name:'El Distorto De Melodica',
  Duration:'3:07',
  },
  {
  Name:'Amphetamine',
  Duration:'3:55',
  },
  {
  Name:'White Men in Black Suits',
  Duration:'3:31',
  },
  {
  Name:'Sunflowers',
  Duration:'3:48',
  },
  {
  Name:"Why I Don't Believe in God",
  Duration:'4:17',
  },
  {
  Name:'Like  California King',
  Duration:'8:08',
  }]);
  addToCollection('Rumors', 'Fleetwood Mac', '1977',[{
  Name:'Second Hand News',
  Duration:'2:43',
  },
  {
  Name:'Dreams',
  Duration:'4:14',
  },
  {
  Name:'Never Going Back Again',
  Duration:'2:02',
  },
  {
  Name:"Don't Stop",
  Duration:'3:11',
  },
  {
  Name:'Go Your Own Way',
  Duration:'3:38',
  },
  {
  Name:'Songbird',
  Duration:'3:20',
  },
  {
  Name:'The Chain',
  Duration:'4:28',
  },
  {
  Name:'You Make Loving Fun',
  Duration:'3:31',
  },
  {
  Name:"I Don't Wan't to Know",
  Duration:'3:11',
  },
  {
  Name:'Oh Daddy',
  Duration:'3:54',
  },
  {
  Name:'Gold Dust Woman',
  Duration:'4:51',
}]);
addToCollection('Dive','Tycho','2011',[{
  Name:'A Walk',
  Duration:'5:17',
  },
  {
  Name:'Hours',
  Duration:'5:44',
  },
  {
  Name:'Daydream',
  Duration:'5:34',
  },
  {
  Name:'Dive',
  Duration:'8:20',
  },
  {
  Name:'Coastal Brake',
  Duration:'5:34',
  },
  {
  Name:'Ascension',
  Duration:'4:24',
  },
  {
  Name:'Melanine',
  Duration:'2:53',
  },
  {
  Name:'Adrift',
  Duration:'6:00',
  },
  {
  Name:'Epigram',
  Duration:'2:29',
  },
  {
  Name:'Elegy',
  Duration:'4:24',
}]);

showCollection(collection);
console.log('epxected 2 albums:',findByArtist('Nirvana'));
console.log('epected 1 album:',findByArtist('Third Eye Blind'));
console.log('expected empty:',findByArtist('Smashing Pumpkins'));
console.log('expected 1 album:',search('Nirvana','1991',''));
console.log('expected entire collection:',search());
console.log('expected In Bloom:',search('Nirvana', '1991','In Bloom'));
console.log('expected empty array',search('Nirvana', '1993','In Bloom'));
console.log('expected 2 albums:',findByArtist('Nirvana'));
console.log('expected 2 albums',search('','1997',''));
console.log('expected Gold Dust Woman',search('Fleetwood Mac','1977','Gold Dust Woman'));
console.log('expected empty array',search('Nirvana','1977','Gold Dust Woman'));
console.log('expected empty array',search('Nirvana','1991','Gold Dust Woman'));
console.log('expected empty array',search('Nirvana','','Gold Dust Woman'));
