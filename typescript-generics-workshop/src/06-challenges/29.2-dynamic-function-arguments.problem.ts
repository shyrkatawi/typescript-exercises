interface Events {
  click: {
    x: number;
    y: number;
  };
  focus: undefined;
}

export const sendEvent = (event: keyof Events, ...args: any[]) => {
  // Send the event somewhere!
};


// @ts-expect-error
sendEvent("click");

sendEvent("click", {
  // @ts-expect-error
  x: "oh dear",
});

sendEvent(
  "click",
  // @ts-expect-error
  {
    y: 1,
  }
);

sendEvent("click", {
  x: 1,
  y: 2,
});


sendEvent("focus");

sendEvent(
  "focus",
  // @ts-expect-error
  {}
);
