# Random Tab – Chrome Extension

[![Chrome Web Store](https://img.shields.io/badge/Chrome-Web_Store-blue?logo=google-chrome)](https://chrome.google.com/webstore/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Randomly selects one of your currently open tabs and switches to it instantly.**

---

## 📌 Description

Random Tab is a lightweight Chrome extension that lets you quickly jump to a random open tab in your current browser window. No more hunting through dozens of tabs—click a button or use a keyboard shortcut (optional) to instantly navigate to a random tab.

---

## ⚡ Features

- Selects a **random tab** among all open tabs in the current window.
- Immediately **activates the selected tab**.
- Minimalistic interface: just one button in the popup.
- Optional **keyboard shortcut** support for even faster access.

---

## 🛠 Installation (Local / Development)

1. **Clone or download** this repository:

```bash
git clone https://github.com/Trotroni/random-tab.git
```

2. **Open Chrome** and go to:

```text
chrome://extensions/
```

3. Enable **Developer mode** in the top-right corner.  
4. Click **Load unpacked** and select the project folder.  
5. The extension icon will appear in the toolbar.

---

## 🖱 Usage

1. Click the extension icon in the toolbar.  
2. Click the **"Choose Random Tab"** button.  
3. Chrome will immediately switch to a random tab from the current window.

---

## 📂 Project Structure

```
random-tab/
├── manifest.json       # Chrome extension configuration
├── popup.html          # Popup interface
├── popup.js            # Random tab selection script
├── icon.png            # Extension icon
└── README.md           # Project README
```

---

## 📌 Permissions

- `tabs` : required to access the list of open tabs and activate one.

---

## 💡 Future Ideas

- Add a **keyboard shortcut** to choose a random tab without opening the popup.
- Option to **exclude certain tabs** (e.g., Chrome Web Store, Extensions).
- Customizable interface with light/dark mode support.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.