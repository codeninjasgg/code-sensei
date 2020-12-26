# `sensei-grading-bookmarklet`

> A bookmarklet to enhance the grading of code ninja assignments.

## Usage

1. Visit the [grading console][grading_console] while logged in as a code sensei.
1. Paste the bookmarklet code in the [address bar](https://en.wikipedia.org/wiki/Address_bar).
1. [Make sure it is prefixed with `javascript:`](#security).
1. Click <kbd>enter</kbd> to execute the bookmarklet code.
1. Grade.

## Development

Upon cloning this project, execute `npm i` to install of the necessary dependencies.

This [bookmarklet][bookmarklet_definition] is compiled using [NodeJS][node_installation].
To run in development mode, run `npm run dev`.
To generate the bookmarklet, run `npm start`.

## Purpose

Grading code ninjas' submissions are slow and tedious because the current site has very poor UX.
My goal is to make an entirely keyboard-navigable enhancement in the form of a bookmarklet.

## Security

For security reasons, modern browsers will make you type the prefix (`javascript:`) manually.
They use this as a method of opting into the potentially dangerous act of executing foreign JavaScript on a webpage.
This code, however, is non-malicious, so no worries.

[grading_console]: https://gdp.code.ninja/Grading
[bookmarklet_definition]: https://en.wikipedia.org/wiki/Bookmarklet
[node_installation]: https://nodejs.org/en/download/
