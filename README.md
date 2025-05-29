# Atou's Profile Website

A simple profile website displaying user "Atou" information, featuring Chatango chat widgets, YouTube video search and playback, and a friends list.

---

## Features

- User profile with photo, age, gender, and location.
- Links to Chatango chatrooms with different color theme options (default, gray, black).
- YouTube video search widget with embedded player.
- Friends list with small profile pictures and names.
- Floating windows for chat, YouTube, and friends list that can be shown or hidden.
- Controls to add and remove chatrooms dynamically.
- Rotate YouTube window for an interesting visual effect.

---

## Folder Structure

/
├── index.html       # Main webpage
├── css/
│   └── style.css    # Main stylesheet
└── js/
    └── script.js    # Main JavaScript file

---

## How to Run

1. Clone or download this repository.
2. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari).
3. Use the YouTube search box by typing keywords and clicking "Go".
4. Enter a Chatango chatroom name and click "Add Chat" to add it.
5. Click the "Show Friends" button to display the friends list.
6. Use the "×" button on each floating window to close it.

---

## Dependencies

- Internet access is required to load profile images from Chatango and to play YouTube videos.
- YouTube search uses a public API endpoint:  
  `https://toxicdevilapi.vercel.app/search/youtube?query=`

---

## Notes

- The YouTube search feature depends on an external API which may have usage limits.
- Ensure you have an active internet connection for chat widgets and video playback to work correctly.

---

## License

This project is open source and free to use for personal or educational purposes.

---

## Contact

For questions or suggestions, please contact the project creator.

---

## Thank You

Special thanks to [Agung's Chatango](https://agung.chatango.com) for inspiration and resources.
