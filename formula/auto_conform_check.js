const {spawn} = require('child_process');
const formula = spawn('dotnet', ['CommandLine.dll']);
const fs = require('fs');

let state = 'beforeFirstPrompt';
let result = false;
const FORMULA_PROMPT = '[]>';
const FORMULA_STILL_RUNNING = 'Running';
const FORMULA_QUERY_COMPLETE = 'Done';
const FORMULA_QUERY_TRUE = 'true';
const FORMULA_COMPILATION_FAILED = '(Failed)';
const directory = process.argv[2];
const modelName = process.argv[4];
const domainName = process.argv[3];
let collectedPrompt = '';
const prompts = [];

function processPrompt(promptData) {
    switch (state) {
        case 'beforeFirstPrompt':
            state = 'firstPrompt';
            break;
        case 'loading':
            if(promptData.indexOf(FORMULA_COMPILATION_FAILED) !== -1) {
                fs.writeFileSync('./' + directory + '/error.txt', promptData);
                state = 'fourthPrompt';
            } else {
                state = 'secondPrompt';
            }
            break;
        case 'query':
            state = 'thirdPrompt';
            break;
        case 'result':
            if(promptData.indexOf(FORMULA_STILL_RUNNING) !== -1) {
                state = 'thirdPrompt';
            } else if (promptData.indexOf(FORMULA_QUERY_COMPLETE) !== -1) {
                if(promptData.indexOf(FORMULA_QUERY_TRUE) !== -1) {
                    result = true;
                }
                state = 'fourthPrompt';
            } else {
                state = 'thirdPrompt';
            }
            break;
        default:
            break;
    }
}

formula.stdout.on('data', data => {
    const strData = data.toString('utf8');
    if(strData.indexOf(FORMULA_PROMPT) !== -1) {
        collectedPrompt += strData;
        prompts.push(collectedPrompt);
        collectedPrompt = '';
    } else {
        collectedPrompt += strData;
    }
});

formula.once('error', error => {
    console.error(error);
    process.exit(1);
});

formula.once('close', code => {
    console.log('formula exited with code: ' + code);
    process.exit(0);
});

const timer = setInterval(() => {
    switch (state) {
        case 'firstPrompt':
            formula.stdin.write('l ./' + directory + '/test.4ml\n');
            state = 'loading';
            break;
        case 'secondPrompt':
            formula.stdin.write('qr '+ modelName + ' ' + domainName + '.conforms\n');
            state = 'query';
            break;
        case 'thirdPrompt':
            formula.stdin.write('ls tasks\n');
            state = 'result';
            break;
        case 'fourthPrompt':
            formula.stdin.write('exit\n');
            fs.writeFileSync('./' + directory + '/result.txt', result ? 'true' : 'false');
            clearInterval(timer);
            break;
        default:
            if (prompts.length > 0) {
                processPrompt(prompts.shift());
            }
    }
}, 10);