// ============================================
// UPDATED PROFESSIONAL SCRIPT.JS
// ============================================

// Application State
const AppState = {
    commandsExecuted: 0,
    recentCommands: [],
    learnedCommands: new Set(),
    currentCategory: 'all',
    searchTerm: '',
    theme: 'dark',
    terminalHistory: [],
    userProgress: {
        basic: 0,
        files: 0,
        system: 0,
        network: 0,
        dev: 0,
        admin: 0
    }
};

// DOM Elements
const elements = {
    terminalOutput: document.getElementById('terminal-output'),
    commandInput: document.getElementById('command-input'),
    commandSearch: document.getElementById('command-search'),
    commandsGrid: document.getElementById('commands-grid'),
    recentList: document.getElementById('recent-list'),
    commandCount: document.getElementById('command-count'),
    currentTime: document.getElementById('current-time'),
    cpuUsage: document.getElementById('cpu-usage'),
    ramUsage: document.getElementById('ram-usage'),
    diskUsage: document.getElementById('disk-usage'),
    progressFill: document.getElementById('progress-fill'),
    progressPercent: document.getElementById('progress-percent'),
    learnedCount: document.getElementById('learned-count'),
    currentPath: document.getElementById('current-path')
};

// Initialize Application
function initializeApplication() {
    console.log('Ubuntu Terminal Simulator Pro v2.0 Initialized');
    
    // Load saved state
    loadAppState();
    
    // Initialize components
    initializeTerminal();
    initializePanels();
    initializeEventListeners();
    initializeSystemMonitor();
    
    // Show welcome message
    showWelcomeMessage();
    
    // Start clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Simulate system monitor updates
    setInterval(updateSystemMonitor, 5000);
}

// Initialize Terminal
function initializeTerminal() {
    // Focus input
    elements.commandInput.focus();
    
    // Load command history
    loadCommandHistory();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleGlobalShortcuts);
}

// Initialize Panels
function initializePanels() {
    // Load commands into grid
    loadCommandsGrid();
    
    // Load recent commands
    updateRecentCommands();
    
    // Setup category tabs
    setupCategoryTabs();
    
    // Setup search
    setupSearch();
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Command input
    elements.commandInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            executeCurrentCommand();
        }
    });
    
    // Search input
    elements.commandSearch.addEventListener('input', filterCommands);
    
    // Clear button
    document.querySelector('.input-btn[title="Clear Input"]').addEventListener('click', clearInput);
    
    // Run button
    document.querySelector('.run-btn').addEventListener('click', executeCurrentCommand);
    
    // Suggestion button
    document.querySelector('.input-btn[title="Suggestions"]').addEventListener('click', showCommandSuggestions);
}

// Initialize System Monitor
function initializeSystemMonitor() {
    // Set initial values
    updateSystemValues();
    
    // Update progress
    updateProgress();
}

// Show Welcome Message
function showWelcomeMessage() {
    const welcomeMessage = `
        <div class="command-output info">
            <div style="text-align: center;">
                <h3 style="color: var(--ubuntu-orange); margin-bottom: 15px;">
                    <i class="fab fa-ubuntu"></i> Welcome to Ubuntu Terminal Simulator Pro
                </h3>
                <p>🎯 <strong>Advanced Features:</strong></p>
                <ul style="text-align: left; margin: 15px 0;">
                    <li>✅ 50+ Linux commands with realistic outputs</li>
                    <li>✅ Interactive command panels with categories</li>
                    <li>✅ Real-time system monitoring</li>
                    <li>✅ Command history and suggestions</li>
                    <li>✅ Learning progress tracking</li>
                    <li>✅ Keyboard shortcuts support</li>
                </ul>
                <p>💡 <strong>Getting Started:</strong></p>
                <p>Type <code>help</code> for command reference</p>
                <p>Type <code>tutorial</code> for interactive guide</p>
                <p>Click commands in panels to insert them</p>
                <p>Try <code>system-info</code> for system status</p>
                <div style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                    <p><i class="fas fa-bolt"></i> <strong>Quick Tip:</strong> Press <code>Tab</code> for command suggestions</p>
                </div>
            </div>
        </div>
    `;
    
    elements.terminalOutput.innerHTML = welcomeMessage;
}

// Execute Current Command
function executeCurrentCommand() {
    const command = elements.commandInput.value.trim();
    if (!command) return;
    
    executeCommand(command);
}

