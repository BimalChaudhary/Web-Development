const messages = [
  "Initializing Hacking",
  "Reading your files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up",
];
const terminal = document.getElementById("terminal");
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function showMessage() {
  for (const messageText of messages) {
    const message = document.createElement("div");
    message.textContent = messageText;
    message.classList.add("blinking-dots");
    terminal.appendChild(message);
    await delay(Math.random() * 6000 + 1000);
    message.classList.remove("blinking-dots");
  }
}
showMessage();
