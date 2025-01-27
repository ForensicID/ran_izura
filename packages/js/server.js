const express = require('express');
const app = express();
const port = 3000;

// Simulated database
const viewsDatabase = {
    blog1: 100,
    blog2: 150,
    blog3: 200,
};

// Endpoint to get views
app.get('/api/views', (req, res) => {
    const blogId = req.query.blogId;
    const views = viewsDatabase[blogId] || 0;
    res.json({ views });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});