// Execute Command
function executeCommand(command) {
    // Add command to output
    addCommandLine(command);
    
    // Get command data
    const cmdKey = command.toLowerCase();
    let commandData = commands[cmdKey];
    
    // Try partial match
    if (!commandData) {
        const baseCmd = cmdKey.split(' ')[0];
        commandData = commands[baseCmd] || commands['notfound'];
    }
    
    // Execute based on type
    if (commandData.type === 'clear') {
        clearTerminal();
    } else if (commandData.type === 'tutorial') {
        showTutorialModal();
    } else {
        const output = typeof commandData.output === 'function' 
            ? commandData.output(command) 
            : commandData.output;
        
        addOutput(output, commandData.type || 'success');
        
        // Mark as learned
        markCommandAsLearned(command);
    }
    
    // Update statistics
    updateCommandStatistics(command);
    
    // Clear input
    elements.commandInput.value = '';
    
    // Scroll to bottom
    scrollToBottom();
}

// Add Command Line to Output
function addCommandLine(command) {
    const commandLine = document.createElement('div');
    commandLine.className = 'command-line';
    commandLine.innerHTML = `
        <div style="display: flex; align-items: center; gap: 5px;">
            <span style="color: var(--terminal-green); font-weight: bold;">student@ubuntu</span>
            <span style="color: white;">:</span>
            <span style="color: var(--terminal-yellow); font-weight: bold;">~/projects</span>
            <span style="color: white; font-weight: bold;">$</span>
            <span style="color: white; margin-left: 10px;">${escapeHtml(command)}</span>
        </div>
    `;
    elements.terminalOutput.appendChild(commandLine);
}

// Add Output to Terminal
function addOutput(output, type = 'normal') {
    const outputElement = document.createElement('pre');
    outputElement.className = `command-output ${type}`;
    outputElement.textContent = output;
    elements.terminalOutput.appendChild(outputElement);
}

// Clear Terminal
function clearTerminal() {
    elements.terminalOutput.innerHTML = '';
    showWelcomeMessage();
}

// Clear Input
function clearInput() {
    elements.commandInput.value = '';
    elements.commandInput.focus();
}

// Insert Command from Panel
function insertCommand(cmd) {
    elements.commandInput.value = cmd;
    elements.commandInput.focus();
    
    // Show hint if needed
    if (cmd.includes('filename') || cmd.includes('file.txt')) {
        setTimeout(() => {
            addOutput(`💡 Tip: Replace placeholder with your actual file name`, 'info');
            scrollToBottom();
        }, 100);
    }
}

// Load Commands Grid
function loadCommandsGrid() {
    const categories = {
        all: Object.keys(commands).filter(cmd => !['notfound', 'clear', 'tutorial'].includes(cmd)),
        basic: ['help', 'ls', 'pwd', 'whoami', 'date', 'clear', 'history', 'man'],
        files: ['touch', 'mkdir', 'cp', 'mv', 'rm', 'cat', 'nano', 'find', 'grep', 'chmod', 'chown', 'tar'],
        system: ['uname', 'df', 'free', 'top', 'ps', 'uptime', 'lscpu', 'lsblk', 'lshw', 'systemctl'],
        network: ['ifconfig', 'ping', 'netstat', 'ss', 'curl', 'wget', 'nslookup', 'dig', 'traceroute', 'hostname'],
        dev: ['git', 'python3', 'node', 'docker', 'npm', 'java', 'gcc', 'make'],
        admin: ['sudo', 'apt', 'system-info', 'network-check', 'process-list', 'security-scan']
    };
    
    const filteredCommands = categories[AppState.currentCategory] || categories.all;
    
    let html = '';
    filteredCommands.forEach(cmd => {
        const command = commands[cmd];
        if (!command) return;
        
        const isLearned = AppState.learnedCommands.has(cmd);
        
        html += `
            <div class="command-card ${isLearned ? 'learned' : ''}" 
                 onclick="insertCommand('${cmd}')"
                 ondblclick="showCommandDetails('${cmd}')">
                <code>${cmd}</code>
                <p>${getCommandDescription(cmd)}</p>
                ${isLearned ? '<div class="badge badge-success" style="position: absolute; top: 10px; right: 10px; font-size: 0.7rem;">Learned</div>' : ''}
            </div>
        `;
    });
    
    elements.commandsGrid.innerHTML = html;
}

