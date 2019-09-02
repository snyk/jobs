#!/usr/bin/env node

const args = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const lib = require('../lib');

module.exports = { validateDigestArgs, getDigest };

const help = 'Usage: node cli/index.js --getDigest --repo=<repoName> --tag=<tagName>';

if (args.help || args.h) {
  console.log(help);
  process.exit(0);
}

async function getDigest(repo, tag) {
  try {
    const digest = await lib.getDockerContentDigest(repo, tag);
    console.log(chalk.green(`Fetched digest: ${digest} for ${repo}:${tag}`));
    return digest;
  } catch (error) {
    if (error.statusCode === 401) {
      console.log(`Repo ${repo} does not exist on this Docker Hub registry account.`);
    } else if (error.statusCode === 404) {
      console.log(`Repo ${repo} does not have the tag ${tag} available.`);
    } else {
      throw error;
    }
  }
}

function validateDigestArgs(args) {
  if (typeof args.repo === 'string' && [ 'string', 'number' ].includes(typeof args.tag)) {
    return true;
  }
  console.log(chalk.red('Please provide both repo name and tag'));
  console.log(help);
  return false;
}

async function init() {
  if (args.help || args.h) {
    console.log(help);
    return 0;
  }
  if (args.getDigest) {
    if (!validateDigestArgs(args)) {
      return 1;
    }
    await getDigest(args.repo, args.tag);
  } else {
    console.log(help);
  }
  return 0;
}

init()
  .catch(err => {
    console.log(chalk.red(err));
    process.exit(1);
  });
