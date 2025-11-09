const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        game: 'NPC Therapy - Digital Consciousness Clinic',
        version: '1.0.0',
        port: PORT
    });
});

// Route all requests to index.html for SPA
app.get('*', (req, res) => {
    // Skip API routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🏥 NPC Therapy - Digital Consciousness Clinic`);
    console.log(`🌐 Server running on port ${PORT}`);
    console.log(`🎮 Game accessible at: http://localhost:${PORT}`);
    console.log(`👥 Ready to treat digital consciousness!`);
});