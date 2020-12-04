# Exploration of memory management in node
1. `node os.js` to see your computer cores
2. `node maxOutMemory.js` to allocate your memory to death
3. `node writeToDeath.js` to see a csv writer use up all of your memory to death

## Other Notes
* use `node --help` for all node runtime options
* use `node --v8-options` for all v8 engine options
* You can increase the threads for the I/O loop in libuv http://docs.libuv.org/en/v1.x/design.html via `SET UV_THREADPOOL_SIZE=,<threads> node <filename.` Note that libuv thread pool is not for all operations but for anything without another method (most common is file system operations)

### Futher Reading
Event Loop in Node
* https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c


