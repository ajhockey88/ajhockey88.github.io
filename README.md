# 🌩️ ThorStream

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
- 🔋 **Battery Saver** — one tap for lower video quality, still emotes instead of animated ones, and lighter chat
- 🍃 **Easy on the battery** even without saver — chat pauses while the app sits in the background, emote lists are remembered instead of re-downloaded, and animated emotes only animate while you can actually see them
- 🧹 **Clutter-free chat** — there are no extra banners, footers, or headers in the chat window. The bottom screen is pure chat, edge to edge, and the menu bar tucks itself away so the stream and chat get the whole screen
- 📐 Adapts automatically whether it's running on the Thor's wide top screen or its squarer bottom one
- 🚫 No address bar, no status bar — just a clean, full-screen app

## 🛠️ How it's built

- One simple, self-contained web app — no complicated build tools
- Packaged into a real installable Android app
- A touch of native code handles the parts a plain web page can't do on its own: putting chat on the second screen, showing the message preview, and closing the bottom chat along with the app
- Hosted for free, straight from GitHub

## 🔒 A note on privacy

There's no backend, no database, and no analytics anywhere in this app. Signing in with Twitch happens directly between you and Twitch, and your sign-in stays on your device — nothing about how you use the app is ever visible to anyone else. 🙌
