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
// Define extra/fake ads (non-uploaded)
const extraAds = [
  { id: 7, title: "Jingle 1", thumbnail: "https://placehold.co/400x225/141414/FFFFFF?text=Jingle1", videoUrl: `http://localhost:${PORT}/videos/jingle1.mp4`, description: "A jingle you can't forget.", annoyance_level: 7 },
  { id: 8, title: "Jingle 2", thumbnail: "https://placehold.co/400x225/141414/FFFFFF?text=Jingle2", videoUrl: `http://localhost:${PORT}/videos/jingle2.mp4`, description: "Another unforgettable jingle.", annoyance_level: 7 },
  { id: 9, title: "Jingle 3", thumbnail: "https://placehold.co/400x225/141414/FFFFFF?text=Jingle3", videoUrl: `http://localhost:${PORT}/videos/jingle3.mp4`, description: "Yet another jingle.", annoyance_level: 7 },
  { id: 10, title: "Jingle 4", thumbnail: "https://placehold.co/400x225/141414/FFFFFF?text=Jingle4", videoUrl: `http://localhost:${PORT}/videos/jingle4.mp4`, description: "Jingle all the way.", annoyance_level: 7 },
  { id: 11, title: "Jingle 5", thumbnail: "https://placehold.co/400x225/141414/FFFFFF?text=Jingle5", videoUrl: `http://localhost:${PORT}/videos/jingle5.mp4`, description: "The final jingle.", annoyance_level: 7 },
  // Additional random ads from unspecified videos
  { id: 12, title: "Kukku FM Radio", thumbnail: "https://placehold.co/400x225/FF6B35/FFFFFF?text=Kukku+FM", videoUrl: `http://localhost:${PORT}/videos/kukku fm.mp4`, description: "Your favorite radio station advertisement.", annoyance_level: 6 },
  { id: 13, title: "Snickers Satisfaction", thumbnail: "https://placehold.co/400x225/8B4513/FFFFFF?text=Snickers", videoUrl: `http://localhost:${PORT}/videos/Snickers.mp4`, description: "You're not you when you're hungry.", annoyance_level: 5 },
  { id: 14, title: "Vanamala Washing Soap", thumbnail: "https://placehold.co/400x225/87CEEB/FFFFFF?text=Vanamala", videoUrl: `http://localhost:${PORT}/videos/Vanamala Washing Soap.mp4`, description: "Clean clothes, clean conscience.", annoyance_level: 4 },
  { id: 15, title: "Vinsmera Commercial", thumbnail: "https://placehold.co/400x225/9932CC/FFFFFF?text=Vinsmera", videoUrl: `http://localhost:${PORT}/videos/Vinsmera.mp4`, description: "The mysterious product you never knew you needed.", annoyance_level: 7 }
];
app.use(morgan('dev'));

// 3. Static File Server: Serves video files directly. Any request to '/videos/...'
//    will look for a file in the 'videos' folder in the same directory.
app.use('/videos', express.static(path.join(__dirname, 'videos')));



