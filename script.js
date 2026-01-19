// Simple commands database
const commands = {
    'help': "Available commands:\nls - List files\npwd - Current directory\ndate - Current date/time\nwhoami - Current user\nclear - Clear terminal\nhelp - Show this message",
    'ls': "Desktop    Documents  Downloads\nMusic      Pictures   Public\nTemplates  Videos",
    'pwd': "/home/student",
    'date': new Date().toString(),
    'whoami': "student",
    'clear': "CLEAR"
};

// Get DOM elements
const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');

// Execute command function
function executeCommand(command) {
    if (!command.trim()) return;
    
    // Add command to output
    addCommandLine(command);
    
    // Find and execute command
    const cmd = command.toLowerCase();
    if (commands[cmd] === "CLEAR") {
        clearTerminal();
    } else if (commands[cmd]) {
        let output = commands[cmd];
        if (cmd === 'date') {
            output = new Date().toString();
        }
        addOutput(output);
    } else {
        addOutput(`Command '${command}' not found. Type 'help' for available commands.`);
    }
    
    // Clear input
    commandInput.value = '';
    
    // Scroll to bottom
    scrollToBottom();
}

// Add command line to terminal
function addCommandLine(command) {
    const line = document.createElement('div');
    line.className = 'prompt-line';
    line.innerHTML = `<span class="prompt">student@ubuntu:~$</span> <span class="typed">${command}</span>`;
    terminalOutput.appendChild(line);
}

// Add output to terminal
function addOutput(output) {
    const outputElement = document.createElement('pre');
    outputElement.className = 'command-output';
    outputElement.textContent = output;
    terminalOutput.appendChild(outputElement);
}

// Clear terminal
function clearTerminal() {
    terminalOutput.innerHTML = '<div class="welcome-message"><p>Welcome to Ubuntu Terminal Simulator!</p><p>Type <span class="command">help</span> for commands list</p><p>Type <span class="command">clear</span> to clear terminal</p></div>';
}

// Insert command from buttons
function insertCommand(cmd) {
    commandInput.value = cmd;
    commandInput.focus();
}

// Run demo command
function runDemoCommand(cmd) {
    executeCommand(cmd);
}

// Scroll to bottom
function scrollToBottom() {
    terminalOutput.parentElement.scrollTop = terminalOutput.parentElement.scrollHeight;
}

// Event listener for Enter key
commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        executeCommand(this.value);
    }
});
