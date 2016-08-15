# snapchat


#Installation for mac
Requires node and the react-native CLI to be installed globally. Also requires Xcode for the IOS emulator.

```
brew install node
npm install -g react-native-cli
```

Project is located in 'SnapChat' - index.ios.js is the entry point, everything else is in the 'App' folder.
```
cd SnapChat
npm install
```

#Running the app
```
$ npm start
```
This will run the react-native global cli 'react-native run-ios', which will boot up the emulator for IOS.
Also performs linting on file save for consistent code style/bug catching, using standardjs style for simplicity - http://standardjs.com/


#Debugging
(If chrome doesn't automatically open with the debug page open)

When the IOS emulator starts press CMD + D and press 'start remote JS debugging', which opens Chrome, open up dev tools to see console.logs.
You can also place the word debugger in the function you want to pause in, and then press CMD + R in the emulator with chrome dev tools open, and it will allow you to step through the code.
