###### Introduction
Docker Hub has a bunch of repos, each repo has some tags to represnt different versions of the images in the repo. The problem here is that each repo has a different convention of tag naming, causing two main issues:
1. Each repo uses a different way of lexicographical ordering and version naming.
2. Each repo uses a different way of grouping tags together: sometimes one image has two or more different names, and we want to avoid storing an entry in our DB for each name, which is why for each image we select one name and skip the others.

###### The task at hand
Write an Alpine tag describer! You have two examples to learn from: Centos and Node tag describers. Use the examples to both understand the way the tests work and the logic of the describers. The two examples aren't different from each other and it is okay to focus on one.
1. Create a fixture which will represent the logic of the tags in Alpine repository in Docker Hub, make sure the test fails, and commit it. The fixture file should be added in this path: `tag-describer-exercise/test/fixtures`.
2. Write the Alpine tag describer, to make the test pass and commit it. The new Alpine tag describer file should be added in this path: `tag-describer-exercise/src/collector/tag-describers/official`.

###### Prerequisites and tools
1. This repo runs successfuly on Node 10. If the environment uses a different version of Node, run `nvm use 10`. If the environment doesn't have Node 10 install, run `nvm install 10` and the run the previous command.
2. To run the tests, run the command `npm run test`. You can also use `npm run test:watch` which will watch the changes of the code as you go and will point at the failures if there are any.
