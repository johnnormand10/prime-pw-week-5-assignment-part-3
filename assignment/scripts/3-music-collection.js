console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title , artist , yearPublished, tracks){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(album);
    return album;
}

console.log(addToCollection("Acid Rap" , "Chance the Rapper" , 2013 , []));
console.log(addToCollection("Coloring Book" , "Chance the Rapper" , 2016 , []));
console.log(addToCollection("Hollywood's Bleeding" , "Post Malone" , 2019 , []));

let track1 = {
    name: "Paranoid",
    duration: "3:40"
}
let track2 = {
    name: "Zack And Codeine",
    duration: "3:24"
}
let track3 = {
    name: "Better Now",
    duration: "3:50"
}
console.log(addToCollection("Beerbongs & Bentleys" , "Post Malone" , 2018 , [track1 , track2 , track3]));

let track4 = {
    name: "Another Day in Paradise",
    duration: "4:13"
}
console.log(addToCollection("Change of Scenary" , "Quinn XCII" , 2015 , [track4]));

let track5 = {
    name: "Straightjacket",
    duration: "3:25"
}
console.log(addToCollection("The Story of Us" , "Quinn XCII" , 2017 , [track5]));

console.log(collection);




function showCollection(arr){
    console.log(arr.length);

    for(let i = 0; i < arr.length; i++){
        console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);

        for(let t = 0; t < collection[i].tracks.length; t++){
            console.log(`${t+1}:${collection[i].tracks[t].name}: ${collection[i].tracks[t].duration}`);
        }
    }
}

showCollection(collection);


function findByArtist(artist){  
    let artistArray =[];
    
    for( let i = 0; i < collection.length; i++){
        if(collection[i].artist === artist){
            artistArray.push(collection[i]);
        }
    }
    return artistArray;
    }
  
console.log(findByArtist("Post Malone"));
console.log(findByArtist("Johnny Cash"));


// STRETCH GOALS


function search(searchCriteria){
    if (searchCriteria != null && searchCriteria != undefined){
        let searchArray = [];

        for( let i = 0; i < collection.length; i++){
            if(collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished){
                for( let t = 0; t < collection[i].tracks.length; t++){
                    if(collection[i].tracks[t].name === searchCriteria.trackName){
                        searchArray.push(collection[i]);
                    }
                }
                
            }
        }
        return searchArray;
    }
    else{
        return collection;
    }
}
let searchCriteriaXCII = {
    artist: "Quinn XCII",
    yearPublished: 2017,
    trackName: "Straightjacket",
}
console.log(search(searchCriteriaXCII));

let searchCriteriaQuinn = {
    artist: "Quinn XCII",
    yearPublished: 2017,
    trackName: "Another Day in Paradise",
}
console.log(search(searchCriteriaQuinn));

console.log(search({artist: "Johnny Cash" , yearPublished: 1969}));