// Get Command Description
function getCommandDescription(cmd) {
    const descriptions = {
        'help': 'Show help message with all commands',
        'ls': 'List directory contents',
        'pwd': 'Print working directory',
        'whoami': 'Display current user',
        'date': 'Display current date and time',
        'clear': 'Clear terminal screen',
        'touch': 'Create empty file',
        'mkdir': 'Create directory',
        'cp': 'Copy files and directories',
        'mv': 'Move or rename files',
        'rm': 'Remove files or directories',
        'cat': 'Display file contents',
        'nano': 'Text editor',
        'find': 'Search for files',
        'grep': 'Search text in files',
        'chmod': 'Change file permissions',
        'chown': 'Change file owner',
        'tar': 'Archive files',
        'uname': 'System information',
        'df': 'Disk space usage',
        'free': 'Memory usage',
        'top': 'Display Linux processes',
        'ps': 'Report process status',
        'uptime': 'System uptime',
        'lscpu': 'CPU architecture information',
        'lsblk': 'List block devices',
        'lshw': 'Hardware information',
        'systemctl': 'Control systemd system',
        'ifconfig': 'Network interface configuration',
        'ping': 'Test network connectivity',
        'netstat': 'Network statistics',
        'ss': 'Socket statistics',
        'curl': 'Transfer data from URLs',
        'wget': 'Download files from the web',
        'nslookup': 'Query DNS servers',
        'dig': 'DNS lookup utility',
        'traceroute': 'Print network route',
        'hostname': 'Show system hostname',
        'git': 'Distributed version control',
        'python3': 'Python interpreter',
        'node': 'Node.js JavaScript runtime',
        'docker': 'Container platform',
        'npm': 'Node package manager',
        'java': 'Java runtime environment',
        'gcc': 'GNU Compiler Collection',
        'make': 'Build automation tool',
        'sudo': 'Execute as superuser',
        'apt': 'Package management',
        'system-info': 'Display system information',
        'network-check': 'Check network status',
        'process-list': 'Show running processes',
        'security-scan': 'Run security check'
    };
    
    return descriptions[cmd] || 'Linux command';
}

// Show Command Details
function showCommandDetails(cmd) {
    const command = commands[cmd];
    if (!command) return;
    
    const output = typeof command.output === 'function' 
        ? command.output(cmd) 
        : command.output;
    
    const modal = document.getElementById('tutorial-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="command-details">
            <div class="detail-header">
                <h4 style="color: var(--ubuntu-orange); margin-bottom: 10px;">
                    <code>${cmd}</code>
                </h4>
                <p style="color: #aaa; margin-bottom: 20px;">${getCommandDescription(cmd)}</p>
            </div>
            
            <div class="detail-section">
                <h5><i class="fas fa-code"></i> Syntax</h5>
                <pre class="code-block">${getCommandSyntax(cmd)}</pre>
            </div>
            
            <div class="detail-section">
                <h5><i class="fas fa-lightbulb"></i> Example</h5>
                <pre class="code-block">${getCommandExample(cmd)}</pre>
            </div>
            
            <div class="detail-section">
                <h5><i class="fas fa-info-circle"></i> Output</h5>
                <pre class="code-block" style="max-height: 200px; overflow-y: auto;">${output.substring(0, 500)}${output.length > 500 ? '...' : ''}</pre>
            </div>
            
            <div style="margin-top: 20px; display: flex; gap: 10px;">
                <button class="btn-primary" onclick="insertCommand('${cmd}'); closeModal('tutorial-modal')">
                    <i class="fas fa-play"></i> Try This Command
                </button>
                <button class="btn-secondary" onclick="markCommandAsLearned('${cmd}'); closeModal('tutorial-modal')">
                    <i class="fas fa-check"></i> Mark as Learned
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Get Command Syntax
function getCommandSyntax(cmd) {
    const syntax = {
        'ls': 'ls [OPTION]... [FILE]...',
        'grep': 'grep [OPTIONS] PATTERN [FILE]...',
        'chmod': 'chmod [OPTIONS] MODE FILE...',
        'find': 'find [PATH] [OPTIONS] [EXPRESSIONS]',
        'tar': 'tar [OPTIONS] [ARCHIVE] [FILE]...',
        'curl': 'curl [OPTIONS] [URL]...',
        'docker': 'docker [OPTIONS] COMMAND [ARG]...',
        'git': 'git [OPTIONS] COMMAND [ARGS]...'
    };
    
    return syntax[cmd] || `${cmd} [OPTIONS] [ARGUMENTS]`;
}

// Get Command Example
function getCommandExample(cmd) {
    const examples = {
        'ls': 'ls -la\n# List all files with details\nls -lh /home/user\n# List with human-readable sizes',
        'grep': 'grep "error" logfile.txt\n# Search for "error" in file\ngrep -r "function" src/\n# Search recursively in directory',
        'chmod': 'chmod 755 script.sh\n# Make script executable\nchmod u+x file.txt\n# Add execute permission for user',
        'find': 'find . -name "*.txt"\n# Find all txt files\nfind /var/log -size +100M\n# Find files larger than 100MB',
        'tar': 'tar -czf archive.tar.gz folder/\n# Create compressed archive\ntar -xzf archive.tar.gz\n# Extract archive',
        'curl': 'curl https://api.github.com\n# Fetch API data\ncurl -O https://example.com/file.zip\n# Download file',
        'git': 'git clone https://github.com/user/repo.git\n# Clone repository\ngit status\n# Check repository status',
        'docker': 'docker ps\n# List running containers\ndocker run -d nginx\n# Run nginx container'
    };
    
    return examples[cmd] || `${cmd} --help\n# Display help for this command`;
}

// Setup Category Tabs
function setupCategoryTabs() {
    document.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update category
            AppState.currentCategory = tab.dataset.category;
            
            // Reload commands grid
            loadCommandsGrid();
        });
    });
}

