class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}

const mySong = new Song({
    name: "Imagine",
    publishDate: "1971-10-11",
    artist: "John Lennon"
});

console.log(mySong);