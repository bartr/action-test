const core = require('@actions/core');

async function run() {
  try { 
    const ms = core.getInput('secrets');
    const envVar = core.getInput('env_var')

    const pat = core.getInput("pat");

    core.exportVariable('pat', pat);

    core.exportVariable(envVar, pat != '');

    core.setOutput('secretsAreSet', pat != '');
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
