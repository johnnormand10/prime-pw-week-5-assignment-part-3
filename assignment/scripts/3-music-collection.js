console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title , artist , yearPublished){
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return album;
}

console.log(addToCollection("Acid Rap" , "Chance the Rapper" , 2013));
console.log(addToCollection("Coloring Book" , "Chance the Rapper" , 2016));
console.log(addToCollection("Hollywood's Bleeding" , "Post Malone" , 2019));
console.log(addToCollection("Beerbongs & Bentleys" , "Post Malone" , 2018));
console.log(addToCollection("Change of Scenary" , "Quinn XCII" , 2015));
console.log(addToCollection("The Story of Us" , "Quinn XCII" , 2017));
console.log(collection);

function showCollection(arr){
    console.log(arr.length);

    arr.forEach(album => console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`));
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
                searchArray.push(collection[i]);
            }
        }
        return searchArray;
    }
    else{
        return collection;
    }
}

console.log(search({artist: "Post Malone" , yearPublished: 2018}));
console.log(search({artist: "Johnny Cash" , yearPublished: 1969}));

