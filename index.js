const core = require('@actions/core');
// const github = require('@actions/github');

async function run() {
  try { 
    const ms = core.getInput('secrets');
    console.log(`secrets: ${ms}`)

    core.exportVariable("IS_SET", true);

    core.setOutput('isSet', true);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
