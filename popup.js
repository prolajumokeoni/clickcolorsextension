
document.getElementById("container").addEventListener("click", async  (event) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    args: [event.target.value]
  });
});

function setPageBackgroundColor(targetColor) {
  document.body.style.backgroundColor = targetColor;
}

