# Simple Stream Example

Quick repo to illustrate replacement behavior for `IS-DB`'s publish feature that currently utilizes socket.io.

Creating a streamed response would allow us to show messages from the server about the current operations as well as explicitly show where an error occurred.

## Usage
- Start server: `node server.js`
- Send example request: `node request.js`

## Event Example
Look at branch `event-example` for a more robust example of how this could replace the socket.io implementation.