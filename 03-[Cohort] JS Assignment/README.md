# 📜 Random Quote Generator

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![API](https://img.shields.io/badge/API-Integration-2ea44f?style=for-the-badge)](https://freeapi.app)

## 📝 Project Description

Random Quote Generator is a simple yet elegant web application that displays inspiring and thoughtful quotes fetched from a public API. With a clean user interface, users can generate new quotes with a single click and download their favorite quotes as images to share on social media or use as wallpapers.

## ✨ Features

- **Random Quote Generation**: Fetch and display quotes from a public API
- **Author Attribution**: Display the author of each quote
- **Image Download**: Save quotes as images with a single click
- **Dark/Light Mode Toggle**: Switch between viewing modes for comfort
- **Responsive Design**: Works well on both desktop and mobile devices
- **Auto-load**: Displays a random quote on page load

## 🛠️ Technologies Used

- **HTML5**: Structure of the web application
- **CSS3**: Styling and responsive design 
- **JavaScript**: Fetch API for data retrieval and DOM manipulation
- **External API**: Integration with freeapi.app's quote endpoint
- **html-to-image**: Library for converting HTML elements to images
- **FileSaver.js**: Library for saving files client-side
- **Google Fonts**: Custom typography for better readability

## 📋 Implementation Details

The application has several key components:

1. **API Integration**:
   - Fetches random quotes from the freeapi.app quotes endpoint
   - Processes the returned JSON data to extract quote content and author
   - Handles API responses with proper promise chaining

2. **Quote Display**:
   - Clean, minimalist interface to highlight the quote
   - Custom typography using Google Fonts (IBM Plex Mono and Poppins)
   - Author attribution below each quote

3. **Image Export Functionality**:
   - Converts the quote container to an image using html-to-image library
   - Downloads the image with a timestamped filename
   - Preserves styling and layout in the downloaded image

4. **Theme Toggle**:
   - Simple switch interface for toggling between dark and light modes
   - Improves accessibility and user preference

## 🚀 How to Use

1. Open the application in a web browser
2. A random quote will automatically load on startup
3. Click the "Generate Quote" button to fetch and display a new random quote
4. Use the toggle switch to change between dark and light modes
5. Click "Download Quote" to save the current quote as an image

## 🧩 Code Structure

- **HTML**: Defines the structure with a container for quotes, buttons, and toggle switch
- **CSS**: Provides styling for the entire application, including button animations
- **JavaScript**: Handles all functionality including:
  - API data fetching and processing
  - Quote display updates
  - Image conversion and download
  - Theme toggle functionality

## 📦 Dependencies

- [html-to-image](https://github.com/bubkoo/html-to-image): Converts HTML nodes to images
- [FileSaver.js](https://github.com/eligrey/FileSaver.js/): Client-side solution for saving files
- [Google Fonts](https://fonts.google.com/): IBM Plex Mono and Poppins font families

## 📈 Future Improvements

- Add option to share quotes directly to social media platforms
- Implement categories or tags for different types of quotes
- Create favorite quotes collection with local storage
- Add copy-to-clipboard functionality
- Implement custom background options for the quotes
- Add animations for quote transitions

## 📷 Screenshot

![random_quote_generator](<../03-[Cohort] JS Assignment/random_quote_generator.png>)

## 🔗 Live Demo

[View Live Demo](https://masterji-co-coding-challenges-hui8.vercel.app/)

## 📚 Repository

[GitHub Repository](https://github.com/gokuthecoder/random-quote-generator)

## ⚠️ API Note

This project uses the free quote API from freeapi.app. If the application fails to display quotes, it may be due to API rate limits or changes to the API structure.

---

<div align="center">
  <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-gokuthecoder-red" alt="Made with love">
  <p>This project was completed as part of the Masterji.co platform challenge.</p>
</div>
