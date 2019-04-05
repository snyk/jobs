# Snyk SRE practical exercise

## Background:

We've got a mostly NodeJS set of services. It's a great choice for a lot of what we do as much of Snyk involves integrating with other services, which Node's single-threaded event-loop based concurrency model is really suited for.

This event-loop comes with a big challenge for service stability: blocking code. If a function has a lot of computation to perform, then everything else being handled by the Node process has to wait until that computation is done. In simplified terms, the even loop will only "tick" once all pending functions have nothing left to do. This means we have a lot of "noisy neighbour" performance issues, where something that is typically lightning fast can take seconds (or in some pathological cases, minutes!) to complete.

A great blog post written by one of our architects explains this well, and covers how we've begun to mitigate event-loop blocking across the Snyk platform: https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/

To help address this challenge, we're using an alternative NodeJS runtime from Node Source called NSolid (https://nodesource.com/products/nsolid). It allows realtime observation of the NodeJS virtual machine, providing both extensive metrics, and the ability to take CPU snapshots and heap dumps from running production processes.

## The task:

One of the things that NSolid is able to do is send a webhook whenever the event loop is blocked for more than a configurable threshold (in ms). The webhook payload includes the amount of time that the event loop has been blocked for, and the stack trace that caused the delay (as a single string).

We'd like you to implement a solution that would let us keep track of this event-loop blocking over time, understanding the frequency and severity of blocking from specific areas of a monitored codebase.

A sample NodeJS service is available here: https://github.com/snyk/sre-exercise-sample-app

Your solution should cover the following functionality:
1. identify the worst blocking code
2. identify the worst blocking "user code", i.e. code not inside `node_modules/**/*`, and not in the Javascript standard library
    1. code that blocks directly
    2. code that calls library code that then blocks
3. see the blocking events for a specific blocking function + line number + column over a time period

Additional considerations:
1. This doesn't need to have a user interface, querying a database directly is fine (although please do provide example queries)
2. The choice of technology is totally up to you
3. Please provide some commentary about your solution, why did you choose the technology and approach that you did?
4. You should install and configure an NSolid console locally (or on a VM / containers) to test your solution

NSolid is available for personal use for free from https://accounts.nodesource.com/sign-up.

In business value terms: our engineers would use something like this to help them understand and improve how their services perform in production.

Relevant docs:
- NSolid documentation (overview, install, etc.): https://docs.nodesource.com/nsolid/3.4/docs
- Webhook integration: https://docs.nodesource.com/nsolid/3.4/docs#webhook-integration
- The "event loop blocked" event: https://docs.nodesource.com/nsolid/3.4/docs#event-loop-blocked-data
- Example of Slack integration that uses this same webhook mechanism, to help visualise the event: https://docs.nodesource.com/nsolid/3.4/docs#process-event-loop-blocked
