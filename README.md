![react-native-shake-event](https://cdn.rawgit.com/jadsonlourenco/react-native-shake-event/master/media/promo.jpg)

[![npm package](https://img.shields.io/npm/v/react-native-shake-event.svg?style=flat-square)](https://www.npmjs.org/package/react-native-shake-event)
[![react-native channel on discord](https://img.shields.io/badge/discord-react--native%40reactiflux-738bd7.svg?style=flat-square)](https://discord.gg/0ZcbPKXt5bXsb3os)

Add the shake event on your React Native app, giving to users improved usability. Enjoy!
*(works only on real device)*

## Demo
<img src="https://cdn.rawgit.com/jadsonlourenco/react-native-shake-event/master/media/demo.gif" width="480" height="270" alt="react-native-shake-event">


## Install

```
$ npm install react-native-shake-event --save
```

### iOS

##### Automatic

`react-native link react-native-shake-event`

##### Manual

1. Add the `RNShakeEvent.xcodeproj` file to your Xcode project [Demo](https://facebook.github.io/react-native/img/AddToLibraries.png);
2. Add the `Products/libRNShakeEvent.a` file to **Build Phases**  [Demo](https://facebook.github.io/react-native/img/AddToBuildPhases.png).

This step is described here: [Linking Libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content).

### Android

`react-native link react-native-shake-event`

## Usage

```
import RNShakeEvent from 'react-native-shake-event';

class MyComponent extends React.Component {
  componentWillMount() {
    RNShakeEvent.addEventListener('shake', () => {
      console.log('Device shake!');
    });
  }

  componentWillUnmount() {
    RNShakeEvent.removeEventListener('shake');
  }
}
```

## API

### RNShakeEvent

#### addEventListener('shake', Function)
Start listening the shake event and handle a callback function.

#### removeEventListener('shake', Function)
Stop to listening the shake event, and is recommended to prevent memory leak.

## Issues
1. On *debug mode* this event also handle the **DevMenu**, but works fine on *production*.  
2. [Submit here](https://github.com/jadsonlourenco/react-native-shake-event/issues);

## License

MIT
