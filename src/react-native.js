import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

exports = EventSource;
exports.default = EventSource;
exports.EventSource = EventSource;
module.exports = exports;
