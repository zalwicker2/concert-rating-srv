const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db');

const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true
}));

app.get('/api/test', (req, res) => {
    db.serialize(() => {
        db.all(`SELECT Location, Date, Rating, Tags, Description, Author, USERS.Picture as ProfilePicture, USERS.username AS Username, ARTISTS.name as ArtistName, ARTISTS.background as Background FROM REVIEWS
        LEFT JOIN USERS ON USERS.id = REVIEWS.Author
        LEFT JOIN ARTISTS ON ARTISTS.id = REVIEWS.Artist`, (err, result) => {
            console.log(err, result);
            if (err == null) {
                res.json(result);
            } else {
                console.log(err);
                res.json({})
            }
        })
    })
})

app.post('/api/submit', (req, res) => {
    db.serialize(() => {
        db.all(`SELECT Location, Date, Rating, Tags, Description, Author, USERS.Picture as ProfilePicture, USERS.username AS Username, ARTISTS.name as ArtistName, ARTISTS.background as Background FROM REVIEWS
        LEFT JOIN USERS ON USERS.id = REVIEWS.Author
        LEFT JOIN ARTISTS ON ARTISTS.id = REVIEWS.Artist`, (err, result) => {
            console.log(err, result);
            if (err == null) {
                res.json(result);
            } else {
                console.log(err);
                res.json({})
            }
        })
    })
})

app.listen(4200, () => {
    console.log('listening on port 4200');
})