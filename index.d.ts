/// <reference lib="dom" />

declare const _EventSource: typeof EventSource;

declare module 'cross-eventsource' {
    export const EventSource: typeof _EventSource;
    export default EventSource;
}
