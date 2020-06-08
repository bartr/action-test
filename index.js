const core = require('@actions/core');

async function run() {
  try { 
    const ms = core.getInput('secrets');
    const envVar = core.getInput('env_var')

    const pat = core.getInput("pat");

    core.exportVariable('pat', pat);
    
    core.exportVariable(envVar, pat != null);

    core.setOutput('secretsAreSet', pat != null);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
