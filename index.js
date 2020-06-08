const core = require('@actions/core');


async function run() {
  try { 
    const ms = core.getInput('secrets');
    console.log(`secrets: ${ms}`)

    core.setOutput('isSet', true);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
