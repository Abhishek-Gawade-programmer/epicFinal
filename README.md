# Chrome Extension README

## Overview

This Chrome extension is designed to enhance the browsing experience by modifying the new tab page and offering customizable options. It dynamically interacts with backend services to update the user interface based on real-time data.

## Directory and File Structure

### Root Directory

- **manifest.json**: The configuration file that defines the extension's permissions, background scripts, options page, and other key settings required by Chrome.

### HTML Directory (`html/`)

- **index.html**: The main HTML file for the new tab page. This is the page that is displayed when a user opens a new tab.
- **options.html**: The HTML file for the options page. Users can configure extension settings here.
- **images/**: Contains all the images used in the extension, including those displayed on the new tab page and the options page.

### Source Directory (`src/`)

- **background.js**: This script runs in the background and is responsible for managing background tasks, event listeners, and interactions with backend services. It handles persistent operations such as syncing data, responding to browser events, and making API calls.
- **options.js**: Contains the logic for the options page, handling the saving and loading of user preferences. It interacts with Chrome's storage API and can send data to backend services.
- **newpage.js**: This script manages the content displayed on the new tab page. It dynamically updates the content based on data fetched from backend services and user interactions.
- **imagesSet.js**: Handles image processing and management within the extension. It loads and sets images on various pages, ensuring they are displayed correctly.
- **data.json**: A JSON file that stores static or dynamic data used by the extension. This could include default settings, user preferences, or other configuration data.
- **papaparse.min.js**: A third-party library used for parsing CSV files, allowing the extension to import and handle CSV data efficiently.

### Styles Directory (`styles/`)

- **style.css**: The main CSS file that styles the new tab page and other components of the extension.
- **options.css**: Styles specific to the options page, ensuring a consistent look and feel.
- **tab/**: Contains additional CSS files used for tabbed interfaces or other specific styling needs, including `jquery.ui.all.css`, `tabs.css`, and `track_new.css`.

## How to Use the Extension in Chrome

### Installation

1. **Download or Clone the Extension**: First, download the extension files or clone the repository to your local machine.
2. **Enable Developer Mode in Chrome**: Open Chrome and navigate to `chrome://extensions/`. Toggle the "Developer mode" switch in the upper-right corner.
3. **Load the Extension**: Click "Load unpacked" and select the directory where the extension files are located. The extension will be loaded into Chrome, and you should see its icon in the toolbar.

### Using the Extension

- **New Tab Page**: Once installed, the extension will override the default new tab page. The new tab page will display content based on user settings and data fetched from backend services.
- **Options Page**: Access the options page by clicking the extension icon in the Chrome toolbar and selecting "Options." Here, you can customize settings such as the theme, display options, and more.
- **Background Processes**: The extension runs background processes to keep the data up-to-date, sync settings, and perform other tasks even when the new tab page is not open.

## Detailed Function Explanation

### `background.js`

- **Purpose**: Handles persistent tasks that need to run continuously or in response to specific events, such as fetching data from APIs, updating data in `data.json`, or listening for tab updates.
- **Key Functions**:
  - `chrome.runtime.onInstalled`: Triggered when the extension is installed or updated. It sets up initial data or configurations.
  - `chrome.alarms.onAlarm.addListener`: Used for periodic tasks like fetching new data from a backend service at regular intervals.
  - `fetchDataFromAPI()`: A custom function that makes HTTP GET requests to a specified backend endpoint to retrieve data.

### `options.js`

- **Purpose**: Manages the options page where users can adjust the extension's settings.
- **Key Functions**:
  - `saveOptions()`: Saves the user's preferences to Chrome's storage.
  - `restoreOptions()`: Loads the user's preferences when the options page is opened.
  - `sendSettingsToBackend()`: Sends updated user settings to a backend service using an HTTP POST request.

### `newpage.js`

- **Purpose**: Controls the content and behavior of the new tab page.
- **Key Functions**:
  - `initializePage()`: Sets up the initial state of the new tab page, loading any required data from `data.json` or making API calls.
  - `updatePageContent()`: Dynamically updates the content of the new tab based on real-time data fetched from the backend.
  - `handleUserInteraction()`: Captures and processes user interactions on the new tab page, such as clicks or input events.

### `imagesSet.js`

- **Purpose**: Handles the loading and management of images within the extension.
- **Key Functions**:
  - `loadImages()`: Loads images into the new tab or options page based on predefined criteria or user settings.
  - `applyImageSettings()`: Applies user-specific settings to images, such as brightness, contrast, or filters.

### `data.json`

- **Purpose**: Stores configuration data, user preferences, or other static/dynamic information used across the extension.
- **Usage**: This file can be updated by `background.js` based on data fetched from backend services, or it can store default settings for the extension.

## Interaction with Backend Services

The extension interacts with backend services to fetch and send data. These interactions are handled primarily by `background.js` and `options.js` through HTTP requests.

### Example Backend Endpoints

- **GET /api/data**: Used by `background.js` to fetch the latest data required to update the new tab page. The data is typically stored in `data.json` or directly applied to the new tab page.
- **POST /api/user-settings**: Used by `options.js` to send the user's updated preferences to a backend service. This ensures that user settings are consistent across different devices or sessions.
- **PUT /api/images**: An example endpoint where `imagesSet.js` might upload or update images based on user settings or new content.

### Security Considerations

When interacting with backend services, it is essential to consider security measures such as:

- **Authentication**: Ensure that API requests are authenticated using tokens or keys.
- **Data Validation**: Validate and sanitize data before sending it to the backend to prevent security vulnerabilities.

## Customization

To customize the extension:

1. **HTML and CSS**: Modify the `index.html` and `style.css` files to change the appearance of the new tab page or options page.
2. **JavaScript**: Update the `background.js`, `options.js`, or `newpage.js` files to add new features or modify existing functionality.
3. **Manifest.json**: Update this file to change permissions, add new background scripts, or configure additional options.

## Conclusion

This Chrome extension is a powerful tool for enhancing your browsing experience. By following this README, you should be able to install, customize, and understand the inner workings of the extension, as well as how it interacts with backend services.
