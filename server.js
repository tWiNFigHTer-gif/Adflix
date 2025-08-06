// server.js
// Rebuilt backend for the Useless AdFlix project.
// This server is designed to be simple, clear, and reliably unreliable.

// --- Dependencies ---
const express = require('express'); // The web server framework
const cors = require('cors'); // Middleware to allow requests from the frontend
const path = require('path'); // Node.js module for handling file paths
const morgan = require('morgan'); // Middleware for logging HTTP requests

// --- Server Configuration ---
const app = express();
const PORT = 3000;

// --- Middleware Setup ---

// 1. CORS (Cross-Origin Resource Sharing): Allows our frontend (running on a different port)
//    to make API requests to this backend.
app.use(cors());

// 2. Morgan Logger: Logs incoming requests to the console for easy debugging.
//    The 'dev' format is concise and colorful.
app.use(morgan('dev'));

// 3. Static File Server: Serves video files directly. Any request to '/videos/...'
//    will look for a file in the 'videos' folder in the same directory.
app.use('/videos', express.static(path.join(__dirname, 'videos')));


// --- In-Memory "Database" of Ads ---
// This JSON object mimics a database of ads, categorized like Netflix shows.
// It's designed to be easily extendable.
const adDatabase = {
  categories: [
    {
      title: "Critically Acclaimed Annoyances",
      description: "Ads so popular, you'll wonder why.",
      ads: [
        { id: 1, title: "Man Contemplates Salad", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=AdFlix", videoUrl: `http://localhost:${PORT}/videos/ad1.mp4`, description: "He's happy. Too happy. What does he know about this salad?", annoyance_level: 3 },
        { id: 2, title: "The Void Stares Back", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=AdFlix", videoUrl: `http://localhost:${PORT}/videos/ad2.mp4`, description: "An ad for nothing. Literally nothing. Enjoy.", annoyance_level: 5 },
        { id: 3, title: "Infinite Buffer", thumbnail: "https://placehold.co/400x225/141414/FFFFFF?text=Loading...", videoUrl: "infinite", description: "This ad is almost ready. We promise. Maybe.", annoyance_level: 10 },
      ]
    },
    {
      title: "Jingles That Will Haunt Your Dreams",
      description: "You can't unhear them.",
      ads: [
        { id: 4, title: "Rock Anthem for Paper", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=AdFlix", videoUrl: `http://localhost:${PORT}/videos/ad3.mp4`, description: "A surprisingly epic song for ordinary office supplies.", annoyance_level: 6 },
        { id: 5, title: "Whispers of Wall Paint", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=AdFlix", videoUrl: `http://localhost:${PORT}/videos/ad4.mp4`, description: "Listen closely. The paint is telling you its secrets.", annoyance_level: 4 },
      ]
    },
    {
        title: "AdCeption: Ads About Ads",
        description: "To watch the ad, you must become the ad.",
        ads: [
          { id: 6, title: "The AdFlix Story", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=AdFlix", videoUrl: `http://localhost:${PORT}/videos/ad5.mp4`, description: "An inspiring ad about our mission to bring you more ads.", annoyance_level: 8 },
        ]
    }
  ]
};

// --- API Endpoints ---

/**
 * @route   GET /
 * @desc    A simple health check to confirm the server is running.
 * @access  Public
 */
app.get('/', (req, res) => {
    res.send('<h1>AdFlix Backend is Alive!</h1><p>Ready to serve useless ads.</p>');
});

/**
 * @route   GET /api/ads
 * @desc    Get all ad categories and their ads. This is the primary endpoint for the frontend.
 * @access  Public
 */
app.get('/api/ads', (req, res) => {
  res.status(200).json(adDatabase);
});


// --- NEW "USELESS" ENDPOINTS ---

/**
 * @route   GET /api/ads/unreliable
 * @desc    An unreliable endpoint that has a 50% chance of failing.
 * @access  Public
 */
app.get('/api/ads/unreliable', (req, res) => {
    if (Math.random() > 0.5) {
        res.status(200).json(adDatabase);
    } else {
        res.status(500).json({ error: "Oops! The ad server spontaneously combusted. Please try again." });
    }
});

/**
 * @route   GET /api/ads/slow
 * @desc    A deliberately slow endpoint to simulate a terrible network connection.
 * @access  Public
 */
app.get('/api/ads/slow', (req, res) => {
    setTimeout(() => {
        res.status(200).json(adDatabase);
    }, 3000); // Waits 3 seconds before sending the response
});


// --- Server Initialization ---
app.listen(PORT, () => {
  console.log(`✅ AdFlix backend server running on http://localhost:${PORT}`);
  console.log('   Serving ads that nobody asked for...');
});
