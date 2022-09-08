const emailLink = document.querySelector(".social-links__email");
const alertEl = document.querySelector(".alert");

emailLink.addEventListener("click", copyTextToClipBoard);

function copyTextToClipBoard(e) {
  const text = e.currentTarget.innerText;
  navigator.clipboard.writeText(text);
  alertEl.textContent = "Copied to Clipboard";
  alertEl.classList.add("show");

  RemoveClassWithDelay();
}

const RemoveClassWithDelay = debounce(
  () => alertEl.classList.remove("show"),
  2000
);

function debounce(func, ms) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}
