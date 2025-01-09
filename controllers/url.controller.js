const shortid = require('shortid');
const URL = require('../models/url.model');

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: 'Url is required'});
    }
    const shortID = shortid.generate();
    await URL.create({
        shortId : shortID, 
        originalUrl: body.url, 
        views: [],
          // Store user ID if logged in, otherwise null or a guest identifier
          createdBy: req.user ? req.user._id : null  
    }); 
        
        return res.render("home" ,{id : shortID} );
}
 
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    try {
        const result = await URL.findOne({ shortId });
        
        // Check if the URL was found
        if (!result) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Return the analytics (views data)
        return res.json({
            totalClicks: result.views.length,
            analytics: result.views
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return res.status(500).json({ error: 'Failed to fetch analytics' });
    }
}

module.exports = {
    handleGenerateShortUrl,
    handleGetAnalytics

};