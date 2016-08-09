# Snyk

## Introduction
In this exercise we'll be learning about `patch` files (also known as `diff` files).
These textual files have a special format and can be used to describe the changes we want to apply to other files. For example, suppose we have a python script, and a bug in the script was discovered. You found the bug, and fixed it and now want to share it with other. Instead of sending the whole script, you can share just the 'differences' between the two versions. The file holding the differences (patch file) can be later applied to the files from the old version.

Here's an example of a patch file. If this file will be given to `patch` utility, it will look for `a/index.js`, apply the changes (adding 2 new lines) and save them to `b/index.js`.

```
// filename: 0.7.0.patch
--- a/index.js
+++ b/index.js
@@ -38,6 +38,8 @@
  */

 function parse(str) {
+  str = '' + str;
+  if (str.length > 10000) return;
   var match = /^((?:\d+)?\.?\d+) *(ms|seconds?|s|minutes?|m|hours?|h|days?|d|years?|y)?$/i.exec(str);
   if (!match) return;
   var n = parseFloat(match[1]);
```

The `GNU patch` command line utility accepts patch files as an input argument and applies the changes to the local files.

So for example, The above file can be used like that:
```
$ patch -p1 --dry-run --verbose -i ~/targil/patches/0.7.0.patch
Hmm...  Looks like a unified diff to me...
The text leading up to this was:
--------------------------
|// code derived from https://github.com/guille/ms.js
|// reference: https://github.com/rauchg/ms.js/commit/48701f029417faf65e6f5e0b61a3cebe5436b07b
|--- a/index.js
|+++ b/index.js
--------------------------
Patching file index.js using Plan A...
Hunk #1 succeeded at 38.
done
```

`GNU patch` and `GNU diff` are command line utilities used to work with files and patches. Use man to learn more. We will be playing with both during the exercises.

Good luck!



## Exercise #1
1. Go to ~/targil/ex01/versions/0.7.0/node_modules/ms
2. And apply to patch file from `~/targil/ex01/0.7.0.patch`
3. Use the following command:
  ```
  patch -p1 --dry-run --verbose -i ~/targil/ex01/0.7.0.patch
  patch -p1 --backup --verbose -i ~/targil/ex01/0.7.0.patch
  ```
  Notice the `--dry-run` flag, it means there will be no changes to the file. just simulating it. basically checking if tha patch can be applied to the files in the directory
4. Read the `man` page of `patch` or browse the internet to find out the meaning of `-p1` flag. What would -p2 do?
Please describe your findings here:



## Exercise #2
Read about the united diff format https://en.wikipedia.org/wiki/Diff_utility#Unified_format
Apply patch. works
In `ex02`, there's a patch file named `0.6.0_broken.patch`.
If you try to apply this patch to `~/targil/ex02/versions/0.6.0/node_modules/ms` it will fail.
Fix the patch file to work. Save it to a separate file.

## Exercise #3
There's an older version of the module at `~/targil/ex03/versions/0.5.0/`
Take the patch file from previous exercise and change it to work on this version.
Name the file `0.5.0.patch`


## Exercise #4
In `ex04` are two files `ms.js` and `ms.js.orig`.
Manually writing patch files is hard. We want to find a way to do it automatically using a shell command.
Find that command.

## Exercise #5
Go to `~/targil/ex05/versions/0.2.0/node_modules/ms`
If you try to apply the patch `~/targil/ex05/x.patch` it will fail.
Find an argument you can pass to `patch` for it to be more 'tolerant'

## Exercise #6
Write a python script `pretty_patch.py` that gets a patch file as an argument and prints out the list of the files to be patched, for each file, the list of chunks (a.k.a hunks) should be printed, and for each chunk, the number of added and deleted lines.
Example:
```
$ python pretty_patch.py example.patch
lib/server.js
  chunk #1 (added: 3; deleted: 1)
  chunk #2 (added: 0; deleted: 10)
lib/client.js
  chunk #1 (added: 20; deleted: 1)
```
You can use the patch files from the [vuln db](https://github.com/Snyk/vulndb) as input. 

