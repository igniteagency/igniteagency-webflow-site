export function footerSpacer() {
  // Get the source and target elements by their IDs
  var source = document.getElementById('sourceSection');
  var target = document.getElementById('targetSection');

  // Set the height of the target to match the source
  if (source && target) {
    target.style.height = source.offsetHeight + 'px';
  }
}
