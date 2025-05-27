console.log("Getting started with event");


/*
1. Event Registration: attachEvent vs. addEventListener
1.1. attachEvent (IE≤8)

element.attachEvent(eventName, handler);
// e.g. element.attachEvent('onclick', handler);

When to use
‑ Only in legacy IE (versions 5–8).
‑ Automatically prepends “on” (so you say "onclick" not "click").

Drawbacks

No capturing phase: all handlers run in bubbling order only.

this binding: inside your handler, this always points to the global window, not the element.

Duplicate handlers: you can attach the same function multiple times and it will fire repeatedly.

No ability to remove by reference if you didn’t keep a handle.

1.2. addEventListener (Standard, all modern browsers)

element.addEventListener(type, handler, /* useCapture = */ false);
// e.g. element.addEventListener('click', handler, true);

/*
Advantages

Supports both capturing and bubbling (via the useCapture boolean, or options object).

this inside handler correctly refers to the element on which you registered.

Safe removal: removeEventListener(type, handler, useCapture) works predictably.

Avoids cross‑pollution: it doesn’t implicitly share handlers across elements.

Recommendation: for any new code, always use addEventListener. Use a small compatibility shim if you need to support IE8 (e.g., check if addEventListener exists, otherwise fall back to attachEvent).

2. The Event Object: Key Properties
When your handler runs, it receives an Event object that tells you what happened. Below are the properties you listed—some are IE‑specific, some standard:

| Property                        | Description                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------- |
| `type`                          | A string like `"click"` or `"keydown"`.                                       |
| `timeStamp`                     | A high‑resolution timestamp (ms since page load) when the event was created.  |
| `defaultPrevented`              | Boolean; `true` if `event.preventDefault()` was called.                       |
| `target`                        | The **actual** element on which the event occurred (always standard).         |
| `srcElement`                    | IE’s old name for `target`.                                                   |
| `currentTarget`                 | The element whose handler is running right now (useful during propagation).   |
| `toElement`                     | IE‑only for mouse events: the element the pointer moved **to** (mouseenter).  |
| `clientX`, `clientY`            | Coordinates relative to the **viewport’s** top‑left corner.                   |
| `screenX`, `screenY`            | Coordinates relative to the **physical screen**’s top‑left (multi‑monitor!).  |
| `altKey`, `ctrlKey`, `shiftKey` | Booleans indicating whether those modifier keys were held.                    |
| `keyCode`                       | For keyboard events: numeric code of the key pressed (deprecated; use `key`). |


2.1. Standard vs. IE Aliases

function handler(e) {
  // Cross‑browser target:
  var target = e.target || e.srcElement;

  // did someone call preventDefault()?
  if (e.defaultPrevented) {
    console.log('Default action prevented.');
  }

  console.log('Event type:', e.type);
  console.log('Coordinates:', e.clientX, e.clientY);
}


3. Event Propagation: Capturing vs. Bubbling
The DOM defines a three‑phase event flow:

Capturing phase
The event travels down the tree from window → document → ancestors → … → the target element.

Target phase
The event “arrives” at the target element; handlers registered without capture (i.e. in bubbling mode) also fire here.

Bubbling phase
The event then travels up the tree from the target → its parent → … → document → window.

window
  └ document
      └ html
          └ body
              └ #container
                  └ #target


                  Capturing handlers (useCapture = true): fire on the way down, before the target.

Bubbling handlers (useCapture = false): fire on the way up, after the target.

Note: IE’s attachEvent only supported bubbling under the hood—you could not register capturing handlers at all.

3.1. Stopping Propagation

function stopIt(e) {
  // Prevent further propagation in *both* phases:
  e.stopImmediatePropagation();  // stops all others on same element
  e.stopPropagation();           // stops further bubbling or capturing
}

3.2. Example: Delegation with Bubbling

<ul id="menu">
  <li data-action="new">New</li>
  <li data-action="open">Open</li>
  <li data-action="save">Save</li>
</ul>

<script>
  // Attach a single handler to the UL, catch clicks on any LI
  document.getElementById('menu')
    .addEventListener('click', function(e) {
      var li = e.target;
      if (li.tagName === 'LI') {
        console.log('Menu action:', li.dataset.action);
      }
    }, false /* bubbling */);
    /*
</script>

4. “Behind the Hood”
Registration

addEventListener stores your handler and metadata (type, capture flag) in an internal list on the element.

attachEvent did the same but only for bubbling, and coerced this back to window.

Event Dispatch

Browser’s event dispatcher builds a list of all ancestors from window down to the target.

It first invokes any matching capturing handlers in ancestor order; then target handlers; then matching bubbling handlers in reverse ancestor order.

Event Object Creation

A fresh Event object is created once, properties populated (coordinates, target, timestamp).

That object is passed by reference to every handler; mutations (e.g. stopPropagation) are honored downstream.


When & How to Use

Modern code:
el.addEventListener('click', handler, { capture: false /* or true */ });
/*
Legacy IE fallback:
if (el.addEventListener) {
  el.addEventListener('click', handler, false);
} else if (el.attachEvent) {
  el.attachEvent('onclick', function(){
    handler.call(el, window.event);
  });
}

Choose capture only when you need to intercept events before other inner elements see them (rare).

Default (bubbling) is great for delegation patterns: attach high‑level handlers and catch events from many children.
*/