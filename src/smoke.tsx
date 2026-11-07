import { PassThrough } from "node:stream";
import React from "react";
import { render } from "ink";
import { App } from "./App.js";

const stdin = new PassThrough() as unknown as NodeJS.ReadStream;
stdin.isTTY = true;
stdin.setRawMode = () => {
  return stdin;
};
stdin.ref = () => stdin;
stdin.unref = () => stdin;

const { unmount, waitUntilExit } = render(<App />, {
  stdin,
  patchConsole: false,
});

setTimeout(() => {
  unmount();
}, 50);

await waitUntilExit();
console.log("smoke-ok");
