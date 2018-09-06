declare module 'react-native-shake-event' {
  class RNShakeEvent {
    static addEventListener(type: 'shake', handler: () => void)
    static removeEventListener(type: 'shake', handler?: () => void)
  }
   export default RNShakeEvent
}