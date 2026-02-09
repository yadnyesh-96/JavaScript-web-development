# Promises

## What I learned
- Promise represents future value
- resolve → success
- reject / throw → failure
- .then() chains values
- .catch() handles errors

## Key rules
- Every .then() returns a new Promise
- throw inside .then = rejection
- catch can recover the chain

## Mistakes I had before
- Forgetting to return inside .then()
- Thinking throw prints error (it doesn't)
