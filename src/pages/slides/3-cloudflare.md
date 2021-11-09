---
title: "Cloudflare"
description: "Our UPC lookup app will use Astro, Cloudflare, and React"
heroImage: "/social.jpg"
alt: "Astro"
layout: "../../layouts/Presentation.astro"
index: 3
---

[Cloudflare](https://cloudflare.com) is most commonly known as a CDN and
security service for the internet. They protect millions of sites against DDoS
and other attack vectors.

Cloudflare also has a suite of tools for enterprises and developers to build
robust, automatically scaled, and low cost "serverless" applications.

We'll be using:

## Pages

[Pages](https://pages.cloudflare.com/) is currently a hosting service for
static sites. Using GitHub integration
(others "Coming Soon"), any changes made on the "main" branch are automatically
pushed to production.

Changes on other branches automatically get a "preview url".

All of the published sites are cached across Cloudflare's entire network of 250+
points of presence across the global. If your visitor is in Mumbai, India or
Dallas, Tx, USA they will be served the content from the POP closest to them
with virtually no latency.

There are rumors of adding "API" functionality within the Pages platform as well.
For now, see [#Workers](Workers).

## Workers

Unlike most "serveless functions" available from other providers,
[Workers](https://workers.cloudflare.com/) do
not use nodejs. Instead, Cloudflare used v8 Isolates. These are effectively
instances of the Chrome JavaScript engine running in the cloud. Because of this,
they have extremely low cold start times.

In fact, the cold start times are so low that Cloudflare managed to make them
appear to be 0ms. They did this by starting instance during the SSL handshake.

By the time the handshake is complete, the instance is already up and ready
to receive the request.

Just like Pages, Workers are globally distributed. Code that runs without
accessing an external service or API will respond nearly instanly anywhere
in the world.

## Workers KV

[Workers KV](https://www.cloudflare.com/products/workers-kv/) is a very low
latency, key-value storage service. You put data in and fetch data out.

It's basically like a JSON, schemaless database.

As with Pages and Workers, they KV data is globally distributed and accessible
at the POP closest to your visitor.

It's important to note that KV is "eventually consistent". If a user in Chicago
triggers a Worker to update a KV, the change will be instantaneous in that POP
for all subsequent requests. However, someone in Europe may not see those changes
immediately. In general, global synchronization is completed in less than 60 seconds.

If you need guaranteed consistency with transaction capability, consider using
Cloudflare's [Durable Objects](https://developers.cloudflare.com/workers/learning/using-durable-objects)
which is still in beta.
