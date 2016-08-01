# Description
This is a toy app built to test how React will deal with HTML rendered on the server (without running server-side React). The server renders a large number of colored squares (called cards in the context of this app) and sends the HTML (along with JSON representation of the page) over to the client. React utilizes the data in the JSON object to re-create the page. I was curious to see whether this re-creation will be accompanied by some visible artifacts (flickering and so on). Turns out, it isn’t.

# Installation
To run the toy app:

- clone the repo
- install npm packages (`npm install`)
- start the node server (`npm start`)
- start webpack to compile client-side js (`npm run start-client`)

The server will be listening on port 3000. Visit `localhost:3000` to observe results.

# What to observe
- the server returns an HTML page with a large number of cards (see the page source)
- when React is started on the page, it adds interactivity to cards — clicking a card will result in reversal of the top and bottom colors of the background gradient
- there doesn’t seem to be any distracting visual artifacts marking the moment when React starts and either re-renders or incorporates cards pre-rendered on the server
