# Phase 0: Browser & DOM Fundamentals

## What this phase is about
Understanding how the browser creates and manages the DOM
before JavaScript ever touches it.

## Key ideas
- HTML is text
- DOM is objects
- Browser builds the DOM tree
- JavaScript talks to DOM, not HTML
- Browser renders DOM to screen

## Why this matters
Frameworks do not manipulate HTML.
They manipulate the DOM.

## DOM Tree, Nodes & Elements

### Key understanding
- DOM is a tree, not a list
- Everything is a node
- Elements are special nodes
- Text inside elements is a separate node

### Important rules
- All elements are nodes
- Not all nodes are elements
- Prefer element-based APIs over node-based ones

### Why this matters
Understanding DOM as a tree makes UI logic predictable
and frameworks easier to learn.


## DOM Lifecycle & Execution Flow

### Browser steps
1. Parse HTML → build DOM
2. Execute JavaScript
3. Render page

### Important events
- DOMContentLoaded → DOM ready
- load → everything ready

### Best practices
- Use `defer` for scripts
- Or place scripts at the bottom
- Never access DOM before it exists
