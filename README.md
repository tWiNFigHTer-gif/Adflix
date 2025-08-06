# AdFlix - Endless Ads, Zero Content

A satirical streaming platform that serves nothing but advertisements. Built as a parody of modern streaming services where the ads have become the content.

## 🎭 Features

- **Infinite Ad Streaming**: Watch ads continuously with no actual content
- **AdCoin Rewards**: Earn virtual currency for watching ads
- **Smile Detection**: AI-powered smile detection to ensure you're "enjoying" the ads
- **AdCeption**: Meta-ads about ads for maximum advertising experience
- **Popup Mayhem**: Annoying popups that multiply when you try to close them
- **Infinite Buffer**: Some ads never actually load (by design)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tWiNFigHTer-gif/Adflix.git
cd Adflix
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open `frontend.html` in your browser

### Adding Video Content

Place your video files in the `videos/` directory:
- ad1.mp4 - "Man Contemplates Salad"
- ad2.mp4 - "The Void Stares Back"
- ad3.mp4 - "Rock Anthem for Paper"
- ad4.mp4 - "Whispers of Wall Paint"
- ad5.mp4 - "The AdFlix Story"

## 🛠 Technical Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **AI Features**: Face-api.js for smile detection
- **Styling**: Netflix-inspired dark theme

## 📁 Project Structure

```
adflix/
├── frontend.html          # Main application interface
├── server.js             # Express backend server
├── package.json          # Node.js dependencies
├── videos/               # Video files directory
│   └── README.md         # Instructions for video files
└── .gitignore           # Git ignore rules
```

## 🎯 API Endpoints

- `GET /` - Health check
- `GET /api/ads` - Get all ad categories
- `GET /api/ads/unreliable` - Unreliable endpoint (50% failure rate)
- `GET /api/ads/slow` - Deliberately slow endpoint (3s delay)
- `GET /videos/*` - Static video file serving

## 🎨 Configuration

Edit the `CONFIG` object in `frontend.html` to customize features:

```javascript
const CONFIG = {
    USE_WEBCAM_FEATURE: true, // Enable/disable smile detection
    API_URL: 'http://localhost:3000/api/ads',
    FACEAPI_MODEL_URL: 'https://cdn.jsdelivr.net/...'
};
```

## 🤡 The Joke

This project is a satirical take on the modern streaming experience where:
- Skip buttons make ads longer
- Close buttons spawn more popups
- AI forces you to smile to watch ads
- The "content" IS the advertisements

## 📜 License

This project is for educational and entertainment purposes only.

## 🚨 Disclaimer

This is a parody project. No actual streaming service was harmed in the making of this application.
