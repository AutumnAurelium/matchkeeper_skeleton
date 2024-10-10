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

app.post('/user/:id/stats', (req, res) => {
    res.send("Update Statistics");
})

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

app.delete('/event/:id/players', (req, res) => {
    res.send("Remove Players");
});

app.post('/event/:id/decks', (req, res) => {
    res.send("Add Deck to Event");
});

app.delete('/event/:id/decks', (req, res) => {
    res.send("Remove Deck from Event");
});

app.get('/event/:id/decks', (req, res) => {
    res.send("View Decks from Event Library");
});

app.get('/event/:id/bannedCards', (req, res) => {
    res.send("View Banned Cards");
});

app.post('/event/:id/bannedCards', (req, res) => {
    res.send("Add Banned Card");
});

app.delete('/event/:id/bannedCards', (req, res) => {
    res.send("Unban Card");
});

// Brackets
app.post('/bracket', (req, res) => {
    res.send("Create Bracket");
});

app.post('/bracket/:id', (req, res) => {
    res.send("Edit Bracket");
});

app.delete('/bracket/:id', (req, res) => {
    res.send("Delete Bracket");
});

app.post('/bracket/:id/results', (req, res) => {
    res.send("Set Win");
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
    res.send("Remove Card from Deck");
});

app.get('/deck/:id', (req, res) => {
    res.send("View Deck");
});

app.get('/deck/:id/winRate', (req, res) => {
    res.send("View Deck Winrate");
});

app.get('/card/legality', (req, res) => {
    res.send("Check Card Legality");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});