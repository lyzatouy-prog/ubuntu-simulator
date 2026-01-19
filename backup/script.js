// Simple Terminal Functions

const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');
const clearBtn = document.getElementById('clear-btn');
const helpBtn = document.getElementById('help-btn');

// Welcome message
window.addEventListener('load', function() {
    addOutput("Welcome to Ubuntu Terminal Simulator!\nType 'help' for available commands.", 'info');
});

// Execute command
function executeCommand(command) {
    if (!command.trim()) return;
    
    // Show command
    addCommandLine(command);
    
    // Get command (lowercase, first word)
    const cmd = command.toLowerCase().split(' ')[0];
    
    // Execute
    if (commands[cmd] || commands[command]) {
        const cmdData = commands[command] || commands[cmd];
        
        if (cmdData.type === 'clear') {
            clearTerminal();
        } else {
            const output = typeof cmdData.output === 'function' 
                ? cmdData.output() 
                : cmdData.output;
            addOutput(output, cmdData.type || 'success');
        }
    } else {
        addOutput(`Command not found: ${command}\nType 'help' for available commands.`, 'error');
    }
    
    // Clear input
    commandInput.value = '';
    
    // Scroll to bottom
    scrollToBottom();
}

// Add command line
function addCommandLine(cmd) {
    const div = document.createElement('div');
    div.innerHTML = `<span style="color: #4CAF50">student@ubuntu:~/projects$</span> <span style="color: white">${cmd}</span>`;
    div.style.marginBottom = '10px';
    terminalOutput.appendChild(div);
}

// Add output
function addOutput(text, type) {
    const pre = document.createElement('pre');
    pre.textContent = text;
    pre.style.margin = '10px 0 20px 20px';
    pre.style.whiteSpace = 'pre-wrap';
    
    if (type === 'error') pre.style.color = '#ff6b6b';
    else if (type === 'info') pre.style.color = '#4ecdc4';
    else pre.style.color = '#ccc';
    
    terminalOutput.appendChild(pre);
}

// Clear terminal
function clearTerminal() {
    terminalOutput.innerHTML = '';
    addOutput("Terminal cleared. Type 'help' for commands.", 'info');
}

// Insert command from panel
function insertCommand(cmd) {
    commandInput.value = cmd;
    commandInput.focus();
}

// Show tab
function showTab(tabName) {
    // Update tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Show panel
    document.querySelectorAll('.panel').forEach(panel => panel.classList.remove('active'));
    document.getElementById(`${tabName}-panel`).classList.add('active');
}

// Scroll to bottom
function scrollToBottom() {
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Event Listeners
commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        executeCommand(this.value);
    }
});

clearBtn.addEventListener('click', clearTerminal);
helpBtn.addEventListener('click', () => executeCommand('help'));
