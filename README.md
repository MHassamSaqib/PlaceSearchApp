React Native Place Search App
A mobile application built with React Native that allows users to search for locations using Google Maps Places API, view them on a map, and save search history for quick access.
Features

Search locations with instant suggestions via Google Maps Places API.
Show selected locations on a map with markers displaying name and address.
Save and view recent searches using local storage.
Revisit past searches by selecting them from the history list.
User-friendly interface optimized for iOS and Android.

Project Structure
├── App.js                 # Main app entry point
├── components/           # UI components
│   ├── MapComponent.js   # Displays the map and markers
│   ├── SearchComponent.js# Handles search input and suggestions
│   ├── HistoryComponent.js# Shows search history
├── context/              # State management
│   ├── PlaceContext.js   # Manages location data
├── .env                  # Stores API key
├── README.md             # Project guide

Prerequisites

Node.js (version 14 or higher)
React Native CLI
Android Studio or Xcode for emulators
Google Maps API key with Places API and Maps SDK enabled

Setup Guide

Clone the Project  
git clone <repository-url>
cd <project-folder>


Install Dependencies  
npm install


Add Required Libraries  
npm install react-native-maps @react-native-async-storage/async-storage react-native-config


Set Up API Key  

Create a .env file in the root:  GOOGLE_MAPS_API_KEY=your-api-key-here


Get an API key from Google Cloud Console.


Android Configuration  

Edit android/app/src/main/AndroidManifest.xml:  <application>
  <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="your-api-key-here"/>
</application>


Add google-services.json to android/app/ if needed.


iOS Configuration  

Modify ios/<YourAppName>/AppDelegate.m:  #import <GoogleMaps/GoogleMaps.h>
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [GMSServices provideAPIKey:@"your-api-key-here"];
  // Other code
}


Update ios/<YourAppName>/Info.plist:  <key>NSLocationWhenInUseUsageDescription</key>
<string>Location access is needed to display places on the map</string>




Run the App  
npx react-native run-android
# or
npx react-native run-ios



Dependencies

react-native-maps: For map rendering.
@react-native-async-storage/async-storage: For saving search history.
react-native-config: For handling environment variables.

Notes

Search history stores up to 10 recent searches for efficiency.
Uses React Context for state management.
Includes error handling for API and storage operations.
Interface is smooth and responsive on both platforms.

Troubleshooting

Confirm API key has Places API and Maps SDK enabled.
Check internet connection for API requests.
Verify react-native-maps setup (refer to official docs).
Ensure .env is set up and not in .gitignore.

Contributing
Feel free to contribute! Fork the repo, create a branch, and submit a pull request with your changes.
