console.log('***** Music Collection *****')

// create empty collection array
let collection = [];

// create addToCollection function to take in album parameters and
// create a new object,
// add the new object to the end of the collection array,
// and return newly created object.

function addToCollection(titleIn, artistIn, yearPublishedIn) {
    let albumToAdd = {
        title: titleIn,
        artist: artistIn,
        yearPublished: yearPublishedIn,
    };

    collection.push(albumToAdd);
    return albumToAdd;
}

// Is there a way to add the albums in this format?? 
// let albumOne = {title: 'Begin Again', artist: 'Jessie Ware', yearPublished: 2023};
// let albumTwo = {title: 'Seeking Thrills', artist: 'Georgia', yearPublished:2020};
// let albumThree = {title: 'Preachers Daughter', artist: 'Ethel Cain', yearPublished:2022};
// let albumFour = {title: 'Carrie & Lowell', artist: 'Sufjan Stevens', yearPublished:2015};
// let albumFive = {title: 'The Age of Adz', artist: 'Sufjan Stevens', yearPublished:2010};
// let albumSix = {title: 'Aromanticism', artist: 'Moses Sumney', yearPublished:2020};

// create 6 albums for collection

addToCollection('Begin Again', 'Jessie Ware', 2023);
addToCollection('Seeking Thrills', 'Georgia', 2020);
addToCollection('Preachers Daughter', 'Ethel Cain', 2022);
addToCollection('Carrie & Lowell', 'Sufjan Stevens', 2015);
addToCollection('The Age of Adz', 'Sufjan Stevens', 2010);
addToCollection('Aromanticism', 'Moses Sumney', 2020);

// test the addToCollection function
console.log(collection);

// create function showCollection that will:
// take an an array parameter,
// log the show of items in the array, 
// and loop over the array and log each album as 'TITLE by ARTIST, published in YEAR'.

function showCollection(title, artist, yearPublished) {
    console.log('The numbers of albums in my collection:', collection.length);

    for (let albums of collection) {
        console.log(collection[0].title + ' by ' + collection[0].artist + ',' + ' published in ' + collection[0].yearPublished + '.');
    }
}


showCollection(collection);

console.log(collection[0].title);



// create function findByArtist that will:
// take in artist as a string parameter,
// create an array to hold results,
// loop through the collection array and add any objects matfhing artist to the array,
// and return the array with matching results. 

function findByArtist(artist) {
    let sameArtistCollection = [];


}




