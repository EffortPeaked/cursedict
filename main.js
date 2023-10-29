const cursor = document.querySelector(".cursor");
const wind = document.querySelector(".wind");
const banner = document.querySelector(".pointer_lock_banner");

let windOffsetX = 0;
let cursorX = 0;
let cursorY = 0;
let isCursorLocked = false;

// Function to move the cursor to a specific X and Y position
const moveCursor = (x, y) => {
  cursorX = x;
  cursorY = y;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
};

// Function to simulate a click at a specific X and Y position
const clickAt = (x, y) => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: x,
    clientY: y
  });
  document.elementFromPoint(x, y).dispatchEvent(event);
};

// Move the cursor to X=300 and Y=200 and perform a click
moveCursor(300, 200);
clickAt(300, 200);

// Rest of your existing code...
// ... (your event listeners, animation frames, etc.)
