import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

export default NativeEventSource || EventSourcePolyfill;
