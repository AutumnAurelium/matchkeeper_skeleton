import express from 'express';

/*
Create User
Modify User
Update Statistics
Delete User
Get User Winrate by UserName
Get all User Info by UserName

Create Event
Edit Event
Delete Event
Get Event Details
Get Players
Add Players

Create Bracket
Delete Bracket
Get Card Image
*/

const app = express();
const port = 8080;

// Users
app.post('/user', (req, res) => {
    res.send("Create User");
});

app.post('/user/:id', (req, res) => {
    res.send("Modify User");
});

app.get('/user/:id/stats', (req, res) => {
    res.send("Get User Winrate by UserName");
});

app.delete('/user/:id', (req, res) => {
    res.send("Delete User");
});

app.get('/user/:id', (req, res) => {
    res.send("Get all User Info by UserName");
});

// Events
app.post('/event', (req, res) => {
    res.send("Create Event");
});

app.put('/event/:id', (req, res) => {
    res.send("Edit Event");
});

app.delete('/event/:id', (req, res) => {
    res.send("Delete Event");
});

app.get('/event/:id', (req, res) => {
    res.send("Get Event Details");
});

app.get('/event/:id/players', (req, res) => {
    res.send("Get Players");
});

app.post('/event/:id/players', (req, res) => {
    res.send("Add Players");
});

// Brackets
app.post('/bracket', (req, res) => {
    res.send("Create Bracket");
});

app.delete('/bracket/:id', (req, res) => {
    res.send("Delete Bracket");
});

app.get('/bracket/:id/card', (req, res) => {
    res.send("Get Card Image");
});

// Decks
app.get('/card/url', (req, res) => {
    res.send("Get Card Image");
});

app.post('/deck', (req, res) => {
    res.send("Create Deck");
});

app.post('/deck/:id/cards', (req, res) => {
    res.send("Add Card to Deck");
});

app.delete('/deck/:id/cards', (req, res) => {
    res.send("Delete Card from Deck");
});

app.get('/deck/:id', (req, res) => {
    res.send("View Deck");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});