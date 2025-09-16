document.getElementById("randomTab").addEventListener("click", async () => {
  // Récupérer tous les onglets de la fenêtre actuelle
  let tabs = await chrome.tabs.query({ currentWindow: true });

  if (tabs.length > 0) {
    // Choisir un index aléatoire
    let randomIndex = Math.floor(Math.random() * tabs.length);
    let randomTab = tabs[randomIndex];

    // Activer l’onglet choisi
    await chrome.tabs.update(randomTab.id, { active: true });
  }
});