// Setup Search
function setupSearch() {
    elements.commandSearch.addEventListener('input', () => {
        AppState.searchTerm = elements.commandSearch.value.toLowerCase();
        filterCommands();
    });
}

// Filter Commands
function filterCommands() {
    const searchTerm = AppState.searchTerm;
    const cards = document.querySelectorAll('.command-card');
    
    let visibleCount = 0;
    const startTime = performance.now();
    
    cards.forEach(card => {
        const cmdText = card.querySelector('code').textContent.toLowerCase();
        const descText = card.querySelector('p').textContent.toLowerCase();
        
        if (cmdText.includes(searchTerm) || descText.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    const endTime = performance.now();
    document.getElementById('search-results').textContent = 
        `${visibleCount} commands found`;
    document.getElementById('search-time').textContent = 
        `${Math.round(endTime - startTime)}ms`;
}

// Update Recent Commands
function updateRecentCommands() {
    if (AppState.recentCommands.length === 0) {
        elements.recentList.innerHTML = '<div style="color: #777; font-style: italic;">No recent commands yet</div>';
        return;
    }
    
    let html = '';
    AppState.recentCommands.slice(0, 5).forEach(cmd => {
        html += `<div class="recent-item" onclick="insertCommand('${cmd}')">${cmd}</div>`;
    });
    
    elements.recentList.innerHTML = html;
}

// Update Command Statistics
function updateCommandStatistics(command) {
    // Increment count
    AppState.commandsExecuted++;
    elements.commandCount.textContent = AppState.commandsExecuted;
    
    // Add to recent
    if (!AppState.recentCommands.includes(command)) {
        AppState.recentCommands.unshift(command);
        if (AppState.recentCommands.length > 10) {
            AppState.recentCommands.pop();
        }
        updateRecentCommands();
    }
    
    // Add to history
    AppState.terminalHistory.push({
        command: command,
        timestamp: new Date().toISOString()
    });
    
    // Save state
    saveAppState();
}

// Mark Command as Learned
function markCommandAsLearned(command) {
    const baseCmd = command.split(' ')[0];
    if (!AppState.learnedCommands.has(baseCmd)) {
        AppState.learnedCommands.add(baseCmd);
        updateProgress();
        saveAppState();
        loadCommandsGrid();
    }
}

// Update Progress
function updateProgress() {
    const totalCommands = 50; // Approximate total
    const learnedCount = AppState.learnedCommands.size;
    const percentage = Math.min(Math.round((learnedCount / totalCommands) * 100), 100);
    
    elements.learnedCount.textContent = learnedCount;
    elements.progressPercent.textContent = `${percentage}%`;
    elements.progressFill.style.width = `${percentage}%`;
}

// Update Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    elements.currentTime.textContent = timeString;
}

// Update System Monitor
function updateSystemMonitor() {
    updateSystemValues();
}

// Update System Values
function updateSystemValues() {
    // Simulate realistic values
    const cpu = Math.floor(Math.random() * 20) + 2;
    const ram = Math.floor(Math.random() * 20) + 40;
    const disk = Math.floor(Math.random() * 10) + 25;
    
    elements.cpuUsage.textContent = `${cpu}%`;
    elements.ramUsage.textContent = `${ram}%`;
    elements.diskUsage.textContent = `${disk}%`;
    
    // Update colors based on usage
    elements.cpuUsage.style.color = cpu > 80 ? 'var(--terminal-red)' : 'var(--terminal-green)';
    elements.ramUsage.style.color = ram > 80 ? 'var(--terminal-red)' : 'var(--terminal-yellow)';
    elements.diskUsage.style.color = disk > 80 ? 'var(--terminal-red)' : 'var(--terminal-blue)';
}

// Show Command Suggestions
function showCommandSuggestions() {
    const currentInput = elements.commandInput.value.toLowerCase();
    if (!currentInput) {
        showAllCommands();
        return;
    }
    
    const suggestions = Object.keys(commands).filter(cmd => 
        cmd.toLowerCase().includes(currentInput) && 
        !['notfound', 'clear', 'tutorial'].includes(cmd)
    ).slice(0, 10);
    
    if (suggestions.length > 0) {
        const suggestionsText = suggestions.map(cmd => 
            `• ${cmd} - ${getCommandDescription(cmd)}`
        ).join('\n');
        
        addOutput(`💡 Suggestions for "${currentInput}":\n${suggestionsText}`, 'info');
        scrollToBottom();
    } else {
        addOutput(`No suggestions found for "${currentInput}"`, 'info');
        scrollToBottom();
    }
}

// Show All Commands
function showAllCommands() {
    const categories = {
        'Basic': ['help', 'ls', 'pwd', 'whoami', 'date', 'clear'],
        'Files': ['touch', 'mkdir', 'cp', 'mv', 'rm', 'cat'],
        'System': ['uname', 'df', 'free', 'top', 'ps', 'uptime'],
        'Network': ['ping', 'ifconfig', 'curl', 'wget'],
        'Development': ['git', 'python3', 'node', 'docker']
    };
    
    let output = '📚 All Available Commands:\n\n';
    for (const [category, cmds] of Object.entries(categories)) {
        output += `${category}:\n`;
        cmds.forEach(cmd => {
            output += `  ${cmd.padEnd(12)} - ${getCommandDescription(cmd)}\n`;
        });
        output += '\n';
    }
    
    output += '💡 Tip: Type "man [command]" for detailed help\n';
    output += '💡 Tip: Click commands in panels to insert them';
    
    addOutput(output, 'info');
    scrollToBottom();
}

// Handle Global Shortcuts
function handleGlobalShortcuts(e) {
    // Ctrl+L: Clear terminal
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        clearTerminal();
    }
    
    // Ctrl+K: Clear input
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        clearInput();
    }
    
    // Ctrl+H: Help
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        executeCommand('help');
    }
    
    // Ctrl+T: Tutorial
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        executeCommand('tutorial');
    }
    
    // Tab: Auto-complete
    if (e.key === 'Tab') {
        e.preventDefault();
        autoCompleteCommand();
    }
    
    // Up arrow: Command history
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateCommandHistory('up');
    }
    
    // Down arrow: Command history
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateCommandHistory('down');
    }
}

