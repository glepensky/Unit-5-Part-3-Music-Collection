console.log('***** Music Collection *****')

// create empty collection array
let collection = [];

// create addToCollection function to take in album parameters and
// create a new object,
// add the new object to the end of the collection array,
// and return newly created object.
function addToCollection(title, artist, yearPublished){
    let albumToAdd = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };

    collection.push(albumToAdd);
    return albumToAdd;
}

// create 6 albums for collection
let albumOne = {title: 'Begin Again', artist: 'Jessie Ware', yearPublished:2023};
let albumTwo = {title: 'Seeking Thrills', artist: 'Georgia', yearPublished:2020};
let albumThree = {title: 'Preachers Daughter', artist: 'Ethel Cain', yearPublished:2022};
let albumFour = {title: 'Carrie & Lowell', artist: 'Sufjan Stevens', yearPublished:2015};
let albumFive = {title: 'The Age of Adz', artist: 'Sufjan Stevens', yearPublished:2010};
let albumSix = {title: 'Aromanticism', artist: 'Moses Sumney', yearPublished:2020};

// test the addToCollection function

addToCollection(albumOne);
console.log(collection);