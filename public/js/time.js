function showFilled(Value) {
  return Value > 9 ? "" + Value : "0" + Value;
}
function StartClock24() {
  TheTime = new Date();
  document.clock.showTime.value =
    showFilled(TheTime.getHours()) +
    ":" +
    showFilled(TheTime.getMinutes()) +
    ":" +
    showFilled(TheTime.getSeconds());
  setTimeout("StartClock24()", 1000);
}
