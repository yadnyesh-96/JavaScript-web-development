# Sync vs Async

## What I learned
- JS runs sync code first
- Promises are microtasks
- setTimeout is a macrotask

## Key rule
Microtasks > Macrotasks

## Common mistake I had
I thought setTimeout(0) runs immediately — it does NOT.