// Auto-complete Command
function autoCompleteCommand() {
    const currentInput = elements.commandInput.value.toLowerCase();
    if (!currentInput) return;
    
    const matches = Object.keys(commands).filter(cmd => 
        cmd.toLowerCase().startsWith(currentInput) &&
        !['notfound', 'clear', 'tutorial'].includes(cmd)
    );
    
    if (matches.length === 1) {
        elements.commandInput.value = matches[0];
    } else if (matches.length > 1) {
        const commonPrefix = getCommonPrefix(matches);
        if (commonPrefix.length > currentInput.length) {
            elements.commandInput.value = commonPrefix;
        } else {
            showCommandSuggestions();
        }
    }
}

// Get Common Prefix
function getCommonPrefix(strings) {
    if (strings.length === 0) return '';
    
    let prefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
        while (strings[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

// Navigate Command History
function navigateCommandHistory(direction) {
    if (!window.commandHistoryIndex) {
        window.commandHistoryIndex = -1;
    }
    
    const history = AppState.terminalHistory.map(h => h.command).reverse();
    
    if (direction === 'up') {
        if (window.commandHistoryIndex < history.length - 1) {
            window.commandHistoryIndex++;
            elements.commandInput.value = history[window.commandHistoryIndex];
        }
    } else if (direction === 'down') {
        if (window.commandHistoryIndex > 0) {
            window.commandHistoryIndex--;
            elements.commandInput.value = history[window.commandHistoryIndex];
        } else {
            window.commandHistoryIndex = -1;
            elements.commandInput.value = '';
        }
    }
}

// Scroll to Bottom
function scrollToBottom() {
    elements.terminalOutput.scrollTop = elements.terminalOutput.scrollHeight;
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Save App State
function saveAppState() {
    const state = {
        commandsExecuted: AppState.commandsExecuted,
        recentCommands: AppState.recentCommands,
        learnedCommands: Array.from(AppState.learnedCommands),
        terminalHistory: AppState.terminalHistory.slice(-100)
    };
    
    try {
        localStorage.setItem('ubuntuSimulatorState', JSON.stringify(state));
    } catch (e) {
        console.warn('Could not save state to localStorage:', e);
    }
}

// Load App State
function loadAppState() {
    try {
        const saved = localStorage.getItem('ubuntuSimulatorState');
        if (saved) {
            const state = JSON.parse(saved);
            
            AppState.commandsExecuted = state.commandsExecuted || 0;
            AppState.recentCommands = state.recentCommands || [];
            AppState.learnedCommands = new Set(state.learnedCommands || []);
            AppState.terminalHistory = state.terminalHistory || [];
            
            // Update UI
            elements.commandCount.textContent = AppState.commandsExecuted;
            updateRecentCommands();
            updateProgress();
        }
    } catch (e) {
        console.warn('Could not load state from localStorage:', e);
    }
}

// Load Command History
function loadCommandHistory() {
    // Already loaded in loadAppState
}

// Toggle Theme
function toggleTheme() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('light-theme', AppState.theme === 'light');
    
    // Update button icon
    const themeBtn = document.querySelector('.nav-btn[title*="Theme"]');
    if (themeBtn) {
        themeBtn.innerHTML = AppState.theme === 'dark' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
        themeBtn.title = AppState.theme === 'dark' 
            ? 'Switch to Light Mode' 
            : 'Switch to Dark Mode';
    }
}

// Show Tutorial Modal
function showTutorialModal() {
    const modal = document.getElementById('tutorial-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="tutorial-content">
            <h4 style="color: var(--ubuntu-orange); margin-bottom: 20px;">
                <i class="fas fa-graduation-cap"></i> Interactive Tutorial
            </h4>
            
            <div class="tutorial-steps">
                <div class="step">
                    <h5><span class="step-number">1</span> Getting Started</h5>
                    <p>Welcome to the Ubuntu Terminal Simulator! This is a safe environment to learn Linux commands.</p>
                    <ul>
                        <li>Type commands in the input field below the terminal</li>
                        <li>Click commands in the right panel to insert them</li>
                        <li>Press Enter to execute commands</li>
                    </ul>
                </div>
                
                <div class="step">
                    <h5><span class="step-number">2</span> Basic Navigation</h5>
                    <p>Try these essential commands:</p>
                    <pre class="code-block">pwd     # Show current directory
ls      # List files
cd      # Change directory
clear   # Clear terminal</pre>
                </div>
                
                <div class="step">
                    <h5><span class="step-number">3</span> File Operations</h5>
                    <p>Learn to work with files:</p>
                    <pre class="code-block">touch file.txt    # Create file
mkdir folder      # Create directory
cat file.txt      # View file content
rm file.txt       # Remove file</pre>
                </div>
                
                <div class="step">
                    <h5><span class="step-number">4</span> System Information</h5>
                    <p>Check your system status:</p>
                    <pre class="code-block">uname -a    # System info
df -h       # Disk space
free -h     # Memory usage
top         # Running processes</pre>
                </div>
                
                <div class="step">
                    <h5><span class="step-number">5</span> Tips & Tricks</h5>
                    <ul>
                        <li>Press <code>Tab</code> for command suggestions</li>
                        <li>Use <code>Ctrl+L</code> to clear terminal</li>
                        <li>Double-click commands to see details</li>
                        <li>Track your progress in the right panel</li>
                    </ul>
                </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <button class="btn-primary" onclick="startInteractiveTutorial()">
                    <i class="fas fa-play-circle"></i> Start Interactive Tutorial
                </button>
                <button class="btn-secondary" onclick="closeModal('tutorial-modal')" style="margin-left: 10px;">
                    Close
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Start Interactive Tutorial
function startInteractiveTutorial() {
    closeModal('tutorial-modal');
    
    const steps = [
        { command: 'pwd', instruction: 'First, let\'s check where we are. Type "pwd" (print working directory)' },
        { command: 'ls', instruction: 'Great! Now let\'s see what files are here. Type "ls" (list files)' },
        { command: 'mkdir tutorial', instruction: 'Let\'s create a folder. Type "mkdir tutorial" (make directory)' },
        { command: 'cd tutorial', instruction: 'Now move into that folder. Type "cd tutorial" (change directory)' },
        { command: 'touch hello.txt', instruction: 'Create a file. Type "touch hello.txt"' },
        { command: 'echo "Hello Ubuntu" > hello.txt', instruction: 'Add text to the file. Type "echo "Hello Ubuntu" > hello.txt"' },
        { command: 'cat hello.txt', instruction: 'View the file content. Type "cat hello.txt"' },
        { command: 'cd ..', instruction: 'Go back to the parent folder. Type "cd .."' },
        { command: 'clear', instruction: 'Finally, clear the terminal. Type "clear"' }
    ];
    
    let currentStep = 0;
    
    function nextStep() {
        if (currentStep < steps.length) {
            const step = steps[currentStep];
            addOutput(`📘 ${step.instruction}\nType: ${step.command}`, 'info');
            scrollToBottom();
            
            // Auto-insert command after 3 seconds
            setTimeout(() => {
                elements.commandInput.value = step.command;
                elements.commandInput.focus();
            }, 3000);
            
            currentStep++;
        }
    }
    
    // Start with first step
    nextStep();
    
    // Listen for command execution
    const originalExecute = executeCommand;
    window.executeCommand = function(command) {
        originalExecute(command);
        
        // Check if it matches current tutorial step
        const expectedCommand = steps[currentStep - 1]?.command;
        if (expectedCommand && command.includes(expectedCommand.split(' ')[0])) {
            setTimeout(nextStep, 1500);
        }
    };
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Run System Check
function runSystemCheck() {
    executeCommand('system-info');
}

// Run Network Test
function runNetworkTest() {
    executeCommand('network-check');
}

// Show Process Monitor
function showProcessMonitor() {
    executeCommand('process-list');
}

// Run Security Scan
function runSecurityScan() {
    const output = `
============================================
           SECURITY SCAN RESULTS
============================================
🔒 Firewall Status: ACTIVE
✅ SSH: Password authentication disabled
✅ Updates: All security patches applied
✅ Users: No empty passwords detected
⚠️  Warning: Regular backups not configured
✅ Logging: System logs active
✅ Fail2ban: Running (protects against brute force)
✅ SELinux: Enforcing mode

RECOMMENDATIONS:
1. Enable automatic security updates
2. Configure regular backup schedule
3. Review user permissions monthly
4. Monitor auth logs for suspicious activity

Scan completed: ${new Date().toLocaleString()}
============================================
    `;
    
    addOutput(output, 'info');
    scrollToBottom();
}

// Show File Explorer
function showFileExplorer() {
    const output = `
============================================
           VIRTUAL FILE EXPLORER
============================================
📁 /home/student/projects/
├── 📁 ubuntu-simulator/
│   ├── 📄 index.html
│   ├── 📄 style.css
│   ├── 📄 script.js
│   ├── 📄 commands.js
│   └── 📄 README.md
├── 📁 Documents/
│   ├── 📄 notes.txt
│   ├── 📄 assignment.pdf
│   └── 📁 class-notes/
├── 📁 Downloads/
│   ├── 📄 ubuntu-22.04.iso
│   └── 📁 temp/
├── 📁 Desktop/
│   ├── 📁 Projects/
│   └── 📄 todo.txt
├── 📁 Music/
├── 📁 Pictures/
├── 📁 Public/
├── 📁 Templates/
└── 📁 Videos/

💡 Tips:
• Use 'ls' to list files in current directory
• Use 'cd' to change directories
• Use 'pwd' to show current location
• Use 'find' to search for files
============================================
    `;
    
    addOutput(output, 'info');
    scrollToBottom();
}

// Show Cheat Sheet
function showCheatSheet() {
    const output = `
============================================
           LINUX COMMAND CHEAT SHEET
============================================
📁 FILE MANAGEMENT:
  ls -la          List all files with details
  cp file1 file2  Copy file1 to file2
  mv old new      Move/rename file
  rm file         Remove file
  find . -name "*.txt"  Find text files

📝 TEXT PROCESSING:
  grep "text" file    Search for text
  cat file            Display file content
  head -n 10 file     Show first 10 lines
  tail -f logfile     Follow log file

⚙️ SYSTEM INFO:
  df -h           Disk space (human readable)
  free -h         Memory usage
  top             Process monitor
  ps aux          All running processes

🌐 NETWORK:
  ping host       Test connectivity
  ifconfig        Network interfaces
  netstat -tulpn  Listening ports
  curl URL        Fetch URL content

🛠️ PERMISSIONS:
  chmod 755 file  rwxr-xr-x permissions
  chown user:group file  Change owner
  sudo command    Run as superuser

💡 TIPS:
• Tab autocompletes commands
• Ctrl+C cancels current command
• Ctrl+L clears terminal
• man command shows manual
• command --help shows options
============================================
    `;
    
    addOutput(output, 'info');
    scrollToBottom();
}

// Export History
function exportHistory() {
    const historyText = AppState.terminalHistory
        .map((h, i) => `${i + 1}. ${h.timestamp} - ${h.command}`)
        .join('\n');
    
    const blob = new Blob([`Ubuntu Terminal Simulator - Command History\n\n${historyText}`], 
        { type: 'text/plain' });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `terminal-history-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    addOutput('✅ Command history exported successfully!', 'success');
    scrollToBottom();
}

// Show About
function showAbout() {
    const modal = document.getElementById('tutorial-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="about-content">
            <div style="text-align: center; margin-bottom: 30px;">
                <div style="font-size: 3rem; color: var(--ubuntu-orange); margin-bottom: 15px;">
                    <i class="fab fa-ubuntu"></i>
                </div>
                <h3 style="color: var(--ubuntu-orange); margin-bottom: 10px;">
                    Ubuntu Terminal Simulator Pro
                </h3>
                <p style="color: #aaa;">Version 2.0</p>
            </div>
            
            <div class="about-section">
                <h5><i class="fas fa-info-circle"></i> About This Project</h5>
                <p>This is an interactive web-based Ubuntu terminal simulator designed to help students learn Linux commands in a safe, controlled environment.</p>
            </div>
            
            <div class="about-section">
                <h5><i class="fas fa-graduation-cap"></i> Educational Purpose</h5>
                <p>Created as part of the Operating Systems course at ITC Cambodia to demonstrate understanding of Linux systems, web development, and interactive learning tools.</p>
            </div>
            
            <div class="about-section">
                <h5><i class="fas fa-code"></i> Technology Stack</h5>
                <ul>
                    <li>Frontend: HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>Icons: Font Awesome 6</li>
                    <li>Hosting: GitHub Pages</li>
                    <li>Version Control: Git & GitHub</li>
                </ul>
            </div>
            
            <div class="about-section">
                <h5><i class="fas fa-feather-alt"></i> Features</h5>
                <ul>
                    <li>50+ Linux commands with realistic outputs</li>
                    <li>Interactive command panels with search</li>
                    <li>Learning progress tracking</li>
                    <li>System monitoring dashboard</li>
                    <li>Command history and export</li>
                    <li>Interactive tutorials</li>
                </ul>
            </div>
            
            <div class="about-section">
                <h5><i class="fas fa-user"></i> Author</h5>
                <p><strong>lyzatouy-prog</strong><br>
                ITC Student - Cambodia<br>
                Operating Systems Course Project</p>
            </div>
            
            <div class="about-section">
                <h5><i class="fas fa-calendar"></i> Project Timeline</h5>
                <p>Started: January 2024<br>
                Last Updated: ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <button class="btn-secondary" onclick="closeModal('tutorial-modal')">
                    Close
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Show Keyboard Shortcuts
function showKeyboardShortcuts() {
    const modal = document.getElementById('tutorial-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="shortcuts-content">
            <h4 style="color: var(--ubuntu-orange); margin-bottom: 20px;">
                <i class="fas fa-keyboard"></i> Keyboard Shortcuts
            </h4>
            
            <div class="shortcuts-grid">
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Ctrl</kbd> + <kbd>L</kbd>
                    </div>
                    <div class="shortcut-desc">Clear terminal</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Ctrl</kbd> + <kbd>K</kbd>
                    </div>
                    <div class="shortcut-desc">Clear input field</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Ctrl</kbd> + <kbd>H</kbd>
                    </div>
                    <div class="shortcut-desc">Show help</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Ctrl</kbd> + <kbd>T</kbd>
                    </div>
                    <div class="shortcut-desc">Show tutorial</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Tab</kbd>
                    </div>
                    <div class="shortcut-desc">Auto-complete command</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>↑</kbd> / <kbd>↓</kbd>
                    </div>
                    <div class="shortcut-desc">Navigate command history</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Ctrl</kbd> + <kbd>C</kbd>
                    </div>
                    <div class="shortcut-desc">Cancel current command (if supported)</div>
                </div>
                
                <div class="shortcut-item">
                    <div class="shortcut-keys">
                        <kbd>Ctrl</kbd> + <kbd>D</kbd>
                    </div>
                    <div class="shortcut-desc">Exit terminal (in real Linux)</div>
                </div>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                <p style="color: #aaa; margin: 0;">
                    <i class="fas fa-lightbulb"></i> 
                    <strong>Tip:</strong> Most shortcuts work both in the simulator and real Linux terminals!
                </p>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <button class="btn-secondary" onclick="closeModal('tutorial-modal')">
                    Close
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// Initialize when page loads
window.addEventListener('load', initializeApplication);
