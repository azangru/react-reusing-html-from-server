import express from 'express';
import ShowcaseData from './fixtures/showcase_provider';

const app = express();
export default app;

app.use(express.static(__dirname + '/../client/public')); // serve static files from the 'client' folder
app.use(express.static(__dirname + '/../client')); // serve static files from the 'client' folder
app.set('view engine', 'ejs'); // set rendering engine to ejs
app.set('views', __dirname + '/views') // set the directory with views


app.get('/', (req, res) => {
    res.render('index', {ShowcaseData});
});

app.listen(3000, () => console.log(`The server is listening on http://localhost:3000`));
