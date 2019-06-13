import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

module.exports = exports = EventSource;
exports.EventSource = EventSource;
exports.default = EventSource;
