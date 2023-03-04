I'm seeing a waterfall effect when loading data on a child page, when that child page calls `await parent()` purely to access an auth token which is stored in `locals`.

I have a small reproduction example set up here: https://github.com/kevinrenskers/sk-loading-waterfall. Start up the server, navigate to http://127.0.0.1:5173/child and check the logs. You can see something like this:

```
Starting A 1677925953894
Starting B 1677925954228
```

This is a waterfall effect: B only starts after A is complete, purely because the child page needs access to the token, stored in locals, via `await parent()`. If you remove that call in the child page's `+page.ts` file, you will see that both requests are now made at the same time.

My question is how to prevent this waterfall effect from happening, when I need access to the token, stored in locals, in a child page?
