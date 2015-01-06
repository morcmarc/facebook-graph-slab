facebook-graph-slab
===================

**Input slab for querying Facebook Graph API.**

*This should be used in the context of the slabs network. See the core slabs 
read.me for instructions on how to test your slab.*

## Installing

Before using the slab run:

```
$ npm install
```

You will also need a valid Facebook App ID and App Secret if you're running a 
self-hosted Slabs instance. You can register your app at 
[https://developers.facebook.com](https://developers.facebook.com). After the 
registration set the following environment variables on your host

- FB_GRAPH_SLAB_ID
- FB_GRAPH_SLAB_SECRET

and update the `input/index.html` file as well with your App ID.

## Roadmap

- Implement app-user authorization (so that we can make POST and other kind of
requests)