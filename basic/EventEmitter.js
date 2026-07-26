/**
 * Design an EventEmitter class. This interface is similar (but with some differences)
 * to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter
 * should allow for subscribing to events and emitting them. Your EventEmitter class
 * should have the following two methods:
 *  - subscribe - This method takes in two arguments: the name of an event as a string
 *    and a callback function. This callback function will later be called when the
 *    event is emitted. An event should be able to have multiple listeners for the
 *    same event. When emitting an event with multiple callbacks, each should be
 *    called in the order in which they were subscribed. An array of results should
 *    be returned. You can assume no callbacks passed to subscribe are referentially
 *    identical. The subscribe method should also return an object with an unsubscribe
 *    method that enables the user to unsubscribe. When it is called, the callback
 *    should be removed from the list of subscriptions and undefined should be returned.
 *  - emit - This method takes in two arguments: the name of an event as a string
 *    and an optional array of arguments that will be passed to the callback(s).
 *    If there are no callbacks subscribed to the given event, return an empty array.
 *    Otherwise, return an array of the results of all callback calls in the order
 *    they were subscribed.
 * 
 * Example 1:
 * Input: 
 * actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
 * values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],
 *           ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
 * Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
 * Explanation: 
 * const emitter = new EventEmitter();
 * emitter.emit("firstEvent"); // [], no callback are subscribed yet
 * emitter.subscribe("firstEvent", function cb1() { return 5; });
 * emitter.subscribe("firstEvent", function cb2() { return 6; });
 * emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
 * 
 * Constraints:
 * 1 <= actions.length <= 10
 * values.length === actions.length
 * All test cases are valid, e.g. you don't need to handle scenarios when unsubscribing
 * from a non-existing subscription.
 * There are only 4 different actions: EventEmitter, emit, subscribe, and unsubscribe.
 * The EventEmitter action doesn't take any arguments.
 * The emit action takes between either 1 or 2 arguments. The first argument is the
 * name of the event we want to emit, and the 2nd argument is passed to the callback
 * functions.
 * The subscribe action takes 2 arguments, where the first one is the event name
 * and the second is the callback function.
 * The unsubscribe action takes one argument, which is the 0-indexed order of the
 * subscription made before.
 */

class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventName, callback) {
        this.listeners[eventName] ??= [];
        let listeners = this.listeners[eventName];
        let index = listeners.length;
        listeners.push(callback);
        return {
            unsubscribe: () => {
                listeners[index] = undefined;
            }
        };
    }
    
    emit(eventName, args = []) {
        let listeners = this.listeners[eventName];
        if (!listeners) {
            return [];
        }
        let results = [];
        for (let listener of listeners) {
            if (listener) {
                results.push(listener(...args));
            }
        }
        return results;
    }
}

var main = function() {
    let emitter = new EventEmitter();
    console.log(emitter.emit("firstEvent"));
    let sub1 = emitter.subscribe("firstEvent", x => x + 1);
    let sub2 = emitter.subscribe("firstEvent", x => x + 2);
    sub1.unsubscribe();
    console.log(emitter.emit("firstEvent", [5]));
};

main();
