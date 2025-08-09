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
const PORT = process.env.PORT || 3000;

// --- Middleware Setup ---

// 1. CORS (Cross-Origin Resource Sharing): Allows our frontend (running on a different port)
//    to make API requests to this backend.
app.use(cors());

// 2. Morgan Logger: Logs incoming requests to the console for easy debugging.
//    The 'dev' format is concise and colorful.
// No extra ads array needed - all ads are defined in baseCategories
app.use(morgan('dev'));

// 3. Static File Server: Serves video files directly. Any request to '/videos/...'
//    will look for a file in the 'videos' folder in the same directory.
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// --- Helper Functions ---
// Get the base URL for video links (development vs production)
function getBaseUrl(req) {
  if (process.env.NODE_ENV === 'production') {
    return `${req.protocol}://${req.get('host')}`;
  }
  return `http://localhost:${PORT}`;
}

// --- In-Memory "Database" of Ads ---
const baseCategories = [
  {
    title: "Critically Acclaimed Annoyances",
    description: "Ads so popular, you'll wonder why.",
    section: 1,
    unlockCost: 0,
    ads: [
      // Your local video collection with fun names
      { id: 1, title: "Ad Attack", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=Ad+Attack", videoUrl: `http://localhost:${PORT}/videos/ad1.mp4`, description: "Your own custom ad content.", annoyance_level: 3 },
      { id: 2, title: "Stream Spam", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=Stream+Spam", videoUrl: `http://localhost:${PORT}/videos/ad2.mp4`, description: "Another custom ad from your collection.", annoyance_level: 4 },
      { id: 3, title: "Commercial Crush", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=Commercial+Crush", videoUrl: `http://localhost:${PORT}/videos/ad3.mp4`, description: "Custom advertising excellence.", annoyance_level: 2 },
      { id: 4, title: "Promo Parade", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=Promo+Parade", videoUrl: `http://localhost:${PORT}/videos/ad4.mp4`, description: "More local ad content.", annoyance_level: 5 },
      { id: 5, title: "Binge Break", thumbnail: "https://placehold.co/400x225/E50914/FFFFFF?text=Binge+Break", videoUrl: `http://localhost:${PORT}/videos/ad6.mp4`, description: "Your premium local content.", annoyance_level: 3 },
      { id: 6, title: "Ad Avalanche", thumbnail: "https://placehold.co/400x225/8B4513/FFFFFF?text=Ad+Avalanche", videoUrl: `http://localhost:${PORT}/videos/Snickers.mp4`, description: "You're not you when you're hungry.", annoyance_level: 4 },
      { id: 7, title: "Teaser Terror", thumbnail: "https://placehold.co/400x225/87CEEB/FFFFFF?text=Teaser+Terror", videoUrl: `http://localhost:${PORT}/videos/Vanamala Washing Soap.mp4`, description: "Clean clothes, clean conscience.", annoyance_level: 3 },
      { id: 8, title: "Spot Storm", thumbnail: "https://placehold.co/400x225/9932CC/FFFFFF?text=Spot+Storm", videoUrl: `http://localhost:${PORT}/videos/Vinsmera.mp4`, description: "The mysterious product you never knew you needed.", annoyance_level: 4 }
    ]
  },
  // Second Section - Unlocks at 10 coins
  {
    title: "Jingles That Will Haunt Your Dreams",
    description: "🔓 Unlocked with 10 AdCoins! You can't unhear them.",
    section: 2,
    unlockCost: 10,
    ads: [
      // Your local jingle collection with fun names
      { id: 9, title: "Break Bomb", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Break+Bomb", videoUrl: `http://localhost:${PORT}/videos/jingle1.mp4`, description: "A jingle you can't forget.", annoyance_level: 7 },
      { id: 10, title: "Pause Plague", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Pause+Plague", videoUrl: `http://localhost:${PORT}/videos/jingle2.mp4`, description: "Another unforgettable jingle.", annoyance_level: 6 },
      { id: 11, title: "Jingle Jungle", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Jingle+Jungle", videoUrl: `http://localhost:${PORT}/videos/jingle3.mp4`, description: "Yet another jingle.", annoyance_level: 8 },
      { id: 12, title: "Melody Mayhem", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Melody+Mayhem", videoUrl: `http://localhost:${PORT}/videos/jingle4.mp4`, description: "Jingle all the way.", annoyance_level: 9 },
      { id: 13, title: "Tune Tornado", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Tune+Tornado", videoUrl: `http://localhost:${PORT}/videos/jingle5.mp4`, description: "The final jingle.", annoyance_level: 8 },
      { id: 14, title: "Radio Rampage", thumbnail: "https://placehold.co/400x225/FF6B35/000000?text=Radio+Rampage", videoUrl: `http://localhost:${PORT}/videos/kukku fm.mp4`, description: "Your favorite radio station advertisement.", annoyance_level: 6 }
    ]
  },
  // Third Section - Unlocks at 35 coins
  {
    title: "Ads About Ads",
    description: "🔓 Unlocked with 35 AdCoins! To watch the ad, you must become the ad.",
    section: 3,
    unlockCost: 35,
    ads: [
      { id: 6, title: "The AdFlix Story", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=AdFlix+Meta", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", description: "An inspiring ad about our mission to bring you more ads.", annoyance_level: 8 },
      // High-annoyance local videos
      { id: 31, title: "Local Ad 4", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=Local+Ad4", videoUrl: `http://localhost:${PORT}/videos/ad4.mp4`, description: "More local ad content.", annoyance_level: 5 },
      { id: 15, title: "Vinsmera Commercial", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=Vinsmera", videoUrl: `http://localhost:${PORT}/videos/Vinsmera.mp4`, description: "The mysterious product you never knew you needed.", annoyance_level: 9 }
    ]
  },
  // Additional premium sections
  {
    title: "Premium Annoyance Collection",
    description: "🔓 Unlocked with 20 AdCoins! Even more sophisticated irritation.",
    section: 4,
    unlockCost: 20,
    ads: [
      { id: 16, title: "Luxury Toilet Paper Saga", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Luxury+TP", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", description: "A 3-part epic about premium bathroom tissue.", annoyance_level: 8 },
      { id: 17, title: "Emotional Journey of a Spoon", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Spoon+Story", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", description: "Follow the life-changing story of cutlery.", annoyance_level: 6 }
    ]
  },
  {
    title: "Celebrity Endorsement Nightmares",
    description: "🔓 Famous people selling things they probably never use.",
    section: 4,
    unlockCost: 20,
    ads: [
      { id: 18, title: "Actor Loves Generic Brand", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Celebrity+Ad", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", description: "Definitely not paid acting. Definitely genuine emotion.", annoyance_level: 7 },
      { id: 19, title: "Influencer's Breakfast Drama", thumbnail: "https://placehold.co/400x225/FFD700/000000?text=Breakfast+Drama", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", description: "Watch someone get way too excited about cereal.", annoyance_level: 5 }
    ]
  },
  {
    title: "Ultra Mega Premium Chaos",
    description: "🔓 Unlocked with 50 AdCoins! The final frontier of advertising hell.",
    section: 5,
    unlockCost: 50,
    ads: [
      { id: 20, title: "The AdFlix Documentary", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=Documentary", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", description: "A documentary about making ads about ads.", annoyance_level: 10 },
      { id: 21, title: "Inception Ad", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=Ad+Inception", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", description: "An ad within an ad within an ad. We need to go deeper.", annoyance_level: 9 }
    ]
  },
  {
    title: "Exclusive VIP Torment",
    description: "🔓 The most exclusive ads money can't buy.",
    section: 5,
    unlockCost: 50,
    ads: [
      { id: 22, title: "The Secret Menu Ad", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=Secret+Menu", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", description: "An ad for things that don't exist on any menu.", annoyance_level: 8 },
      { id: 23, title: "Time Travel Cleaning Products", thumbnail: "https://placehold.co/400x225/8A2BE2/FFFFFF?text=Time+Travel", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4", description: "Clean your past mistakes with future technology.", annoyance_level: 10 }
    ]
  }
];

function getRandomizedCategories(userCoins = 0, baseUrl = '') {
  // Determine which sections are unlocked based on coins
  const unlockedSections = [1]; // Section 1 is always unlocked
  if (userCoins >= 10) {
    unlockedSections.push(2); // Jingles That Will Haunt Your Dreams
  }
  if (userCoins >= 20) {
    unlockedSections.push(4); // Premium sections
  }
  if (userCoins >= 35) {
    unlockedSections.push(3); // Ads About Ads
  }
  if (userCoins >= 50) {
    unlockedSections.push(5); // Ultra premium sections
  }
  
  // Filter categories based on unlocked sections and update video URLs
  return baseCategories.filter(category => {
    return unlockedSections.includes(category.section);
  }).map(category => ({
    ...category,
    ads: category.ads.map(ad => ({
      ...ad,
      videoUrl: ad.videoUrl.includes('localhost') ? 
        ad.videoUrl.replace(/http:\/\/localhost:\d+/, baseUrl) : 
        ad.videoUrl
    }))
  }));
}

// --- API Endpoints ---

/**
 * @route   GET /
 * @desc    A simple health check to confirm the server is running.
 * @access  Public
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * @route   GET /api/ads
 * @desc    Get all ad categories and their ads. This is the primary endpoint for the frontend.
 * @query   coins - Number of AdCoins the user has (for section unlocking)
 * @access  Public
 */
app.get('/api/ads', (req, res) => {
  const userCoins = parseInt(req.query.coins) || 0;
  const baseUrl = getBaseUrl(req);
  const randomizedCategories = getRandomizedCategories(userCoins, baseUrl);
  res.status(200).json({ categories: randomizedCategories });
});

/**
 * @route   GET /api/random-ad
 * @desc    Get a random ad from all available ads (for playing after each ad)
 * @query   coins - Number of AdCoins the user has (for section filtering)
 * @access  Public
 */
app.get('/api/random-ad', (req, res) => {
  const userCoins = parseInt(req.query.coins) || 0;
  const baseUrl = getBaseUrl(req);
  
  // Get ads for the playing loop based on annoyance levels and coin thresholds
  const loopAds = getLoopAds(userCoins, baseUrl);
  
  // Return a random ad from the loop
  const randomAd = loopAds[Math.floor(Math.random() * loopAds.length)];
  res.status(200).json(randomAd);
});

/**
 * @route   GET /api/loop-ads
 * @desc    Get all ads that should be in the playing loop based on user's coins
 * @query   coins - Number of AdCoins the user has
 * @access  Public
 */
app.get('/api/loop-ads', (req, res) => {
  const userCoins = parseInt(req.query.coins) || 0;
  const baseUrl = getBaseUrl(req);
  const loopAds = getLoopAds(userCoins, baseUrl);
  res.status(200).json({ ads: loopAds, count: loopAds.length });
});

function getLoopAds(userCoins = 0, baseUrl = '') {
  const loopAds = [];
  
  // Helper function to fix video URLs
  const fixVideoUrl = (ad) => ({
    ...ad,
    videoUrl: ad.videoUrl.includes('localhost') ? 
      ad.videoUrl.replace(/http:\/\/localhost:\d+/, baseUrl) : 
      ad.videoUrl
  });
  
  // Rule 1: Always include ads with annoyance < 5 from "Critically Acclaimed Annoyances"
  const criticallyAcclaimedCategory = baseCategories.find(cat => cat.title === "Critically Acclaimed Annoyances");
  if (criticallyAcclaimedCategory) {
    criticallyAcclaimedCategory.ads.forEach(ad => {
      if (ad.annoyance_level < 5) {
        loopAds.push(fixVideoUrl(ad));
      }
    });
  }
  
  // Rule 2: At 10+ coins, include ads with annoyance < 8 from "Jingles That Will Haunt Your Dreams"
  if (userCoins >= 10) {
    const jinglesCategory = baseCategories.find(cat => cat.title === "Jingles That Will Haunt Your Dreams");
    if (jinglesCategory) {
      jinglesCategory.ads.forEach(ad => {
        if (ad.annoyance_level < 8) {
          loopAds.push(fixVideoUrl(ad));
        }
      });
    }
  }
  
  // Rule 3: At 35+ coins, include ads with annoyance >= 8 from "Jingles That Will Haunt Your Dreams"
  if (userCoins >= 35) {
    const jinglesCategory = baseCategories.find(cat => cat.title === "Jingles That Will Haunt Your Dreams");
    if (jinglesCategory) {
      jinglesCategory.ads.forEach(ad => {
        if (ad.annoyance_level >= 8) {
          loopAds.push(fixVideoUrl(ad));
        }
      });
    }
    
    // Also include "Ads About Ads" section
    const adsAboutAdsCategory = baseCategories.find(cat => cat.title === "Ads About Ads");
    if (adsAboutAdsCategory) {
      adsAboutAdsCategory.ads.forEach(ad => {
        loopAds.push(fixVideoUrl(ad));
      });
    }
  }
  
  return loopAds;
}

/**
 * @route   POST /api/watch-complete
 * @desc    Award coins for successfully watching an ad
 * @body    { adId: number, watchTime: number }
 * @access  Public
 */
app.post('/api/watch-complete', express.json(), (req, res) => {
  const { adId, watchTime } = req.body;
  
  // Validate that the ad was actually watched (at least 5 seconds)
  if (!adId || !watchTime || watchTime < 5) {
    return res.status(400).json({ 
      error: "Invalid watch data", 
      coinsAwarded: 0 
    });
  }
  
  // Award 2 coins for successfully watching an ad
  const coinsAwarded = 2;
  
  res.status(200).json({ 
    message: "Ad watch completed successfully!",
    coinsAwarded: coinsAwarded,
    adId: adId
  });
});

// --- NEW "USELESS" ENDPOINTS ---

/**
 * @route   GET /api/ads/unreliable
 * @desc    An unreliable endpoint that has a 50% chance of failing.
 * @access  Public
 */
app.get('/api/ads/unreliable', (req, res) => {
    if (Math.random() > 0.5) {
        const baseUrl = getBaseUrl(req);
        const randomizedCategories = getRandomizedCategories(0, baseUrl);
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
        const baseUrl = getBaseUrl(req);
        const randomizedCategories = getRandomizedCategories(0, baseUrl);
        res.status(200).json({ categories: randomizedCategories });
    }, 3000); // Waits 3 seconds before sending the response
});


// --- Server Initialization ---
app.listen(PORT, () => {
  console.log(`✅ AdFlix backend server running on http://localhost:${PORT}`);
  console.log('   Serving ads that nobody asked for...');
});
