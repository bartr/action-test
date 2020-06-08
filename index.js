const core = require('@actions/core');
// const github = require('@actions/github');

async function run() {
  try { 
    const ms = core.getInput('secrets');
    const envVar = core.getInput('env_var')

    core.exportVariable(envVar, true);

    core.setOutput('secretsAreSet', true);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
