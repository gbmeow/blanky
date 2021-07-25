const github = require('@actions/github');
const core = require('@actions/core');
var tbl = require('./helpers/tableGenerator.js');

const { promises: fs } = require('fs');

const myToken = core.getInput('myToken');
const octokit = github.getOctokit(myToken);
const context = github.context;

myAsyncMethod();

async function myAsyncMethod () {
    try {
        let path = './blanky.json';
        let dups = await fs.readFile(path, 'utf8');
        var htmlTable = tbl.makeTable(JSON.parse(dups));
        await octokit.rest.issues.createComment({
            ...context.repo,
            issue_number: context.payload.pull_request.number,
            body: htmlTable,
          });
    } catch(ex) {
        console.log( 'Error', ex );
    }
};