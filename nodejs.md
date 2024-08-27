[Dev vs Prod](#dev-vs-prod)
[Profiling Node app](#profiling-node-app)
[Phases of eventloop](#phases-of-eventloop)

# Dev vs Prod

There are no specific settings you need to apply to make Node.js work in a production configuration.

![image](https://github.com/user-attachments/assets/95410cf3-e69b-4a86-bdf7-ffcf2fd7ec05)

# Profiling Node app

Apache Bench can be used to stress test http servers including express

https://nodejs.org/en/learn/getting-started/profiling

# Phases of eventloop

You may have a question like if I am chaining promises in a webrequest and microtasks are supposed to be executed before taking another task/webrequest, it might look like all the webrequests are processed sequentially.

But its not the case. As soon as eventloop bet with I/O it hands it off to the kernel/libuv. If there are no more microtasks: The event loop proceeds to the next phase aka next task and when eventlook reaches the i/o phase again and kernel reported a callback form I/O , it will be placed a new task not as a microtask.



![image](https://github.com/user-attachments/assets/6f67ddfd-9fc8-4f18-9a22-eacb866ef0c5)






Question Explain clearly what happens when a primise micro task initiates and database i/o operation ? How does eventloop then start the next phase ?
ChatGPT said:
ChatGPT

Let's break down what happens in detail when a promise microtask initiates a database I/O operation and how the event loop proceeds to the next phase.
Scenario

You have an Express route handler that triggers a database query using a promise-based approach (e.g., using a library like knex, mongoose, or pg-promise). The I/O operation (database query) is initiated by the promise. Here's an example:

js
```
app.get('/data', (req, res) => {
  Promise.resolve()
    .then(() => {
      return databaseQuery();  // This initiates a database I/O operation
    })
    .then((result) => {
      res.send(result);  // Once the I/O operation is done, send the response
    });
});
```
Step-by-Step Breakdown
1. Entering the Event Loop

The event loop is running and waiting for events (such as new HTTP requests) to arrive. When a request to /data comes in, the request handler is executed. Here's what happens next:
2. Promise Microtask Starts

  The code inside the route handler starts by creating a resolved promise using Promise.resolve().

  A .then() handler is attached to that promise.

  The .then() handler schedules a microtask. Remember, microtasks are executed after the current phase completes but before moving to the next phase.

  At this point, the event loop will continue executing other synchronous code, but it remembers that a microtask (the .then() callback) is scheduled to be executed soon.

3. Initiating the Database I/O Operation

    When the promise microtask executes (i.e., when the .then() handler is invoked), it triggers a non-blocking I/O operation (the database query).

    The database I/O operation is handed off to the system kernel (or libuv in the case of Node.js) and runs asynchronously outside of the event loop.

    Important: The event loop does not wait for the database query to complete. The I/O operation is running in the background. Node.js immediately moves on to process other tasks while the I/O operation is pending.

4. Event Loop Moves to the Next Phase

After the microtask (the .then() callback) initiates the database query:

  If there are no more microtasks: The event loop proceeds to the next phase (e.g., timers, I/O callbacks, poll, etc.).
    If there are more microtasks: Node.js will finish processing them before moving to the next phase.

In our scenario, after the database query is initiated, there are no more microtasks to process, so the event loop moves on.
Next Phases While I/O is Pending
5. Poll Phase

The event loop enters the poll phase, where it waits for I/O events to complete.

  If other events (like timers or other incoming requests) occur, the event loop will handle those while still keeping track of the database I/O operation.
    Polling for I/O: The database query runs in the background, and the event loop continues to poll for the result of the query.

6. Database I/O Completes

When the database query completes, the kernel/libuv notifies Node.js that the operation has finished. Node.js then schedules a callback to handle the result.

  The callback for the database query is placed in the tasks queue (not the microtasks queue, since this is an I/O callback).
    The event loop will eventually reach the I/O callbacks phase or another appropriate phase to execute the callback associated with the completed I/O operation.

7. Processing the I/O Callback

When the event loop reaches the I/O callbacks phase, it picks up the callback for the completed database query.

  Inside the callback, the promise resolves with the result of the query, and the next .then() in the promise chain is scheduled as a microtask.

  Microtasks take priority: After the current phase completes, the event loop will process this microtask (the .then() callback).

8. Sending the Response

The microtask runs, sending the response to the client using res.send(result).

    After sending the response, the event loop checks the microtasks queue again. If there are no more microtasks, it proceeds to the next phase of the event loop.

Summary of the Workflow

  Step 1: HTTP Request Arrives: The event loop picks up the request, and the route handler initiates a promise that triggers a database I/O operation.
    Step 2: Database Query Initiated: The I/O operation runs asynchronously in the background, freeing the event loop to move to the next phase. The event loop does not block and continues to process other tasks.
    Step 3: Event Loop Continues: While the I/O operation is pending, the event loop processes other tasks (timers, incoming HTTP requests, etc.) and waits for the I/O operation to complete in the poll phase.
    Step 4: I/O Completes: Once the database query finishes, the I/O callback is placed in the task queue and will be processed in the appropriate phase.
    Step 5: I/O Callback Executes: The event loop reaches the phase where the I/O callback is processed, triggering the resolution of the promise and scheduling a microtask to continue the promise chain.
    Step 6: Microtask Completes: The microtask runs, sending the final response to the client. The event loop finishes any remaining microtasks before moving to the next event loop phase.

Key Takeaways

   The event loop is never blocked waiting for I/O: While the database I/O operation is pending, the event loop proceeds to handle other tasks and requests.
    Microtasks (like promise .then() callbacks) are executed between event loop phases: Once initiated, the I/O operation doesn’t block the event loop. Microtasks are processed after each phase but before the event loop moves to the next phase.
    I/O callbacks are handled in specific event loop phases: When the database query completes, its callback is placed in the task queue and will be processed during the appropriate I/O-related phase of the event loop.
    Concurrency: Multiple requests can be handled concurrently. While one request is waiting on an I/O operation, the event loop continues processing other requests.

