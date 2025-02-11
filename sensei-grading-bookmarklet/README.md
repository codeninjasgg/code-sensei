# `sensei-grading-bookmarklet`

[![Bookmarklet Size][bookmarklet_size_badge]][bookmarklet_file]

> A bookmarklet to enhance the grading experience of code ninja assignments.

## Purpose

Grading code ninjas' submissions is slow and tedious because the current site has a poor user experience.
My goal is to make an entirely keyboard-navigable enhancement in the form of a bookmarklet.

## Getting Started

To install a bookmarklet, it must be added to your bookmarks bar.

1. Right-click your bookmark bar.
1. Click "Add page...".
1. Set the name to `Sensei Grading +`.
1. Set the URL to [the latest bookmarket distribution][bookmarklet_file].
1. Click "Save".

Now that you have installed the bookmarklet, using it is as simple as the following steps:

1. Visit the [grading console][grading_console] while logged in as a code sensei.
1. Click "Sensei Grading +" on your bookmarks bar to execute the bookmarklet code.
1. Grade.

## Keybinds

| Key              | Action                         |
| ---------------- | ------------------------------ |
| <kbd>i</kbd>     | Marks assignment as incomplete |
| <kbd>s</kbd>     | Skips to next assignment       |
| <kbd>1</kbd>     | Rates assignment as 1-star     |
| <kbd>2</kbd>     | Rates assignment as 2-star     |
| <kbd>3</kbd>     | Rates assignment as 3-star     |
| <kbd>enter</kbd> | Submits assigment grade        |

## Development

This [bookmarklet][bookmarklet_definition] is compiled using [NodeJS][node_installation].
Upon cloning this project, execute `npm i` to install of the necessary dependencies.

To run in development mode, run `npm run dev`.
To generate the bookmarklet, run `npm start`.

## Updating

It is possible that some improvements to the bookmarklet have been made since you last installed it.
To update your bookmarklet, just follow the following steps:

1. Right-click "Sensei Grading +" on your bookmarks bar.
1. Click "Edit...".
1. Set the URL to [the latest bookmarket distribution][bookmarklet_file].
1. Click "Save".

## Security

For security reasons, modern browsers will make you type out the prefix (`javascript:`) manually.
They use this as a method of opting into the potentially dangerous act of executing foreign JavaScript on a webpage.
This code, however, is non-malicious, so no worries.

[grading_console]: https://gdp.code.ninja/Grading
[bookmarklet_definition]: https://en.wikipedia.org/wiki/Bookmarklet
[node_installation]: https://nodejs.org/en/download/
[bookmarklet_size_badge]: https://img.shields.io/github/size/EthanThatOneKid/code-sensei/sensei-grading-bookmarklet/bookmarklet.txt?label=bookmarklet%20size
[bookmarklet_file]: https://raw.githubusercontent.com/EthanThatOneKid/code-sensei/main/sensei-grading-bookmarklet/bookmarklet.txt
