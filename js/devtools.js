document.addEventListener("keydown", (event) => {
  const isCtrlShift = event.ctrlKey || (event.metaKey && event.shiftKey);

  if (isCtrlShift && ["I", "J", "C"].includes(event.key)) {
    event.preventDefault();
  }

  if ((isCtrlShift || event.ctrlKey || event.metaKey) && event.key === "S") {
    event.preventDefault();
  }

  if (event.key === "F12" && event.code === "F12") {
    event.preventDefault();
  }
});