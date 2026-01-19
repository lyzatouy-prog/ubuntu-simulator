// ============================================
// UPDATED SCRIPT.JS WITH ENHANCED FEATURES
// ============================================

// DOM Elements
const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');
const commandSearch = document.getElementById('command-search');
const clearBtn = document.getElementById('clear-btn');
const helpBtn = document.getElementById('help-btn');
const currentDir = document.getElementById('current-dir');
const commandCount = document.getElementById('command-count');
const currentTime = document.getElementById('current-time');

// State variables
let commandHistory = [];
let historyIndex = -1;
let executedCommands = 0;
let currentPath = '~/projects';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initTerminal();
    showWelcomeMessage();
    updateTime();
    setInterval(updateTime, 1000);
    
    // Load saved history
    loadCommandHistory();
});

// Initialize terminal
function initTerminal() {
    console.log('Ubuntu Terminal Simulator v2.0 initialized');
    
    // Event listeners
    commandInput.addEventListener('keypress', handleKeyPress);
    commandInput.addEventListener('keydown', handleHistoryNavigation);
    clearBtn.addEventListener('click', clearTerminal);
    helpBtn.addEventListener('click', () => executeCommand('help'));
    commandSearch.addEventListener('input', filterCommands);
    
    // Focus input field
    commandInput.focus();
}

// Show welcome message
function showWelcomeMessage() {
    const welcomeHTML = `
        <div class="welcome-message">
            <h3 class="welcome-title">
                <i class="fab fa-ubuntu"></i> Welcome to Ubuntu Terminal Simulator
            </h3>
            <p>🎯 <strong>Features:</strong></p>
            <ul class="feature-list">
                <li><i class="fas fa-check-circle"></i> 50+ Linux commands with realistic outputs</li>
                <li><i class="fas fa-check-circle"></i> Organized command panels by category</li>
                <li><i class="fas fa-check-circle"></i> Interactive command execution</li>
                <li><i class="fas fa-check-circle"></i> Command history and auto-completion</li>
                <li><i class="fas fa-check-circle"></i> Search functionality</li>
                <li><i class="fas fa-check-circle"></i> System status monitoring</li>
            </ul>
            <p>💡 <strong>Getting Started:</strong></p>
            <p>Type <span class="command">help</span> for command reference</p>
            <p>Type <span class="command">tutorial</span> for guided learning</p>
            <p>Click commands in panels to insert them</p>
            <p>Try <span class="command">system-info</span> to see system status</p>
        </div>
    `;
    terminalOutput.innerHTML = welcomeHTML;
}

// Update time display
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    currentTime.textContent = timeString;
}

// Handle key press events
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim();
        if (command) {
            executeCommand(command);
        }
    }
}

// Handle command history navigation
function handleHistoryNavigation(e) {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0) {
            historyIndex = Math.max(historyIndex - 1, 0);
            commandInput.value = commandHistory[historyIndex] || '';
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (commandHistory.length > 0) {
            historyIndex = Math.min(historyIndex + 1, commandHistory.length);
            commandInput.value = historyIndex === commandHistory.length ? '' : commandHistory[historyIndex];
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autoCompleteCommand();
    }
}

// Execute command
function executeCommand(command) {
    if (!command.trim()) return;
    
    // Add command to output
    addCommandLine(command);
    
    // Find and execute command
    const cmdKey = command.toLowerCase();
    let commandData = commands[cmdKey];
    
    // Try partial matches for commands with arguments
    if (!commandData) {
        const baseCmd = cmdKey.split(' ')[0];
        commandData = commands[baseCmd] || commands['notfound'];
    }
    
    // Execute command
    if (commandData.type === 'clear') {
        clearTerminal();
    } else {
        let output = typeof commandData.output === 'function' 
            ? commandData.output(command) 
            : commandData.output;
        
        addOutput(output, commandData.type);
    }
    
    // Update statistics
    executedCommands++;
    updateCommandCount();
    
    // Save to history
    saveToHistory(command);
    
    // Clear input
    commandInput.value = '';
    historyIndex = commandHistory.length;
    
    // Scroll to bottom
    scrollToBottom();
}

// Add command line to output
function addCommandLine(command) {
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `
        <div class="prompt-line">
            <span class="prompt-user">student@ubuntu</span>
            <span class="prompt-colon">:</span>
            <span class="prompt-path">${currentPath}</span>
            <span class="prompt-symbol">$</span>
            <span class="typed-command">${escapeHtml(command)}</span>
        </div>
    `;
    terminalOutput.appendChild(commandLine);
}

// Add output to terminal
function addOutput(output, type = 'normal') {
    if (!output) return;
    
    const outputElement = document.createElement('pre');
    outputElement.className = `command-output ${type}`;
    outputElement.textContent = output;
    terminalOutput.appendChild(outputElement);
}

// Clear terminal
function clearTerminal() {
    terminalOutput.innerHTML = '';
    showWelcomeMessage();
}

// Insert command from panels
function insertCommand(cmd) {
    commandInput.value = cmd;
    commandInput.focus();
    
    // Show hint for commands with placeholders
    if (cmd.includes('filename') || cmd.includes('file.txt')) {
        setTimeout(() => {
            addOutput(`💡 Tip: Replace 'filename' with your actual file name`, 'info');
            scrollToBottom();
        }, 100);
    }
}

// Run demo command
function runDemoCommand(cmd) {
    executeCommand(cmd);
}

// Run tutorial
function runTutorial() {
    executeCommand('tutorial');
}

// Filter commands in search
function filterCommands() {
    const searchTerm = commandSearch.value.toLowerCase();
    const panels = ['basic-panel', 'files-panel', 'system-panel', 'network-panel', 'dev-panel'];
    
    panels.forEach(panelId => {
        const panel = document.getElementById(panelId);
        const cards = panel.querySelectorAll('.command-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
            const cmdText = card.querySelector('code').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (cmdText.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show/hide panel based on results
        if (visibleCount === 0 && searchTerm) {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}

// Switch tabs
function showTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show corresponding panel
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${tabName}-panel`).classList.add('active');
}

// Command history functions
function saveToHistory(command) {
    commandHistory.push(command);
    if (commandHistory.length > 100) {
        commandHistory.shift();
    }
    historyIndex = commandHistory.length;
    localStorage.setItem('terminalHistory', JSON.stringify(commandHistory));
}

function loadCommandHistory() {
    const saved = localStorage.getItem('terminalHistory');
    if (saved) {
        commandHistory = JSON.parse(saved);
        historyIndex = commandHistory.length;
    }
}

// Auto-complete command
function autoCompleteCommand() {
    const currentInput = commandInput.value.toLowerCase();
    if (!currentInput) return;
    
    const matches = Object.keys(commands).filter(cmd => 
        cmd.toLowerCase().startsWith(currentInput)
    );
    
    if (matches.length === 1) {
        commandInput.value = matches[0];
    } else if (matches.length > 1) {
        addOutput(`Suggestions: ${matches.slice(0, 5).join(', ')}${matches.length > 5 ? '...' : ''}`, 'info');
        scrollToBottom();
    }
}

// Update command count display
function updateCommandCount() {
    commandCount.textContent = `${executedCommands} commands executed`;
}

// Scroll to bottom of terminal
function scrollToBottom() {
    terminalOutput.parentElement.scrollTop = terminalOutput.parentElement.scrollHeight;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl + L to clear
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        clearTerminal();
    }
    
    // Ctrl + H for help
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        executeCommand('help');
    }
    
    // Ctrl + K to clear input
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        commandInput.value = '';
    }
});
