document.getElementById("randomTab").addEventListener("click", async () => {
  let tabs = await chrome.tabs.query({ currentWindow: true });

  if (tabs.length > 0) {
    let randomIndex = Math.floor(Math.random() * tabs.length);
    let randomTab = tabs[randomIndex];

    await chrome.tabs.update(randomTab.id, { active: true });
  }
});
