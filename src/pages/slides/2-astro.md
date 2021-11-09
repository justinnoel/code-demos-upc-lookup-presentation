---
title: "Astro"
description: "Astro generates the HTML, JavaScript, and CSS."
heroImage: "/social.jpg"
alt: "Astro"
layout: "../../layouts/Presentation.astro"
index: 2
---

[Astro](https://astro.build) is one of many Static Site Generators (SSG)
developers can choose from today.

- Build faster websites with less client-side Javascript
- Uses the ["Islands Architecture"](https://jasonformat.com/islands-architecture/)

> The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions. These placeholders/slots contain the server-rendered HTML output from their corresponding widget. They denote regions that can then be "hydrated" on the client into small self-contained widgets, reusing their server-rendered initial HTML.

Can use any type of JavaScript and has built-in TypeScript support

- Vanilla JS
- React
- Svelte
- Vue
- Solid

By default, **zero** user generated JavaScript is shipped to the client. However,
there _is_ a small loader script for all pages.

The loader script allows for hydrating client components as needed and only
when they are visible (uses intersection observer).
