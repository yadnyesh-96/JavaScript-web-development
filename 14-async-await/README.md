# Async / Await

## What I learned
- async functions always return Promises
- await unwraps resolved values
- await rejectedPromise acts like throw
- try/catch replaces .then().catch()

## Key rules
- Code before await runs synchronously
- Code after await runs as a microtask
- Errors must be handled with try/catch

## Mistakes I had earlier
- Forgetting await
- Expecting try/catch to catch setTimeout errors
