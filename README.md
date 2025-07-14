# Simon Game

A classic memory game implementation using HTML, CSS, and JavaScript. Test your memory by following the sequence of colors and sounds!

## 🎮 How to Play

1. Press any key to start the game
2. Watch and listen to the sequence of colored buttons
3. Repeat the sequence by clicking the buttons in the correct order
4. Each level adds one more step to the sequence
5. Try to achieve the highest score possible!

## 🚀 Features

- **Progressive Difficulty**: Each level adds a new color to the sequence
- **Audio Feedback**: Each color button plays a unique sound
- **Visual Effects**: Buttons light up when pressed with shadow effects
- **High Score Tracking**: Your best score is saved locally
- **Game Over Animation**: Red flash effect when you make a mistake
- **Responsive Design**: Clean, centered layout that works on different screen sizes

## 🛠️ Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling, animations, and visual effects
- **JavaScript**: Game logic and interactions
- **jQuery**: DOM manipulation and event handling
- **Web Audio API**: Sound effects for each color

## 📁 File Structure

```
simon-game/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── game.js            # Game logic and functionality
├── sounds/            # Audio files directory
│   ├── green.mp3
│   ├── red.mp3
│   ├── yellow.mp3
│   ├── blue.mp3
│   └── wrong.mp3
└── README.md          # Project documentation
```

## 🎨 Game Elements

### Color Buttons
- **Green**: Top-left button
- **Red**: Top-right button  
- **Yellow**: Bottom-left button
- **Blue**: Bottom-right button

### Visual Feedback
- Buttons flash with a white glow when activated
- Background turns red on game over
- Level counter displays current progress
- High score tracker shows your best performance

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd simon-game
   ```

2. **Add audio files**
   Create a `sounds` folder and add the following audio files:
   - `green.mp3`
   - `red.mp3`
   - `yellow.mp3`
   - `blue.mp3`
   - `wrong.mp3`

3. **Open the game**
   - Simply open `index.html` in your web browser
   - No server setup required!

## 🎯 Game Mechanics

### Sequence Generation
- Random color selection using `Math.floor(Math.random() * 4)`
- Progressive sequence building (each level adds one more color)
- Sequence stored in `outputcolor` array

### User Input Validation
- Real-time checking of user clicks against the expected sequence
- Immediate feedback on wrong selections
- Level advancement when sequence is completed correctly

### Score System
- Level-based scoring (level = score)
- High score persistence using localStorage
- Automatic score tracking and display

## 🌟 Key Functions

- `play()`: Generates next color in sequence and plays it
- `check()`: Validates user input against expected sequence
- `playsound()`: Handles audio playback and visual effects
- `gethigh()`: Manages high score storage and display
- `restart()`: Resets game state for new game

## 🎵 Audio Requirements

The game expects the following audio files in the `sounds/` directory:
- Individual sound files for each color (green, red, yellow, blue)
- Error sound file (wrong.mp3)
- All files should be in MP3 format

## 🔄 Game Flow

1. **Start**: Press any key to begin
2. **Watch**: Observe the color sequence
3. **Repeat**: Click colors in the same order
4. **Advance**: Successfully complete sequence to move to next level
5. **Game Over**: Make a mistake and the game restarts
6. **High Score**: Beat your previous best score

## 🎨 Styling Features

- Retro arcade font (Press Start 2P)
- Dark blue background theme
- Colorful button design with rounded corners
- Smooth transitions and hover effects
- Responsive layout for different screen sizes

## 📱 Browser Compatibility

- Modern browsers with JavaScript enabled
- jQuery 3.7.1 (loaded from CDN)
- Web Audio API support required for sounds

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding new features
- Improving the UI/UX
- Optimizing code performance
- Adding difficulty levels
- Enhancing audio experience

## 📄 License

This project is open source and available under the MIT License.

---
live::::-https://rajkumar0932.github.io/simon-game-/
**Enjoy playing Simon and challenging your memory skills!** 🧠✨
