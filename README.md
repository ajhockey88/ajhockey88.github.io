# <img src="icon-192.png" alt="ThorStream App Icon" width="65"> ThorStream
[![Downloads](https://img.shields.io/github/downloads/ajhockey88/ajhockey88.github.io/total?style=for-the-badge&logo=github&logoColor=white&label=Downloads)](https://github.com/ajhockey88/ajhockey88.github.io/releases)
[![Latest Release](https://img.shields.io/github/v/release/ajhockey88/ajhockey88.github.io?style=for-the-badge&logo=github&logoColor=white&label=Latest%20Release)](https://github.com/ajhockey88/ajhockey88.github.io/releases/latest)
[![Reddit Post](https://img.shields.io/badge/Reddit-View%20Post-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/AynThor/comments/1wt0bwc/thorstream_a_twitch_viewer_built_for_the_ayn/)

A Twitch viewer built just for the **AYN Thor**'s dual-screen hardware — watch your stream on one screen and read chat on the other, with full [7TV](https://7tv.app/) emote support built right in. 🎮📺

It installs and runs like a real app — no browser bar, no clutter, just your stream and your chat.

## ✨ Features

- 🎥 **Live stream playback** through Twitch's official player
- 💬 **Real-time chat**, connected straight to Twitch
- 😄 **7TV emotes** show up right alongside native Twitch emotes in chat
- 🔐 **Sign in with Twitch** to see which of your followed channels are live right now, and jump in with one tap
- ✍️ **Send messages** right from the app once you're signed in
- 👀 **Message preview** — typing something long? A clean preview card shows your full message at the top of the screen, whether you're typing on the top screen or the bottom one
- 🖥️🖥️ **True dual-screen mode** — tap one button and the stream fills the top screen while chat pops up full-screen on the bottom, no dragging windows around. Switch streamers on the top screen and the bottom chat follows along, and closing the app closes the bottom chat too
- 🗼 **Tower Mode** — stand the Thor on its edge: the small screen shows the stream rotated upright and the big screen shows a tall chat with a longer history (150 messages, 75 in Battery Saver)
- ⚙️ **Settings** — a font size slider with a live preview, plus toggles to show or hide subscriber and bit badges in chat
- 📳 **Haptic feedback** — a light vibration on every button press
- 🔋 **Battery Saver** — one tap for lower video quality, still emotes instead of animated ones, and lighter chat
- 🍃 **Easy on the battery** even without saver — chat pauses while the app sits in the background, emote lists are remembered instead of re-downloaded, and animated emotes only animate while you can actually see them
- 🧹 **Clutter-free chat** — there are no extra banners, footers, or headers in the chat window. The bottom screen is pure chat, edge to edge, and the menu bar tucks itself away so the stream and chat get the whole screen
- 📜 **Chat that stays put** — chat only pauses when *you* scroll up, not when emotes load or old messages are trimmed. Normal chat keeps a light 30-message history (20 in Battery Saver)
- 🔄 **One-tap updates** — "Check for updates" in the info screen finds a newer version and reloads into it automatically
- 📐 Adapts automatically whether it's running on the Thor's wide top screen or its squarer bottom one
- 🚫 No address bar, no status bar — just a clean, full-screen app

## 📷 Screenshots

**Tower Mode**
<br/>
<img width="378" height="504" alt="IMG_5931" src="https://github.com/user-attachments/assets/da7ca7eb-970e-406a-8f16-fd5232b817fc" />
<br/>

**Dual Screen Mode**
<br/>
<img width="450" height="504" alt="IMG_5930" src="https://github.com/user-attachments/assets/0929bbba-e8de-49ec-8aa1-8ea64b0cb2fd" />
<br/>

**Standard Mode**
<br/>
<img width="450" height="504" alt="IMG_5929" src="https://github.com/user-attachments/assets/36bce274-2783-4241-96c9-102ffb6e5c81" />
<br/>

**Bottom Screen Mode**
<br/>
<img width="450" height="504" alt="IMG_5932" src="https://github.com/user-attachments/assets/3c1ad48e-5838-4f4d-a6fe-2cc5bc796a66" />


<br/>

## 📝 Changelog

### 1.1.2
- Tower Mode: the main screen no longer loads a hidden second copy of the stream (it was decoding video and playing audio for nobody to see)
- Turning Tower Mode off now stops the Tower Mode video tab (no more background decoding), and switching channels or Battery Saver on the main screen carries over to that tab
- Removed the fullscreen request and tap cover from the Tower Mode video screen, which also removes Chrome's "swipe down to exit full screen" popup; the small on-screen diagnostics and their 1-second timer are gone
- Chat: late data from a replaced connection is ignored, and the chat list is layout-contained for cheaper redraws

### 1.1.1
- Chat history is capped at 30 messages (20 in Battery Saver) everywhere except Tower Mode, which keeps 150 (75 in Battery Saver); the cap applies immediately when entering or leaving two-screen modes
- Emotes start loading right away, decode off the main thread, and reserve their space so chat doesn't jump or show late icons; they're only unloaded when far off-screen
- Chat no longer pauses by itself: only real touch, wheel or keyboard scrolling can pause it (bottom tolerance widened to 60px)
- New app icons, with a cache-busting version so devices pick them up
- Tower Mode video screen: fixed the video not showing by rotating the player inside an unrotated frame instead of rotating the whole wrapper, sized to the visible screen so the edges aren't cropped, and a first tap goes fullscreen to hide Chrome's address bar (`?rm=b` selects an alternate rotation method, `?rm=0` the old one)
- "Check for updates" now clears the app's cached files and reloads into the new version
- Service worker cache bumped to `thorstream-v4`

## 🛠️ How it's built

- One simple, self-contained web app — no complicated build tools
- Packaged into a real installable Android app
- A touch of native code handles the parts a plain web page can't do on its own: putting chat on the second screen, showing the message preview, and closing the bottom chat along with the app
- Hosted for free, straight from GitHub

## 🔒 A note on privacy

There's no backend, no database, and no analytics anywhere in this app. Signing in with Twitch happens directly between you and Twitch, and your sign-in stays on your device — nothing about how you use the app is ever visible to anyone else. 🙌

## Support Development

I don't ask for donations, but if you enjoy this app and would like to support its continued development, any tip is greatly appreciated! Thank you for your support!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/P5K727UIVJ)
