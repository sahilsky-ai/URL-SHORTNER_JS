const express = require('express');
const connectMongoDB  = require('./connection');
const URL = require('./models/url.model');
const Path = require('path');
const cookieParser = require('cookie-parser');
const {authMiddleware, checkAuth} = require('./middleware/auth.middleware');

const urlRoute = require('./routes/url.route');
const userRoute = require('./routes/user.route');
const staticRoute = require('./routes/staticRouter');


const app = express();
const PORT = 8001;

connectMongoDB('mongodb://localhost:27017/short-Url')
 .then(() => console.log('Connected to MongoDB'));

app.set('view engine', 'ejs');
app.set("views", Path.resolve("./views"));



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(Path.join(__dirname, 'public')));
app.use(cookieParser());

app.use("/url", authMiddleware, urlRoute);
app.use("/user", checkAuth, userRoute);
app.use("/", checkAuth, staticRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId }, 
            { $push: { views: { timestamp: Date.now() } } }
        );
        
        if (!entry) {
            return res.status(404).send('Short URL not found');
        }
        
        res.redirect(entry.originalUrl);
    } catch (error) {
        console.error('Error handling redirect:', error);
        res.status(500).send('Server error');
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});