## Frontend Developer - London

We are looking for a front-end developer.

You will be working on our vulnerabilities monitoring service, connecting user projects, the npm registry and our vulnerabilities database.

You will design and implement our web application that is now serving users who monitor their projects for vulnerabilities.

You will work on enabling feature-tiering in our service and establish our enterprise service and business model.

You will work on new integrations into Snyk, such as the ability to import a project from an external git hosting service.

You will work on transitioning our JS/handlebars web application into an API-backed SPA and help us decide between Angular and React :)

#### The interesting part

Now I'd like to publicly begin the interview process, and present the first question we want to discuss.
If the exercise below makes your neurons spark with ideas, we want to hear from you at jobs@snyk.io :)

*Background*

An average NodeJS project has hundreds or more of dependencies, structured in a tree. You can see an example on https://snyk.io/test/npm/ionic#dependencies.

A dependencies tree of a certain snapshot is constant, but the set of vulnerable packages is not, as new vulnerabilities are disclosed constantly and can affect previously vulnerability-free projects.

Our system triggers a process for every newly disclosed vulnerability, and looks up monitored snapshots affected by the new vulnerability. For every such snapshot, newly disclosed vulnerabilities need to be highlighted and prompt for an action on the user's behalf.

*Exercise*

How would you design the experience to distinguish newly disclosed vulnerabilities from the ones that existed when the snapshot was created?

Waiting to hear from you :)

[Snyk.io](https://snyk.io)