// --- In-Memory "Database" of Ads ---
const baseCategories = [
  {
    title: "Critically Acclaimed Annoyances",
    description: "Ads so popular, you'll wonder why.",
    ads: [
      { id: 1, title: "Man Contemplates Salad", thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fbusiness%2Findia-business%2Fasian-paints-faces-cci-probe-on-mkt-abuse-charges%2Farticleshow%2F122194173.cms&psig=AOvVaw1oaun1bwjihxvDA0IUI1sJ&ust=1754767023420000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLje6uH2-44DFQAAAAAdAAAAABAE", videoUrl: `http://localhost:${PORT}/videos/ad1.mp4`, description: "He's happy. Too happy. What does he know about this salad?", annoyance_level: 2 },
      { id: 2, title: "The Void Stares Back", thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.icecream.com%2Fus%2Fen%2Fbrands%2Foreo%2Fproducts%2Foreo-frozen-dessert-sandwich-singles&psig=AOvVaw0z7P6g5QqQw-klkwsxZfcK&ust=1754767150123000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLD72Jf3-44DFQAAAAAdAAAAABAL", videoUrl: `http://localhost:${PORT}/videos/ad2.mp4`, description: "An ad for nothing. Literally nothing. Enjoy.", annoyance_level: 5 }
    ]
  },
  {
    title: "Jingles That Will Haunt Your Dreams",
    description: "You can't unhear them.",
    ads: [
      { id: 4, title: "Rock Anthem for Paper", thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fbusiness%2Findia-business%2Fasian-paints-faces-cci-probe-on-mkt-abuse-charges%2Farticleshow%2F122194173.cms&psig=AOvVaw1oaun1bwjihxvDA0IUI1sJ&ust=1754767023420000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLje6uH2-44DFQAAAAAdAAAAABAE", videoUrl: `http://localhost:${PORT}/videos/ad3.mp4`, description: "A surprisingly epic song for ordinary office supplies.", annoyance_level: 9},
      { id: 5, title: "Whispers of Wall Paint", thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jiomart.com%2Fp%2Fgroceries%2Fcadbury-five-star-home-treats-chocolate-bar-200-g%2F491186918&psig=AOvVaw1DC7uiZIxx5FzHDWmeYSnR&ust=1754767454484000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDk_rf4-44DFQAAAAAdAAAAABAE", videoUrl: `http://localhost:${PORT}/videos/ad4.mp4`, description: "Listen closely. The paint is telling you its secrets.", annoyance_level: 7 }
    ]
  },
  {
    title: "Ads About Ads",
    description: "To watch the ad, you must become the ad.",
    ads: [
      { id: 6, title: "The AdFlix Story", thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.swadeshsquare.com%2Fproducts%2Fcenter-fruit-fruits-flavour-pack-of-20&psig=AOvVaw16WIdFdaTQ4mhq6zuWiSFo&ust=1754767648280000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiDg4T5-44DFQAAAAAdAAAAABAM", videoUrl: `http://localhost:${PORT}/videos/ad6.mp4`, description: "An inspiring ad about our mission to bring you more ads.", annoyance_level: 8 }
    ]
  }
];

function getRandomExtraAds(count) {
  // Shuffle and pick 'count' random extra ads
  const shuffled = extraAds.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomizedCategories() {
  // For each category, add 1-2 random extra ads
  return baseCategories.map(category => {
    const extraCount = Math.floor(Math.random() * 2) + 1; // 1 or 2
    const randomExtras = getRandomExtraAds(extraCount);
    return {
      ...category,
      ads: [...category.ads, ...randomExtras]
    };
  });
}

// --- API Endpoints ---

/**
 * @route   GET /
 * @desc    A simple health check to confirm the server is running.
 * @access  Public
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend.html'));
});

/**
 * @route   GET /api/ads
 * @desc    Get all ad categories and their ads. This is the primary endpoint for the frontend.
 * @access  Public
 */
app.get('/api/ads', (req, res) => {
  const randomizedCategories = getRandomizedCategories();
  res.status(200).json({ categories: randomizedCategories });
});

/**
 * @route   GET /api/random-ad
 * @desc    Get a random ad from all available ads (for playing after each ad)
 * @access  Public
 */
app.get('/api/random-ad', (req, res) => {
  // Combine all ads from base categories and extra ads
  const allAds = [];
  baseCategories.forEach(category => {
    allAds.push(...category.ads);
  });
  allAds.push(...extraAds);
  
  // Return a random ad
  const randomAd = allAds[Math.floor(Math.random() * allAds.length)];
  res.status(200).json(randomAd);
});

// --- NEW "USELESS" ENDPOINTS ---

/**
 * @route   GET /api/ads/unreliable
 * @desc    An unreliable endpoint that has a 50% chance of failing.
 * @access  Public
 */
app.get('/api/ads/unreliable', (req, res) => {
    if (Math.random() > 0.5) {
        const randomizedCategories = getRandomizedCategories();
        res.status(200).json({ categories: randomizedCategories });
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
        const randomizedCategories = getRandomizedCategories();
        res.status(200).json({ categories: randomizedCategories });
    }, 3000); // Waits 3 seconds before sending the response
});


// --- Server Initialization ---
app.listen(PORT, () => {
  console.log(`✅ AdFlix backend server running on http://localhost:${PORT}`);
  console.log('   Serving ads that nobody asked for...');
});
