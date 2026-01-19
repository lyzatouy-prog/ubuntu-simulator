// ============================================
// COMPLETE COMMANDS DATABASE - 50+ COMMANDS
// ============================================

const commands = {
    // ===== BASIC COMMANDS =====
    'help': {
        output: `============================================
        UBUNTU TERMINAL SIMULATOR PRO - HELP
============================================

📚 AVAILABLE COMMANDS (50+ Total)

📁 BASIC COMMANDS:
    help        - Display this help message
    clear       - Clear terminal screen
    pwd         - Print working directory
    ls          - List directory contents
    cd          - Change directory
    whoami      - Display current user
    date        - Display current date/time
    history     - Show command history
    man         - Display manual pages
    echo        - Display a line of text

📝 FILE OPERATIONS:
    touch       - Create empty file
    mkdir       - Create directory
    cp          - Copy files/directories
    mv          - Move/rename files
    rm          - Remove files/directories
    cat         - Display file content
    nano        - Text editor
    vim         - Advanced text editor
    find        - Search for files
    grep        - Search text in files
    chmod       - Change file permissions
    chown       - Change file owner
    chgrp       - Change file group
    tar         - Archive files
    gzip        - Compress files
    zip         - Create zip archive

⚙️ SYSTEM INFORMATION:
    uname       - System information
    df          - Disk space usage
    free        - Memory usage
    top         - Process monitor
    htop        - Interactive process viewer
    ps          - Process status
    uptime      - System uptime
    lscpu       - CPU information
    lsblk       - Block devices
    lshw        - Hardware information
    lsusb       - USB devices
    lspci       - PCI devices
    systemctl   - Control systemd system
    service     - Run system V init script
    journalctl  - View system logs

🌐 NETWORK COMMANDS:
    ifconfig    - Network interfaces
    ip          - Show/manipulate routing
    ping        - Test network connectivity
    netstat     - Network statistics
    ss          - Socket statistics
    curl        - Transfer data from URLs
    wget        - Download files from web
    nslookup    - Query DNS servers
    dig         - DNS lookup utility
    host        - DNS lookup utility
    traceroute  - Print network route
    tracepath   - Trace path to network host
    nmap        - Network exploration tool
    iptables    - Firewall configuration
    ssh         - Secure shell client
    scp         - Secure copy

🛠️ DEVELOPMENT TOOLS:
    git         - Distributed version control
    python3     - Python interpreter
    node        - Node.js JavaScript runtime
    npm         - Node package manager
    docker      - Container platform
    docker-compose - Multi-container Docker apps
    java        - Java runtime environment
    javac       - Java compiler
    gcc         - GNU Compiler Collection
    g++         - GNU C++ compiler
    make        - Build automation tool
    cmake       - Cross-platform build system
    gdb         - GNU Debugger
    valgrind    - Memory debugging tool

🔧 ADMINISTRATION:
    sudo        - Execute as superuser
    apt         - Package management (Debian/Ubuntu)
    apt-get     - APT package handling utility
    dpkg        - Package manager (Debian)
    yum         - Package manager (RHEL/CentOS)
    system-info - Display comprehensive system info
    network-check - Check network status
    process-list - Show running processes
    security-scan - Run security check
    update-system - Update system packages
    reboot      - Restart system
    shutdown    - Shutdown system
    adduser     - Add new user
    deluser     - Delete user
    passwd      - Change user password
    crontab     - Schedule periodic tasks

💡 SPECIAL COMMANDS:
    tutorial    - Interactive learning tutorial
    cheat-sheet - Linux command reference
    file-explorer - Virtual file browser
    system-monitor - Real-time system monitoring
    export-history - Export command history

🎯 QUICK START:
1. Type 'tutorial' for guided learning
2. Click commands in panels to insert them
3. Use tabs to browse command categories
4. Search for specific commands
5. Track your learning progress

⌨️ KEYBOARD SHORTCUTS:
• Tab          - Auto-complete commands
• Ctrl+L       - Clear terminal
• Ctrl+K       - Clear input field
• Ctrl+H       - Show help
• ↑/↓          - Command history
• Ctrl+C       - Cancel command

============================================
        Happy Learning! 🐧
============================================`,
        type: 'info'
    },

    'clear': {
        output: '',
        type: 'clear'
    },

    'tutorial': {
        output: 'Starting interactive tutorial...',
        type: 'tutorial'
    },

    'pwd': {
        output: '/home/student/projects/ubuntu-simulator',
        type: 'success'
    },

    'ls': {
        output: `Desktop    Documents  Downloads  Music      Pictures
Public     Templates  Videos     bin        dev
etc        home       lib        media      mnt
opt        proc       root       run        sbin
srv        sys        tmp        usr        var`,
        type: 'success'
    },

    'ls -la': {
        output: `total 108
drwxr-xr-x  24 student student  4096 Jan 15 10:30 .
drwxr-xr-x   4 student student  4096 Jan 15 09:45 ..
-rw-r--r--   1 student student   220 Jan 15 09:45 .bash_logout
-rw-r--r--   1 student student  3771 Jan 15 09:45 .bashrc
-rw-r--r--   1 student student   807 Jan 15 09:45 .profile
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Desktop
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Documents
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Downloads
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Music
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Pictures
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Public
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Templates
drwxr-xr-x   2 student student  4096 Jan 15 10:15 Videos
drwxr-xr-x   8 student student  4096 Jan 15 10:30 ubuntu-simulator
lrwxrwxrwx   1 student student     7 Jan 15 09:45 bin -> usr/bin
drwxr-xr-x   4 student student  4096 Jan 15 09:45 dev
drwxr-xr-x 142 student student 12288 Jan 15 10:00 etc
drwxr-xr-x   3 student student  4096 Jan 15 09:45 home
lrwxrwxrwx   1 student student     7 Jan 15 09:45 lib -> usr/lib
lrwxrwxrwx   1 student student     9 Jan 15 09:45 lib64 -> usr/lib64
drwxr-xr-x   2 student student  4096 Jan 15 09:45 media
drwxr-xr-x   2 student student  4096 Jan 15 09:45 mnt
drwxr-xr-x   3 student student  4096 Jan 15 09:45 opt
dr-xr-xr-x 267 student student     0 Jan 15 09:45 proc
drwx------   6 student student  4096 Jan 15 10:15 root
drwxr-xr-x  37 student student  1180 Jan 15 10:30 run
lrwxrwxrwx   1 student student     8 Jan 15 09:45 sbin -> usr/sbin
drwxr-xr-x   2 student student  4096 Jan 15 09:45 srv
dr-xr-xr-x  13 student student     0 Jan 15 09:45 sys
drwxrwxrwt  14 student student  4096 Jan 15 10:30 tmp
drwxr-xr-x  14 student student  4096 Jan 15 09:45 usr
drwxr-xr-x  14 student student  4096 Jan 15 09:45 var`,
        type: 'success'
    },

    'whoami': {
        output: 'student',
        type: 'success'
    },

    'date': {
        output: () => {
            const now = new Date();
            return now.toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'short'
            });
        },
        type: 'success'
    },

    'history': {
        output: `    1  pwd
    2  ls -la
    3  whoami
    4  date
    5  uname -a
    6  df -h
    7  free -h
    8  ps aux | head -10
    9  clear
   10  history`,
        type: 'success'
    },

    'man ls': {
        output: `LS(1)                     User Commands                    LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List  information  about  the FILEs (the current directory by default).
       Sort entries alphabetically if none of -cftuvSUX nor --sort is speci‐
       fied.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --all
              do not ignore entries starting with .

       -A, --almost-all
              do not list implied . and ..

       --author
              with -l, print the author of each file

       -b, --escape
              print C-style escapes for nongraphic characters

       --block-size=SIZE
              with -l, scale sizes by SIZE when printing them; e.g.,  '--block-size=M';
              see SIZE format below

       -B, --ignore-backups
              do not list implied entries ending with ~

       -c     with -lt: sort by, and show, ctime (time of last modification of
              file status information); with -l: show ctime and sort by name;
              otherwise: sort by ctime, newest first

       -C     list entries by columns

       --color[=WHEN]
              colorize the output; WHEN can be 'always' (default if omitted),
              'auto', or 'never'; more info below

       -d, --directory
              list directories themselves, not their contents

       -D, --dired
              generate output designed for Emacs' dired mode

       -f     do not sort, enable -aU, disable -ls --color

       -F, --classify
              append indicator (one of */=>@|) to entries

       --file-type
              likewise, except do not append '*'

       --format=WORD
              across -x, commas -m, horizontal -x, long -l, single-column -1,
              verbose -l, vertical -C

       --full-time
              like -l --time-style=full-iso

       -g     like -l, but do not list owner

       --group-directories-first
              group directories before files;
              can be augmented with a --sort option, but any use of
              --sort=none (-U) disables grouping

       -G, --no-group
              in a long listing, don't print group names

       -h, --human-readable
              with -l and -s, print sizes like 1K 234M 2G etc.

       --si   likewise, but use powers of 1000 not 1024

       -H, --dereference-command-line
              follow symbolic links listed on the command line

       --dereference-command-line-symlink-to-dir
              follow each command line symbolic link that points to a directory

       --hide=PATTERN
              do not list implied entries matching shell PATTERN (overridden by -a or -A)

       --hyperlink[=WHEN]
              hyperlink file names; WHEN can be 'always', 'auto', or 'never'

       --indicator-style=WORD
              append indicator with style WORD to entry names:
              none (default), slash (-p), file-type (--file-type), classify (-F)

       -i, --inode
              print the index number of each file

       -I, --ignore=PATTERN
              do not list implied entries matching shell PATTERN

       -k, --kibibytes
              default to 1024-byte blocks for disk usage

       -l     use a long listing format

       -L, --dereference
              when showing file information for a symbolic link, show
              information  for  the file the link references rather than for
              the link itself

       -m     fill width with a comma separated list of entries

       -n, --numeric-uid-gid
              like -l, but list numeric user and group IDs

       -N, --literal
              print entry names without quoting

       -o     like -l, but do not list group information

       -p, --indicator-style=slash
              append / indicator to directories

       -q, --hide-control-chars
              print ? instead of non graphic characters

       --show-control-chars
              show non graphic characters as-is (default unless program is 'ls'
              and output is a terminal)

       -Q, --quote-name
              enclose entry names in double quotes

       --quoting-style=WORD
              use quoting style WORD for entry names: literal, locale, shell,
              shell-always, shell-escape, shell-escape-always, c, escape

       -r, --reverse
              reverse order while sorting

       -R, --recursive
              list subdirectories recursively

       -s, --size
              print the allocated size of each file, in blocks

       -S     sort by file size, largest first

       --sort=WORD
              sort by WORD instead of name: none (-U), size (-S), time (-t),
              version (-v), extension (-X)

       --time=WORD
              with -l, show time as WORD instead of default modification time:
              atime or access or use (-u); ctime or status (-c); also use
              specified time as sort key if --sort=time

       --time-style=TIME_STYLE
              time/date format with -l; see TIME_STYLE below

       -t     sort by modification time, newest first

       -T, --tabsize=COLS
              assume tab stops at each COLS instead of 8

       -u     with -lt: sort by, and show, access time; with -l: show access
              time and sort by name; otherwise: sort by access time, newest first

       -U     do not sort; list entries in directory order

       -v     natural sort of (version) numbers within text

       -w, --width=COLS
              set output width to COLS.  0 means no limit

       -x     list entries by lines instead of by columns

       -X     sort alphabetically by entry extension

       -Z, --context
              print any security context of each file

       -1     list one file per line.  Avoid '\n' with -q or -b

       --help display this help and exit

       --version
              output version information and exit

SIZE is an integer and optional unit (example: 10M is 10*1024*1024).  Units
are K, M, G, T, P, E, Z, Y (powers of 1024) or KB, MB, ... (powers of 1000).

TIME_STYLE can be full-iso, long-iso, iso, locale, or +FORMAT.
FORMAT is interpreted like in date(1).  If FORMAT is FORMAT1<newline>FORMAT2,
then FORMAT1 applies to non-recent files and FORMAT2 to recent files.

Using color to distinguish file types is disabled both by default and
with --color=never.  With --color=auto, ls emits color codes only when
standard output is connected to a terminal.  The LS_COLORS environment
variable can change the settings.

Exit status:
 0  if OK,
 1  if minor problems (e.g., cannot access subdirectory),
 2  if serious trouble (e.g., cannot access command-line argument).

AUTHOR
       Written by Richard M. Stallman and David MacKenzie.

REPORTING BUGS
       GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
       Report ls translation bugs to <https://translationproject.org/team/>

COPYRIGHT
       Copyright © 2020 Free Software Foundation, Inc.  License GPLv3+: GNU GPL
       version 3 or later <https://gnu.org/licenses/gpl.html>.
       This is free software: you are free to change and redistribute it.
       There is NO WARRANTY, to the extent permitted by law.

SEE ALSO
       Full documentation <https://www.gnu.org/software/coreutils/ls>
       or available locally via: info '(coreutils) ls invocation'

GNU coreutils 8.32                January 2023                     LS(1)`,
        type: 'info'
    },

    'echo "Hello Ubuntu"': {
        output: 'Hello Ubuntu',
        type: 'success'
    },

    // ===== FILE OPERATIONS =====
    'touch file.txt': {
        output: 'File "file.txt" created successfully.',
        type: 'success'
    },

    'mkdir new_folder': {
        output: 'Directory "new_folder" created successfully.',
        type: 'success'
    },

    'cp file.txt backup.txt': {
        output: 'File copied: file.txt → backup.txt',
        type: 'success'
    },

    'mv old.txt new.txt': {
        output: 'File renamed/moved: old.txt → new.txt',
        type: 'success'
    },

    'rm file.txt': {
        output: 'File "file.txt" removed successfully.',
        type: 'success'
    },

    'rm -rf folder': {
        output: 'Directory "folder" and all contents removed.',
        type: 'success'
    },

    'cat file.txt': {
        output: `This is the content of file.txt

Welcome to Ubuntu Terminal Simulator Pro!
This is a sample text file for learning Linux commands.

Line 1: Learning Linux is essential for system administration.
Line 2: Practice commands regularly to build muscle memory.
Line 3: Ubuntu is one of the most popular Linux distributions.
Line 4: This simulator helps you learn safely without risk.
Line 5: Always read man pages for detailed command information.

End of file content.`,
        type: 'success'
    },

    'nano file.txt': {
        output: `GNU nano 6.2                     file.txt                        

Welcome to the nano text editor!

This is a simple text editor that comes with Ubuntu.
You can edit files directly from the terminal.

Basic nano commands:
^O   Write Out (Save)
^X   Exit
^G   Get Help
^K   Cut Text
^U   Uncut Text
^W   Where Is (Search)
^\   Replace

[ File loaded successfully. Press Ctrl+X to exit. ]`,
        type: 'info'
    },

    'vim file.txt': {
        output: `VIM - Vi Improved 8.2

Welcome to Vim! This is an advanced text editor.

Basic Vim commands:
i     - Insert mode
ESC   - Normal mode
:w    - Save file
:q    - Quit
:wq   - Save and quit
:q!   - Quit without saving
dd    - Delete line
yy    - Yank (copy) line
p     - Paste

Vim has two main modes:
1. Normal mode (for navigation and commands)
2. Insert mode (for typing text)

Type ':help' for extensive documentation.

[ file.txt 10L, 300C ]`,
        type: 'info'
    },

    'find . -name "*.txt"': {
        output: `./file.txt
./Documents/notes.txt
./Downloads/todo.txt
./backup.txt
./config/settings.txt
./logs/error.txt`,
        type: 'success'
    },

    'find /home -type f -size +100M': {
        output: `/home/student/Downloads/ubuntu-22.04.iso
/home/student/Videos/tutorial.mp4
/home/student/backup/system-backup.tar.gz`,
        type: 'success'
    },

    'grep "error" logfile.txt': {
        output: `2024-01-15 10:15:23 ERROR: Connection timeout
2024-01-15 10:30:45 ERROR: Database connection failed
2024-01-15 11:05:12 ERROR: Permission denied`,
        type: 'success'
    },

    'grep -r "TODO" .': {
        output: `./src/main.js:// TODO: Implement error handling
./src/utils.js:// TODO: Optimize this function
./README.md:TODO: Add installation instructions
./package.json:  "TODO": "Add tests"`,
        type: 'success'
    },

    'chmod 755 script.sh': {
        output: 'Permissions changed: -rwxr-xr-x script.sh',
        type: 'success'
    },

    'chmod +x script.sh': {
        output: 'Execute permission added for all users: script.sh',
        type: 'success'
    },

    'chown student:student file.txt': {
        output: 'Ownership changed: student:student file.txt',
        type: 'success'
    },

    'chgrp developers project/': {
        output: 'Group changed to "developers" for project/ directory',
        type: 'success'
    },

    'tar -czf archive.tar.gz folder/': {
        output: 'Compressed archive created: archive.tar.gz',
        type: 'success'
    },

    'tar -xzf archive.tar.gz': {
        output: 'Archive extracted successfully.',
        type: 'success'
    },

    'gzip largefile.txt': {
        output: 'File compressed: largefile.txt.gz (compression ratio: 65%)',
        type: 'success'
    },

    'gunzip largefile.txt.gz': {
        output: 'File decompressed: largefile.txt',
        type: 'success'
    },

    'zip -r project.zip project/': {
        output: 'Zip archive created: project.zip',
        type: 'success'
    },

    'unzip project.zip': {
        output: 'Archive:  project.zip
  inflating: project/index.html
  inflating: project/style.css
  inflating: project/script.js',
        type: 'success'
    },

    // ===== SYSTEM INFORMATION =====
    'uname -a': {
        output: 'Linux ubuntu-server 5.15.0-76-generic #83-Ubuntu SMP Thu Jun 15 19:16:32 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux',
        type: 'success'
    },

    'uname -r': {
        output: '5.15.0-76-generic',
        type: 'success'
    },

    'uname -s': {
        output: 'Linux',
        type: 'success'
    },

    'df -h': {
        output: `Filesystem      Size  Used Avail Use% Mounted on
udev            3.9G     0  3.9G   0% /dev
tmpfs           788M  1.7M  786M   1% /run
/dev/sda1        98G   25G   69G  27% /
tmpfs           3.9G     0  3.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           3.9G     0  3.9G   0% /sys/fs/cgroup
/dev/sdb1       197G   45G  143G  24% /data
/dev/sdc1       500G  120G  355G  25% /home
tmpfs           788M  4.0K  788M   1% /run/user/1000`,
        type: 'success'
    },

    'df -i': {
        output: `Filesystem      Inodes  IUsed   IFree IUse% Mounted on
udev           1015000    604 1014396    1% /dev
tmpfs          1017120   1103 1016017    1% /run
/dev/sda1      6553600 345600 6208000    6% /
tmpfs          1017120      1 1017119    1% /dev/shm
tmpfs          1017120      6 1017114    1% /run/lock
tmpfs          1017120     18 1017102    1% /sys/fs/cgroup
/dev/sdb1      13107200 123456 12983744   1% /data
/dev/sdc1      32768000 456789 32311211   2% /home
tmpfs          1017120     25 1017095    1% /run/user/1000`,
        type: 'info'
    },

    'free -h': {
        output: `               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.1Gi       4.2Gi       213Mi       1.4Gi       5.2Gi
Swap:          2.0Gi       0.0Ki       2.0Gi`,
        type: 'success'
    },

    'free -m': {
        output: `               total        used        free      shared  buff/cache   available
Mem:            7904        2154        4308         218        1442        5324
Swap:           2047           0        2047`,
        type: 'info'
    },

    'top': {
        output: `top - 10:30:45 up 2 days,  5:15,  1 user,  load average: 0.08, 0.03, 0.01
Tasks: 245 total,   1 running, 244 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.3 us,  0.7 sy,  0.0 ni, 97.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   7904.2 total,   4218.3 free,   1234.5 used,   2451.4 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.

    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
   1001 student   20   0   12344   4568   3124 S   2.3   0.1   0:00.05 bash
   1002 student   20   0   23456   7890   4567 S   1.0   0.1   0:00.12 node
   1003 student   20   0   34567   1234    890 S   0.3   0.0   0:00.03 sshd
    857 root      20   0   56789  12345   6789 S   0.1   0.2   0:05.34 systemd
    921 postgres  20   0  123456  34567   7890 S   0.1   0.4   0:12.34 postgres
    934 root      20   0   23456   5678   1234 S   0.0   0.1   0:01.23 nginx
   1234 mysql     20   0  456789  67890   2345 S   0.0   0.9   0:23.45 mysqld`,
        type: 'info'
    },

    'htop': {
        output: `  CPU[||||||||||||||||||||                   24.3%]   Tasks: 245, 1 thr; 1 running
  Mem[|||||||||||||||||||||||||||||       2.1/7.7G]   Load average: 0.08 0.03 0.01
  Swp[|                              0.0/2.0G]   Uptime: 2 days, 05:15:00

    PID USER      PRI  NI  VIRT   RES   SHR S CPU% MEM%   TIME+  Command
   1001 student    20   0 12344  4568  3124 S  2.3  0.1  0:00.05 bash
   1002 student    20   0 23456  7890  4567 S  1.0  0.1  0:00.12 node
   1003 student    20   0 34567  1234   890 S  0.3  0.0  0:00.03 sshd
    857 root       20   0 56789 12345  6789 S  0.1  0.2  0:05.34 systemd
    921 postgres   20   0 123456 34567 7890 S  0.1  0.4  0:12.34 postgres
    934 root       20   0 23456  5678  1234 S  0.0  0.1  0:01.23 nginx

F1Help  F2Setup F3SearchF4FilterF5Tree  F6SortByF7Nice -F8Nice +F9Kill  F10Quit`,
        type: 'info'
    },

    'ps aux': {
        output: `USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0 169716 13072 ?        Ss   10:15   0:02 /sbin/init
root         2  0.0  0.0      0     0 ?        S    10:15   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        I<   10:15   0:00 [rcu_gp]
root         4  0.0  0.0      0     0 ?        I<   10:15   0:00 [rcu_par_gp]
root         6  0.0  0.0      0     0 ?        I<   10:15   0:00 [kworker/0:0H-kb]
student   1001  0.0  0.0  12344  4568 pts/0    Ss+  10:30   0:00 -bash
student   1002  0.0  0.1  23456  7890 pts/0    S+   10:30   0:00 node app.js
student   1003  0.0  0.0  34567  1234 ?        S    10:30   0:00 sshd: student@pts/1
root       857  0.0  0.2  56789 12345 ?        Ss   10:15   0:05 /usr/sbin/sshd -D
postgres   921  0.0  0.4 123456 34567 ?        Ss   10:15   0:12 /usr/lib/postgresql/14/bin/postgres
root       934  0.0  0.1  23456  5678 ?        Ss   10:15   0:01 nginx: master process /usr/sbin/nginx
mysql     1234  0.0  0.9 456789 67890 ?        Ssl  10:15   0:23 /usr/sbin/mysqld`,
        type: 'info'
    },

    'ps aux | grep nginx': {
        output: `root       934  0.0  0.1  23456  5678 ?        Ss   10:15   0:01 nginx: master process
www-data   935  0.0  0.0  24567  1234 ?        S    10:15   0:00 nginx: worker process
www-data   936  0.0  0.0  24567  1234 ?        S    10:15   0:00 nginx: worker process
student   1235  0.0  0.0   2345   678 pts/0    S+   10:31   0:00 grep --color=auto nginx`,
        type: 'success'
    },

    'uptime': {
        output: () => {
            const now = new Date();
            const uptime = `10:30:45 up 2 days,  5:15,  1 user,  load average: 0.08, 0.03, 0.01`;
            return uptime;
        },
        type: 'success'
    },

    'lscpu': {
        output: `Architecture:            x86_64
CPU op-mode(s):        32-bit, 64-bit
Address sizes:         39 bits physical, 48 bits virtual
Byte Order:            Little Endian
CPU(s):                8
On-line CPU(s) list:   0-7
Thread(s) per core:    2
Core(s) per socket:    4
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 165
Model name:            Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz
Stepping:              5
CPU MHz:               3800.000
CPU max MHz:           5100.0000
CPU min MHz:           800.0000
BogoMIPS:              7600.00
Virtualization:        VT-x
L1d cache:             128 KiB
L1i cache:             128 KiB
L2 cache:              2 MiB
L3 cache:              16 MiB
NUMA node0 CPU(s):     0-7
Flags:                 fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl vmx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vnmi flexpriority ept vpid fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx rdseed adx smap clflushopt intel_pt xsaveopt xsavec xgetbv1 xsaves dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear flush_l1d arch_capabilities`,
        type: 'info'
    },

    'lsblk': {
        output: `NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0   100G  0 disk 
├─sda1   8:1    0    98G  0 part /
├─sda2   8:2    0     1K  0 part 
└─sda5   8:5    0     2G  0 part [SWAP]
sdb      8:16   0   200G  0 disk 
└─sdb1   8:17   0   200G  0 part /data
sdc      8:32   0   500G  0 disk 
└─sdc1   8:33   0   500G  0 part /home
sr0     11:0    1  1024M  0 rom`,
        type: 'info'
    },

    'lsblk -f': {
        output: `NAME   FSTYPE LABEL      UUID                                 MOUNTPOINT
sda                                                                 
├─sda1 ext4   root       5a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d /
├─sda2                                                                
└─sda5 swap   swap       1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d [SWAP]
sdb                                                                 
└─sdb1 ext4   data       2b3c4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e /data
sdc                                                                 
└─sdc1 ext4   home       3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f /home
sr0    iso9660 Ubuntu-22 4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a`,
        type: 'info'
    },

    'lshw -short': {
        output: `H/W path       Device      Class          Description
============================================================
                          system      Computer
/0                        bus         Motherboard
/0/0                      memory      64KiB BIOS
/0/1                      processor   Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz
/0/100                    bridge      8th Gen Core Processor Host Bridge/DRAM Registers
/0/100/1                  bridge      Xeon E3-1200 v5/E3-1500 v5/6th Gen Core Processor PCIe Controller (x16)
/0/100/1/0                display     GP107 [GeForce GTX 1050 Ti]
/0/100/14                 bus         Intel Corporation 200 Series/Z370 Chipset Family USB 3.0 xHCI Controller
/0/100/14/0    usb1       bus         xHCI Host Controller
/0/100/14/1    usb2       bus         xHCI Host Controller
/0/100/16                 communication Intel Corporation 200 Series PCH CSME HECI #1
/0/100/17                 storage      Intel Corporation 200 Series PCH SATA controller [AHCI mode]
/0/100/1c                 bridge      200 Series PCH PCI Express Root Port #1
/0/100/1c/0    enp3s0     network     Ethernet Connection (2) I219-V
/0/100/1f                 bridge      200 Series PCH LPC Controller (Z270)
/0/100/1f.2               memory      RAM memory
/0/100/1f.3               multimedia  200 Series PCH HD Audio
/0/100/1f.4               bus         200 Series PCH SMBus Controller
/0/1           scsi0      storage     
/0/1/0.0.0     /dev/sda   disk        100GB Samsung SSD 860 EVO
/0/2           scsi1      storage     
/0/2/0.0.0     /dev/sdb   disk        200GB Seagate Barracuda
/0/3           scsi2      storage     
/0/3/0.0.0     /dev/sdc   disk        500GB Western Digital Blue`,
        type: 'info'
    },

    'lsusb': {
        output: `Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 001 Device 004: ID 046d:c52b Logitech, Inc. Unifying Receiver
Bus 001 Device 003: ID 046d:0825 Logitech, Inc. Webcam C270
Bus 001 Device 002: ID 046a:0011 Cherry GmbH CyMotion Expert Linux Keyboard
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub`,
        type: 'info'
    },

    'lspci': {
        output: `00:00.0 Host bridge: Intel Corporation 8th Gen Core Processor Host Bridge/DRAM Registers (rev 07)
00:01.0 PCI bridge: Intel Corporation Xeon E3-1200 v5/E3-1500 v5/6th Gen Core Processor PCIe Controller (x16) (rev 07)
00:01.1 PCI bridge: Intel Corporation Xeon E3-1200 v5/E3-1500 v5/6th Gen Core Processor PCIe Controller (x8) (rev 07)
00:14.0 USB controller: Intel Corporation 200 Series/Z370 Chipset Family USB 3.0 xHCI Controller
00:16.0 Communication controller: Intel Corporation 200 Series PCH CSME HECI #1
00:17.0 SATA controller: Intel Corporation 200 Series PCH SATA controller [AHCI mode]
00:1c.0 PCI bridge: Intel Corporation 200 Series PCH PCI Express Root Port #1 (rev f0)
00:1c.1 PCI bridge: Intel Corporation 200 Series PCH PCI Express Root Port #2 (rev f0)
00:1f.0 ISA bridge: Intel Corporation 200 Series PCH LPC Controller (Z270)
00:1f.2 Memory controller: Intel Corporation 200 Series PCH PMC
00:1f.3 Audio device: Intel Corporation 200 Series PCH HD Audio
00:1f.4 SMBus: Intel Corporation 200 Series PCH SMBus Controller
01:00.0 VGA compatible controller: NVIDIA Corporation GP107 [GeForce GTX 1050 Ti] (rev a1)
01:00.1 Audio device: NVIDIA Corporation GP107GL High Definition Audio Controller (rev a1)
03:00.0 Ethernet controller: Intel Corporation Ethernet Connection (2) I219-V (rev 00)`,
        type: 'info'
    },

    'systemctl status': {
        output: `● ubuntu-simulator.service - Ubuntu Terminal Simulator Pro
   Loaded: loaded (/etc/systemd/system/ubuntu-simulator.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2024-01-15 10:30:45 UTC; 2 days ago
 Main PID: 1002 (node)
    Tasks: 10 (limit: 4915)
   Memory: 45.8M
   CGroup: /system.slice/ubuntu-simulator.service
           └─1002 node /home/student/projects/ubuntu-simulator/app.js

Jan 15 10:30:45 ubuntu-server systemd[1]: Started Ubuntu Terminal Simulator Pro.
Jan 15 10:30:46 ubuntu-server node[1002]: Server listening on port 8080
Jan 15 11:00:00 ubuntu-server node[1002]: User connected: 192.168.1.100
Jan 15 12:30:15 ubuntu-server node[1002]: User executed command: help
Jan 15 14:45:30 ubuntu-server node[1002]: User executed command: system-info`,
        type: 'info'
    },

    'systemctl list-units --type=service': {
        output: `UNIT                               LOAD   ACTIVE SUB     DESCRIPTION
  accounts-daemon.service           loaded active running Accounts Service
  apparmor.service                  loaded active exited  AppArmor initialization
  apport.service                    loaded active exited  LSB: automatic crash report generation
  avahi-daemon.service              loaded active running Avahi mDNS/DNS-SD Stack
  cron.service                      loaded active running Regular background program processing daemon
  dbus.service                      loaded active running D-Bus System Message Bus
  docker.service                    loaded active running Docker Application Container Engine
  getty@tty1.service                loaded active running Getty on tty1
  grub-common.service               loaded active exited  LSB: Record successful boot for GRUB
  irqbalance.service                loaded active running irqbalance daemon
  keyboard-setup.service            loaded active exited  Set the console keyboard layout
  kmod-static-nodes.service         loaded active exited  Create List of Static Device Nodes
  network-manager.service           loaded active running Network Manager
  nginx.service                     loaded active running A high performance web server and a reverse proxy server
  postgresql.service                loaded active running PostgreSQL RDBMS
  rsyslog.service                   loaded active running System Logging Service
  ssh.service                       loaded active running OpenBSD Secure Shell server
  systemd-journald.service          loaded active running Journal Service
  systemd-logind.service            loaded active running Login Service
  systemd-modules-load.service      loaded active exited  Load Kernel Modules
  systemd-random-seed.service       loaded active exited  Load/Save Random Seed
  systemd-sysctl.service            loaded active exited  Apply Kernel Variables
  systemd-tmpfiles-setup-dev.service loaded active exited  Create Static Device Nodes in /dev
  systemd-udev-trigger.service      loaded active exited  udev Coldplug all Devices
  systemd-udevd.service             loaded active running udev Kernel Device Manager
  systemd-update-utmp.service       loaded active exited  Update UTMP about System Boot/Shutdown
  systemd-user-sessions.service     loaded active exited  Permit User Sessions
  ubuntu-simulator.service          loaded active running Ubuntu Terminal Simulator Pro
  udisks2.service                   loaded active running Disk Manager
  ufw.service                       loaded active exited  Uncomplicated firewall
  unattended-upgrades.service       loaded active exited  Unattended Upgrades Shutdown
  user@1000.service                 loaded active running User Manager for UID 1000
  whoopsie.service                  loaded active running crash report submission daemon

LOAD   = Reflects whether the unit definition was properly loaded.
ACTIVE = The high-level unit activation state, i.e. generalization of SUB.
SUB    = The low-level unit activation state, values depend on unit type.`,
        type: 'info'
    },

    'service --status-all': {
        output: ` [ + ]  accounts-daemon
 [ + ]  acpid
 [ + ]  apparmor
 [ + ]  apport
 [ + ]  avahi-daemon
 [ + ]  bluetooth
 [ + ]  console-setup
 [ + ]  cron
 [ + ]  cups
 [ + ]  cups-browsed
 [ + ]  dbus
 [ + ]  docker
 [ + ]  gdm3
 [ + ]  grub-common
 [ + ]  irqbalance
 [ + ]  kerneloops
 [ + ]  keyboard-setup
 [ + ]  kmod
 [ + ]  network-manager
 [ + ]  nginx
 [ + ]  postgresql
 [ + ]  rsyslog
 [ + ]  ssh
 [ + ]  udev
 [ + ]  ufw
 [ + ]  unattended-upgrades
 [ + ]  whoopsie`,
        type: 'info'
    },

    'journalctl -xe': {
        output: `-- Logs begin at Mon 2024-01-15 10:15:00 UTC, end at Mon 2024-01-15 10:31:00 UTC. --
Jan 15 10:15:00 ubuntu-server systemd[1]: Started User Manager for UID 1000.
Jan 15 10:15:01 ubuntu-server CRON[1234]: (root) CMD (command -v debian-sa1 > /dev/null && debian-sa1 1 1)
Jan 15 10:15:01 ubuntu-server systemd[1]: Starting Clean php session files...
Jan 15 10:15:01 ubuntu-server systemd[1]: phpsessionclean.service: Succeeded.
Jan 15 10:15:01 ubuntu-server systemd[1]: Finished Clean php session files.
Jan 15 10:17:01 ubuntu-server systemd[1]: Starting Ubuntu auto-removal...
Jan 15 10:17:01 ubuntu-server systemd[1]: apt-daily-upgrade.service: Succeeded.
Jan 15 10:17:01 ubuntu-server systemd[1]: Finished Ubuntu auto-removal.
Jan 15 10:30:45 ubuntu-server systemd[1]: Started Ubuntu Terminal Simulator Pro.
Jan 15 10:30:46 ubuntu-server node[1002]: Server listening on port 8080
Jan 15 10:31:00 ubuntu-server sudo[1235]:   student : TTY=pts/0 ; PWD=/home/student ; USER=root ; COMMAND=/bin/journalctl -xe`,
        type: 'info'
    },

    // ===== NETWORK COMMANDS =====
    'ifconfig': {
        output: `enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::20c:29ff:fea6:b3c  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:a6:0b:3c  txqueuelen 1000  (Ethernet)
        RX packets 123456  bytes 123456789 (123.4 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 98765  bytes 98765432 (98.7 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 1234  bytes 123456 (123.4 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1234  bytes 123456 (123.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0`,
        type: 'info'
    },

    'ip addr show': {
        output: `1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:0c:29:a6:0b:3c brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic noprefixroute enp3s0
       valid_lft 86388sec preferred_lft 86388sec
    inet6 fe80::20c:29ff:fea6:b3c/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever`,
        type: 'info'
    },

    'ip route show': {
        output: `default via 192.168.1.1 dev enp3s0 proto dhcp metric 100 
192.168.1.0/24 dev enp3s0 proto kernel scope link src 192.168.1.100 metric 100`,
        type: 'info'
    },

    'ping google.com': {
        output: `PING google.com (142.250.185.78) 56(84) bytes of data.
64 bytes from 142.250.185.78: icmp_seq=1 ttl=117 time=15.4 ms
64 bytes from 142.250.185.78: icmp_seq=2 ttl=117 time=14.9 ms
64 bytes from 142.250.185.78: icmp_seq=3 ttl=117 time=15.1 ms
64 bytes from 142.250.185.78: icmp_seq=4 ttl=117 time=15.2 ms
64 bytes from 142.250.185.78: icmp_seq=5 ttl=117 time=15.0 ms

--- google.com ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4006ms
rtt min/avg/max/mdev = 14.976/15.165/15.431/0.234 ms`,
        type: 'info'
    },

    'ping -c 3 8.8.8.8': {
        output: `PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.1 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=11.9 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=12.0 ms

--- 8.8.8.8 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2005ms
rtt min/avg/max/mdev = 11.956/12.021/12.134/0.115 ms`,
        type: 'info'
    },

    'netstat -tulpn': {
        output: `Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      857/sshd            
tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN      921/postgres        
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      934/nginx           
tcp        0      0 127.0.0.1:3306          0.0.0.0:*               LISTEN      1234/mysqld         
tcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN      1245/redis-server   
tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      1002/node           
tcp6       0      0 :::22                   :::*                    LISTEN      857/sshd            
tcp6       0      0 :::80                   :::*                    LISTEN      934/nginx           
tcp6       0      0 :::8080                 :::*                    LISTEN      1002/node           
udp        0      0 0.0.0.0:68              0.0.0.0:*                           758/dhclient        
udp        0      0 0.0.0.0:5353            0.0.0.0:*                           765/avahi-daemon    
udp        0      0 0.0.0.0:631             0.0.0.0:*                           767/cups-browsed    
udp6       0      0 :::5353                 :::*                                765/avahi-daemon    
udp6       0      0 :::546                  :::*                                758/dhclient`,
        type: 'info'
    },

    'netstat -rn': {
        output: `Kernel IP routing table
Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
0.0.0.0         192.168.1.1     0.0.0.0         UG        0 0          0 enp3s0
192.168.1.0     0.0.0.0         255.255.255.0   U         0 0          0 enp3s0`,
        type: 'info'
    },

    'ss -tulpn': {
        output: `Netid   State    Recv-Q   Send-Q   Local Address:Port   Peer Address:Port   Process   
tcp     LISTEN   0        128      0.0.0.0:22          0.0.0.0:*       users:(("sshd",pid=857,fd=3))
tcp     LISTEN   0        128      127.0.0.1:5432      0.0.0.0:*       users:(("postgres",pid=921,fd=5))
tcp     LISTEN   0        128      0.0.0.0:80          0.0.0.0:*       users:(("nginx",pid=934,fd=6))
tcp     LISTEN   0        128      127.0.0.1:3306      0.0.0.0:*       users:(("mysqld",pid=1234,fd=30))
tcp     LISTEN   0        128      127.0.0.1:6379      0.0.0.0:*       users:(("redis-server",pid=1245,fd=6))
tcp     LISTEN   0        128      0.0.0.0:8080        0.0.0.0:*       users:(("node",pid=1002,fd=12))
tcp     LISTEN   0        128      :::22               :::*            users:(("sshd",pid=857,fd=4))
tcp     LISTEN   0        128      :::80               :::*            users:(("nginx",pid=934,fd=7))
tcp     LISTEN   0        128      :::8080             :::*            users:(("node",pid=1002,fd=13))
udp     UNCONN   0        0        0.0.0.0:68          0.0.0.0:*       users:(("dhclient",pid=758,fd=6))
udp     UNCONN   0        0        0.0.0.0:5353        0.0.0.0:*       users:(("avahi-daemon",pid=765,fd=12))
udp     UNCONN   0        0        0.0.0.0:631         0.0.0.0:*       users:(("cups-browsed",pid=767,fd=8))
udp     UNCONN   0        0        :::5353             :::*            users:(("avahi-daemon",pid=765,fd=13))
udp     UNCONN   0        0        :::546              :::*            users:(("dhclient",pid=758,fd=7))`,
        type: 'info'
    },

    'curl https://api.github.com': {
        output: `{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/user}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "notifications_url": "https://api.github.com/notifications",
  "organization_url": "https://api.github.com/orgs",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos",
  "repository_search_url": "https://api.github.com/search/repositories",
  "current_user_repositories_url": "https://api.github.com/user/repos",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/users/{user}/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users"
}`,
        type: 'info'
    },

    'curl -I https://ubuntu.com': {
        output: `HTTP/2 200 
server: nginx
date: Mon, 15 Jan 2024 10:30:45 GMT
content-type: text/html; charset=UTF-8
content-length: 123456
vary: Accept-Encoding
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
strict-transport-security: max-age=31536000; includeSubDomains
referrer-policy: strict-origin-when-cross-origin`,
        type: 'info'
    },

    'wget https://ubuntu.com/download': {
        output: `--2024-01-15 10:30:45--  https://ubuntu.com/download
Resolving ubuntu.com (ubuntu.com)... 185.125.190.36, 185.125.190.29, 2a04:4e42:1d::644, ...
Connecting to ubuntu.com (ubuntu.com)|185.125.190.36|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Saving to: 'download.html'

download.html            [ <=>                ] 123.45K  --.-KB/s    in 0.1s    

2024-01-15 10:30:45 (1.23 MB/s) - 'download.html' saved [126408]`,
        type: 'info'
    },

    'wget -O ubuntu.iso https://releases.ubuntu.com/22.04/ubuntu-22.04.3-live-server-amd64.iso': {
        output: `--2024-01-15 10:30:45--  https://releases.ubuntu.com/22.04/ubuntu-22.04.3-live-server-amd64.iso
Resolving releases.ubuntu.com (releases.ubuntu.com)... 91.189.91.124, 91.189.91.123, 2620:2d:4000:1::3b, ...
Connecting to releases.ubuntu.com (releases.ubuntu.com)|91.189.91.124|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1861419008 (1.7G) [application/x-iso9660-image]
Saving to: 'ubuntu.iso'

ubuntu.iso              0%[                    ]  10.00M  1.23MB/s    eta 25m 0s`,
        type: 'info'
    },

    'nslookup google.com': {
        output: `Server:         8.8.8.8
Address:        8.8.8.8#53

Non-authoritative answer:
Name:   google.com
Address: 142.250.185.78
Name:   google.com
Address: 2607:f8b0:4004:815::200e
Name:   google.com
Address: 2607:f8b0:4004:80a::200e`,
        type: 'info'
    },

    'nslookup -type=mx gmail.com': {
        output: `Server:         8.8.8.8
Address:        8.8.8.8#53

Non-authoritative answer:
gmail.com       mail exchanger = 5 gmail-smtp-in.l.google.com.
gmail.com       mail exchanger = 10 alt1.gmail-smtp-in.l.google.com.
gmail.com       mail exchanger = 20 alt2.gmail-smtp-in.l.google.com.
gmail.com       mail exchanger = 30 alt3.gmail-smtp-in.l.google.com.
gmail.com       mail exchanger = 40 alt4.gmail-smtp-in.l.google.com.

Authoritative answers can be found from:`,
        type: 'info'
    },

    'dig google.com': {
        output: `; <<>> DiG 9.18.1-1ubuntu1.3-Ubuntu <<>> google.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12345
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;google.com.                    IN      A

;; ANSWER SECTION:
google.com.             300     IN      A       142.250.185.78

;; Query time: 15 msec
;; SERVER: 8.8.8.8#53(8.8.8.8) (UDP)
;; WHEN: Mon Jan 15 10:30:45 UTC 2024
;; MSG SIZE  rcvd: 55`,
        type: 'info'
    },

    'dig google.com +short': {
        output: `142.250.185.78`,
        type: 'success'
    },

    'dig -x 8.8.8.8': {
        output: `; <<>> DiG 9.18.1-1ubuntu1.3-Ubuntu <<>> -x 8.8.8.8
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 12346
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 65494
;; QUESTION SECTION:
;8.8.8.8.in-addr.arpa.          IN      PTR

;; ANSWER SECTION:
8.8.8.8.in-addr.arpa.   86400   IN      PTR     dns.google.

;; Query time: 10 msec
;; SERVER: 8.8.8.8#53(8.8.8.8) (UDP)
;; WHEN: Mon Jan 15 10:30:45 UTC 2024
;; MSG SIZE  rcvd: 73`,
        type: 'info'
    },

    'host google.com': {
        output: `google.com has address 142.250.185.78
google.com has IPv6 address 2607:f8b0:4004:815::200e
google.com mail is handled by 10 smtp.google.com.`,
        type: 'info'
    },

    'host 8.8.8.8': {
        output: `8.8.8.8.in-addr.arpa domain name pointer dns.google.`,
        type: 'info'
    },

    'traceroute google.com': {
        output: `traceroute to google.com (142.250.185.78), 30 hops max, 60 byte packets
 1  router.local (192.168.1.1)  1.234 ms  1.567 ms  1.789 ms
 2  10.0.0.1 (10.0.0.1)  5.678 ms  6.123 ms  6.456 ms
 3  72.14.205.1 (72.14.205.1)  10.123 ms  10.456 ms  10.789 ms
 4  108.170.242.1 (108.170.242.1)  15.123 ms  15.456 ms  15.789 ms
 5  142.250.185.78 (142.250.185.78)  20.123 ms  20.456 ms  20.789 ms`,
        type: 'info'
    },

    'tracepath google.com': {
        output: ` 1?: [LOCALHOST]                      pmtu 1500
 1:  router.local                                        1.234ms
 1:  router.local                                        1.567ms
 2:  10.0.0.1                                           5.678ms
 3:  72.14.205.1                                       10.123ms
 4:  108.170.242.1                                     15.123ms
 5:  142.250.185.78                                    20.123ms reached
     Resume: pmtu 1500 hops 5 back 5`,
        type: 'info'
    },

    'nmap localhost': {
        output: `Starting Nmap 7.80 ( https://nmap.org ) at 2024-01-15 10:30 UTC
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00010s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
5432/tcp open  postgresql
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 0.15 seconds`,
        type: 'info'
    },

    'nmap -sS 192.168.1.0/24': {
        output: `Starting Nmap 7.80 ( https://nmap.org ) at 2024-01-15 10:30 UTC
Nmap scan report for 192.168.1.1
Host is up (0.0012s latency).
Not shown: 999 closed ports
PORT   STATE SERVICE
53/tcp open  domain

Nmap scan report for 192.168.1.100 (192.168.1.100)
Host is up (0.00012s latency).
Not shown: 996 closed ports
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
8080/tcp open  http-proxy

Nmap scan report for 192.168.1.101
Host is up (0.0023s latency).
All 1000 scanned ports on 192.168.1.101 are closed

Nmap done: 256 IP addresses (3 hosts up) scanned in 15.23 seconds`,
        type: 'info'
    },

    'iptables -L': {
        output: `Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
ACCEPT     icmp --  anywhere             anywhere            
ACCEPT     all  --  anywhere             anywhere            
ACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:ssh
ACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:http
ACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:https
REJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         
REJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination`,
        type: 'info'
    },

    'iptables -L -n -v': {
        output: `Chain INPUT (policy ACCEPT 1234 packets, 123456 bytes)
 pkts bytes target     prot opt in     out     source               destination         
 1234 123456 ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED
   12   1234 ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0           
  234 23456 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0           
   45  4567 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:22
  567 56789 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:80
   78  7890 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:443
    0     0 REJECT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination         
    0     0 REJECT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited

Chain OUTPUT (policy ACCEPT 987 packets, 987654 bytes)
 pkts bytes target     prot opt in     out     source               destination`,
        type: 'info'
    },

    'ssh student@localhost': {
        output: `Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-76-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Mon Jan 15 10:30:45 UTC 2024

  System load:  0.08               Processes:             245
  Usage of /:   27.0% of 98.00GB   Users logged in:       1
  Memory usage: 45%                IPv4 address for enp3s0: 192.168.1.100
  Swap usage:   0%

0 updates can be applied immediately.


Last login: Mon Jan 15 10:15:23 2024 from 192.168.1.1
student@ubuntu-server:~$`,
        type: 'info'
    },

    'scp file.txt student@remote:/home/student/': {
        output: `file.txt                                    100%  1234     1.2MB/s   00:00`,
        type: 'success'
    },

    // ===== DEVELOPMENT TOOLS =====
    'git status': {
        output: `On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html
        modified:   style.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        assets/

no changes added to commit (use "git add" and/or "git commit -a")`,
        type: 'info'
    },

    'git log --oneline -5': {
        output: `a1b2c3d (HEAD -> main) Update: Add new commands and improve UI
d4e5f6a Fix: Terminal output formatting
e7f8g9h Add: Search functionality for commands
f0g1h2i Initial commit: Ubuntu Terminal Simulator
g3h4i5j Add: Basic command structure`,
        type: 'info'
    },

    'git diff': {
        output: `diff --git a/index.html b/index.html
index 1234567..89abcdef 100644
--- a/index.html
+++ b/index.html
@@ -10,7 +10,7 @@
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Ubuntu Linux Terminal Simulator</title>
     <link rel="stylesheet" href="style.css">
-    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
+    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous">
     <link rel="icon" type="image/x-icon" href="https://assets.ubuntu.com/v1/49a1a858-favicon-32x32.png">

diff --git a/style.css b/style.css
index abcdef0..1234567 100644
--- a/style.css
+++ b/style.css
@@ -15,6 +15,10 @@
     --terminal-purple: #9C27B0;
     --success: #2ecc71;
     --warning: #f39c12;
+    --danger: #e74c3c;
+    --info: #3498db;
 }

 * {
     margin: 0;`,
        type: 'info'
    },

    'git branch': {
        output: `  development
* main
  feature/new-commands
  bugfix/terminal-fix`,
        type: 'info'
    },

    'git remote -v': {
        output: `origin  https://github.com/lyzatouy-prog/ubuntu-simulator.git (fetch)
origin  https://github.com/lyzatouy-prog/ubuntu-simulator.git (push)
upstream        https://github.com/chatgpt-examples/ubuntu-simulator.git (fetch)
upstream        https://github.com/chatgpt-examples/ubuntu-simulator.git (push)`,
        type: 'info'
    },

    'python3 --version': {
        output: 'Python 3.10.6',
        type: 'success'
    },

    'python3 -c "print(\'Hello from Python!\')"': {
        output: 'Hello from Python!',
        type: 'success'
    },

    'python3': {
        output: `Python 3.10.6 (main, Nov 14 2022, 16:10:14) [GCC 11.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> `,
        type: 'info'
    },

    'node --version': {
        output: 'v18.12.1',
        type: 'success'
    },

    'node -e "console.log(\'Hello from Node.js!\')"': {
        output: 'Hello from Node.js!',
        type: 'success'
    },

    'node': {
        output: `Welcome to Node.js v18.12.1.
Type ".help" for more information.
> `,
        type: 'info'
    },

    'npm --version': {
        output: '9.2.0',
        type: 'success'
    },

    'npm list --depth=0': {
        output: `ubuntu-simulator@1.0.0 /home/student/projects/ubuntu-simulator
├── express@4.18.2
├── socket.io@4.5.4
├── axios@1.3.4
└── chalk@5.2.0`,
        type: 'info'
    },

    'npm init -y': {
        output: `Wrote to /home/student/projects/ubuntu-simulator/package.json:

{
  "name": "ubuntu-simulator",
  "version": "1.0.0",
  "description": "Ubuntu Terminal Simulator",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": ["ubuntu", "terminal", "simulator", "linux"],
  "author": "student",
  "license": "MIT"
}`,
        type: 'info'
    },

    'docker ps': {
        output: `CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS        PORTS                    NAMES
a1b2c3d4e5f6   nginx:latest   "/docker-entrypoint.…"   2 days ago    Up 2 days     0.0.0.0:80->80/tcp       webserver
b2c3d4e5f6a1   mysql:8.0      "docker-entrypoint.s…"   3 days ago    Up 3 days     0.0.0.0:3306->3306/tcp   database
c3d4e5f6a1b2   redis:7.0      "docker-entrypoint.s…"   4 days ago    Up 4 days     0.0.0.0:6379->6379/tcp   cache
d4e5f6a1b2c3   node:18        "docker-entrypoint.s…"   5 days ago    Up 5 days     0.0.0.0:8080->8080/tcp   app`,
        type: 'info'
    },

    'docker images': {
        output: `REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
nginx        latest    1234567890ab   2 weeks ago    187MB
mysql        8.0       2345678901bc   3 weeks ago    545MB
redis        7.0       3456789012cd   4 weeks ago    117MB
node         18        4567890123de   5 weeks ago    1.01GB
ubuntu       22.04     5678901234ef   6 weeks ago    77.8MB`,
        type: 'info'
    },

    'docker --version': {
        output: 'Docker version 23.0.1, build a5ee5b1',
        type: 'success'
    },

    'docker-compose --version': {
        output: 'Docker Compose version v2.17.2',
        type: 'success'
    },

    'docker-compose ps': {
        output: `      Name                    Command               State           Ports         
--------------------------------------------------------------------------------
webserver   nginx -g daemon off;       Up      0.0.0.0:80->80/tcp
database    docker-entrypoint.sh mysqld Up      0.0.0.0:3306->3306/tcp
cache       docker-entrypoint.sh redis  Up      0.0.0.0:6379->6379/tcp
app         docker-entrypoint.sh node   Up      0.0.0.0:8080->8080/tcp`,
        type: 'info'
    },

    'java --version': {
        output: `openjdk 17.0.5 2022-10-18
OpenJDK Runtime Environment (build 17.0.5+8-Ubuntu-2ubuntu122.04)
OpenJDK 64-Bit Server VM (build 17.0.5+8-Ubuntu-2ubuntu122.04, mixed mode, sharing)`,
        type: 'info'
    },

    'javac --version': {
        output: 'javac 17.0.5',
        type: 'success'
    },

    'gcc --version': {
        output: `gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.`,
        type: 'info'
    },

    'g++ --version': {
        output: `g++ (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.`,
        type: 'info'
    },

    'make --version': {
        output: `GNU Make 4.3
Built for x86_64-pc-linux-gnu
Copyright (C) 1988-2020 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.`,
        type: 'info'
    },

    'cmake --version': {
        output: `cmake version 3.22.1

CMake suite maintained and supported by Kitware (kitware.com/cmake).`,
        type: 'info'
    },

    'gdb --version': {
        output: `GNU gdb (Ubuntu 12.1-0ubuntu1~22.04) 12.1
Copyright (C) 2022 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.  Type "show copying"
and "show warranty" for details.
This GDB was configured as "x86_64-linux-gnu".
Type "show configuration" for configuration details.`,
        type: 'info'
    },

    'valgrind --version': {
        output: 'valgrind-3.18.1',
        type: 'success'
    },

    // ===== ADMINISTRATION =====
    'sudo apt update': {
        output: `Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease
Hit:2 http://archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:3 http://archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu jammy-security InRelease
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
All packages are up to date.`,
        type: 'info'
    },

    'sudo apt upgrade': {
        output: `Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.`,
        type: 'info'
    },

    'sudo apt install nginx': {
        output: `Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  nginx-common nginx-core
Suggested packages:
  fcgiwrap nginx-doc
The following NEW packages will be installed:
  nginx nginx-common nginx-core
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 567 kB of archives.
After this operation, 1,602 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 nginx-common all 1.18.0-6ubuntu14.3 [37.8 kB]
Get:2 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 nginx-core amd64 1.18.0-6ubuntu14.3 [529 kB]
Get:3 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 nginx all 1.18.0-6ubuntu14.3 [3,868 B]
Fetched 567 kB in 1s (567 kB/s)
Selecting previously unselected package nginx-common.
(Reading database ... 123456 files and directories currently installed.)
Preparing to unpack .../nginx-common_1.18.0-6ubuntu14.3_all.deb ...
Unpacking nginx-common (1.18.0-6ubuntu14.3) ...
Selecting previously unselected package nginx-core.
Preparing to unpack .../nginx-core_1.18.0-6ubuntu14.3_amd64.deb ...
Unpacking nginx-core (1.18.0-6ubuntu14.3) ...
Selecting previously unselected package nginx.
Preparing to unpack .../nginx_1.18.0-6ubuntu14.3_all.deb ...
Unpacking nginx (1.18.0-6ubuntu14.3) ...
Setting up nginx-common (1.18.0-6ubuntu14.3) ...
Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.
Setting up nginx-core (1.18.0-6ubuntu14.3) ...
Setting up nginx (1.18.0-6ubuntu14.3) ...
Processing triggers for systemd (249.11-0ubuntu3.9) ...
Processing triggers for man-db (2.10.2-1) ...`,
        type: 'info'
    },

    'sudo apt remove nginx': {
        output: `Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following packages will be REMOVED:
  nginx nginx-common nginx-core
0 upgraded, 0 newly installed, 3 to remove and 0 not upgraded.
After this operation, 1,602 kB disk space will be freed.
Do you want to continue? [Y/n] y
(Reading database ... 123459 files and directories currently installed.)
Removing nginx (1.18.0-6ubuntu14.3) ...
Removing nginx-core (1.18.0-6ubuntu14.3) ...
Removing nginx-common (1.18.0-6ubuntu14.3) ...
Processing triggers for systemd (249.11-0ubuntu3.9) ...
Processing triggers for man-db (2.10.2-1) ...`,
        type: 'info'
    },

    'apt search python3': {
        output: `Sorting... Done
Full Text Search... Done
python3/focal 3.8.2-0ubuntu2 amd64
  interactive high-level object-oriented language (default python3 version)

python3-all/focal 3.8.2-0ubuntu2 amd64
  package depending on all supported Python 3 runtime versions

python3-apt/focal 2.0.0 amd64
  Python 3 interface to libapt-pkg

python3-dbg/focal 3.8.2-0ubuntu2 amd64
  debug build of the Python 3 interpreter

python3-dev/focal 3.8.2-0ubuntu2 amd64
  header files and a static library for Python 3

python3-doc/focal 3.8.2-1 all
  documentation for the high-level object-oriented language Python 3

python3-gdbm/focal 3.8.2-1build1 amd64
  GNU dbm database support for Python 3

... and 2000 more items. Use apt show <package> to see details.`,
        type: 'info'
    },

    'apt show python3': {
        output: `Package: python3
Version: 3.10.6-1~22.04
Priority: important
Section: python
Source: python3-defaults
Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
Installed-Size: 47.9 kB
Depends: python3.10 (>= 3.10.6-1~), libpython3-stdlib (= 3.10.6-1~22.04)
Suggests: python3-doc (>= 3.10.6-1~22.04), python3-tk (>= 3.10.6-1~22.04), python3-venv (>= 3.10.6-1~22.04)
Conflicts: python3.1, python3.2, python3.3, python3.4, python3.5, python3.6, python3.7, python3.8, python3.9
Replaces: python3-minimal (<< 3.10.6-1~22.04)
Homepage: https://www.python.org/
Download-Size: 6,632 B
APT-Manual-Installed: yes
APT-Sources: http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 Packages
Description: interactive high-level object-oriented language (default python3 version)
 Python 3 is a high-level, interactive, interpreted, object-oriented language that combines remarkable power with clear syntax.
 .
 This package is a dependency package that depends on the default Python 3 runtime environment.
 .
 For more information about Python 3, see the python3.10 package.`,
        type: 'info'
    },

    'apt-get update': {
        output: `Hit:1 http://archive.ubuntu.com/ubuntu jammy InRelease
Hit:2 http://archive.ubuntu.com/ubuntu jammy-updates InRelease
Hit:3 http://archive.ubuntu.com/ubuntu jammy-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu jammy-security InRelease
Reading package lists... Done`,
        type: 'info'
    },

    'apt-get upgrade': {
        output: `Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.`,
        type: 'info'
    },

    'dpkg -l | grep nginx': {
        output: `ii  nginx                         1.18.0-6ubuntu14.3              all          small, powerful, scalable web/proxy server
ii  nginx-common                  1.18.0-6ubuntu14.3              all          small, powerful, scalable web/proxy server - common files
ii  nginx-core                    1.18.0-6ubuntu14.3              amd64        nginx web/proxy server (core version)`,
        type: 'info'
    },

    'dpkg -L nginx': {
        output: `/.
/etc
/etc/nginx
/etc/nginx/nginx.conf
/etc/nginx/sites-available
/etc/nginx/sites-available/default
/etc/nginx/sites-enabled
/etc/nginx/sites-enabled/default
/usr
/usr/share
/usr/share/doc
/usr/share/doc/nginx
/usr/share/doc/nginx/changelog.Debian.gz
/usr/share/doc/nginx/copyright
/usr/share/man
/usr/share/man/man8
/usr/share/man/man8/nginx.8.gz
/var
/var/www
/var/www/html
/var/www/html/index.nginx-debian.html
... and 20 more files.`,
        type: 'info'
    },

    'yum check-update': {
        output: `Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirror.rackspace.com
 * extras: mirror.raystedman.org
 * updates: mirror.lug.udel.edu
No packages marked for update`,
        type: 'info'
    },

    'system-info': {
        output: `============================================
              SYSTEM INFORMATION
============================================
👤 User: student
🏠 Host: ubuntu-server
💻 OS: Ubuntu 22.04.2 LTS
🐧 Kernel: 5.15.0-76-generic
🏗️ Architecture: x86_64
⏰ Uptime: 2 days, 5:15 hours
💾 Memory: 7.7GiB total, 4.2GiB free
💿 Disk: 98GiB total, 69GiB free
🔧 CPU: Intel(R) Core(TM) i7-10700K (8 cores, 16 threads)
🌡️  CPU Temp: 45°C
🌐 IP: 192.168.1.100
📡 Network: enp3s0 (1Gbps)
🔄 Load Average: 0.08, 0.03, 0.01
🐳 Docker: 4 containers running
🐘 PostgreSQL: 14.7 (5432)
🕸️  Nginx: 1.18.0 (80, 443)
🚀 Node.js: 18.12.1 (8080)
============================================`,
        type: 'info'
    },

    'network-check': {
        output: `============================================
              NETWORK STATUS CHECK
============================================
✅ Internet Connection: ACTIVE
🌐 Local IP: 192.168.1.100
📡 Gateway: 192.168.1.1
🔗 Interface: enp3s0 (Ethernet)
📊 DNS: 8.8.8.8, 8.8.4.4 (Google)
🚀 Ping to Google: 15ms
📈 Bandwidth: 1Gbps Full Duplex
🔒 Firewall: ACTIVE (UFW)
🌍 Public IP: 203.0.113.45 (example)
📍 Location: Phnom Penh, Cambodia
📡 ISP: Example Telecom
============================================
Testing services...
✅ SSH (22): Accepting connections
✅ HTTP (80): Web server running
✅ HTTPS (443): SSL enabled
✅ PostgreSQL (5432): Database available
✅ Redis (6379): Cache service up
✅ Custom Port (8080): Application running
============================================
All network services are operational.`,
        type: 'info'
    },

    'process-list': {
        output: `============================================
              RUNNING PROCESSES
============================================
PID     USER        CPU%   MEM%   VSZ      RSS   COMMAND
1001    student     0.5%   0.1%   12344    4568  bash (terminal)
1002    student     2.3%   0.6%   23456    7890  node (web server)
1003    student     0.0%   0.0%   34567    1234  sshd
 857    root        0.0%   0.2%   56789   12345  sshd (server)
 921    postgres    0.3%   1.2%   123456  34567  postgres (database)
 934    root        0.1%   0.8%   23456    5678  nginx (web server)
1234    mysql       0.2%   2.5%   456789  67890  mysqld (database)
1245    redis       0.1%   0.3%   34567    4567  redis-server (cache)
 765    avahi       0.0%   0.1%   12345    2345  avahi-daemon (mDNS)
 758    root        0.0%   0.0%   12345    1234  dhclient (DHCP)
 767    root        0.0%   0.1%   23456    3456  cups-browsed (printing)
============================================
Total processes: 245
Running: 1 | Sleeping: 244 | Stopped: 0 | Zombie: 0
System load: 0.08 (1 min), 0.03 (5 min), 0.01 (15 min)
============================================`,
        type: 'info'
    },

    'security-scan': {
        output: `============================================
           SECURITY SCAN RESULTS
============================================
🔒 FIREWALL STATUS:
   ✅ UFW: ACTIVE (enabled)
   ✅ Default: deny (incoming), allow (outgoing)
   ✅ Rules: 6 active rules

🔐 SSH SECURITY:
   ✅ Password authentication: DISABLED
   ✅ Root login: DISABLED
   ✅ Port: 22 (default)
   ✅ Fail2ban: ACTIVE

🔄 UPDATES:
   ✅ Security updates: APPLIED
   ✅ Last update check: Today 10:15
   ✅ Automatic updates: ENABLED

👤 USER ACCOUNTS:
   ✅ No empty passwords
   ✅ Password aging: ENABLED
   ✅ sudo access: Restricted

📊 LOGGING:
   ✅ System logs: ACTIVE
   ✅ Auditd: RUNNING
   ✅ Log rotation: CONFIGURED

🐳 DOCKER SECURITY:
   ✅ Non-root user: CONFIGURED
   ✅ Content trust: ENABLED
   ✅ Seccomp profile: DEFAULT

⚠️  WARNINGS:
   1. Regular backups not configured
   2. Some services running as root
   3. SSL certificate expires in 30 days

✅ RECOMMENDATIONS:
   1. Enable automatic security updates
   2. Configure regular backup schedule
   3. Review user permissions monthly
   4. Monitor auth logs for suspicious activity
   5. Consider AppArmor/SELinux for additional security

Scan completed: ${new Date().toLocaleString()}
Overall security score: 85/100
============================================`,
        type: 'info'
    },

    'update-system': {
        output: `============================================
           SYSTEM UPDATE PROCESS
============================================
Step 1: Checking for updates...
✅ Package lists updated
✅ 5 security updates available
✅ 3 regular updates available

Step 2: Downloading updates...
📦 Downloading: linux-image-5.15.0-78-generic (120MB)
📦 Downloading: openssl 3.0.2-0ubuntu1.10 (2.1MB)
📦 Downloading: nginx 1.18.0-6ubuntu14.4 (567kB)
📦 Total download size: 123MB

Step 3: Installing updates...
🔧 Installing: linux-image-5.15.0-78-generic
🔧 Installing: openssl 3.0.2-0ubuntu1.10
🔧 Installing: nginx 1.18.0-6ubuntu14.4

Step 4: Cleaning up...
🧹 Removing old kernels
🧹 Cleaning package cache

Step 5: Finalizing...
✅ All updates installed successfully
✅ System reboot recommended for kernel update

SUMMARY:
• Security updates: 5 installed
• Regular updates: 3 installed
• Restart required: Yes (kernel update)
• Total time: 2 minutes, 15 seconds

Next steps:
1. Reboot system to apply kernel updates
2. Verify all services are running
3. Check system logs for any issues

Update completed: ${new Date().toLocaleString()}
============================================`,
        type: 'info'
    },

    'reboot': {
        output: `System reboot scheduled in 1 minute.
Broadcast message from student@ubuntu-server
        (/dev/pts/0) at 10:30 ...

The system is going down for reboot at Mon 2024-01-15 10:31:45 UTC!`,
        type: 'warning'
    },

    'shutdown -h now': {
        output: `System shutdown scheduled immediately.
Broadcast message from student@ubuntu-server
        (/dev/pts/0) at 10:30 ...

The system is going down for power off at Mon 2024-01-15 10:30:45 UTC!`,
        type: 'warning'
    },

    'adduser newuser': {
        output: `Adding user 'newuser' ...
Adding new group 'newuser' (1001) ...
Adding new user 'newuser' (1001) with group 'newuser' ...
Creating home directory '/home/newuser' ...
Copying files from '/etc/skel' ...
New password: 
Retype new password: 
passwd: password updated successfully
Changing the user information for newuser
Enter the new value, or press ENTER for the default
        Full Name []: New User
        Room Number []: 
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
User 'newuser' added successfully.`,
        type: 'info'
    },

    'deluser newuser': {
        output: `Removing user 'newuser' ...
Warning: group 'newuser' has no more members.
Done.`,
        type: 'info'
    },

    'passwd': {
        output: `Changing password for student.
Current password: 
New password: 
Retype new password: 
passwd: password updated successfully`,
        type: 'success'
    },

    'crontab -l': {
        output: `# m h  dom mon dow   command
0 2 * * * /usr/bin/apt-get update && /usr/bin/apt-get upgrade -y
0 3 * * * /usr/bin/backup-script.sh
30 4 * * 0 /usr/bin/update-antivirus.sh
0 0 * * * /usr/bin/logrotate-script.sh`,
        type: 'info'
    },

    // ===== SPECIAL COMMANDS =====
    'cheat-sheet': {
        output: `============================================
           LINUX COMMAND CHEAT SHEET
============================================

📁 FILE MANAGEMENT:
  ls -la          List all files with details
  cp -r src dest  Copy directory recursively
  mv old new      Move/rename file
  rm -rf dir      Remove directory forcefully
  find . -name "*.txt"  Find text files
  grep -r "text" .      Search text recursively
  tar -czf archive.tar.gz dir/  Create compressed archive

📝 TEXT PROCESSING:
  cat file        Display file content
  head -n 10 file Show first 10 lines
  tail -f logfile Follow log file in real-time
  grep "pattern" file  Search for pattern
  sed 's/old/new/g' file  Replace text
  awk '{print $1}' file  Print first column
  sort file      Sort lines
  uniq file      Remove duplicate lines

⚙️ SYSTEM INFO:
  df -h          Disk space (human readable)
  free -h        Memory usage
  top            Process monitor (dynamic)
  ps aux         All running processes
  uptime         System uptime and load
  uname -a       Kernel and system info
  lscpu          CPU information
  lsblk          Block devices

🌐 NETWORK:
  ping host      Test network connectivity
  ifconfig       Network interfaces (old)
  ip addr show   Network interfaces (new)
  netstat -tulpn Listening ports
  ss -tulpn      Socket statistics
  curl URL       Fetch URL content
  wget URL       Download file
  traceroute host Network route tracing
  nslookup domain DNS lookup
  dig domain     DNS information

🛠️ PERMISSIONS:
  chmod 755 file rwxr-xr-x permissions
  chmod +x file  Make executable
  chown user:group file  Change owner
  chgrp group file      Change group
  sudo command   Run as superuser
  su - user      Switch user

📦 PACKAGE MANAGEMENT (Ubuntu/Debian):
  apt update     Update package lists
  apt upgrade    Upgrade packages
  apt install pkg Install package
  apt remove pkg Remove package
  apt search text Search packages
  dpkg -l        List installed packages
  dpkg -i pkg.deb Install .deb package

🐳 DOCKER:
  docker ps      List running containers
  docker images  List images
  docker run image Run container
  docker stop container Stop container
  docker rm container Remove container
  docker build -t tag . Build image
  docker-compose up Start services
  docker-compose down Stop services

🐙 GIT:
  git status     Check repository status
  git add file   Stage changes
  git commit -m "msg" Commit changes
  git push       Push to remote
  git pull       Pull from remote
  git clone url  Clone repository
  git branch     List branches
  git checkout branch Switch branch

💡 TIPS:
• Tab autocompletes commands and filenames
• Ctrl+C cancels current command
• Ctrl+D exits terminal (sends EOF)
• Ctrl+L clears terminal screen
• Ctrl+R searches command history
• !! repeats last command
• !$ last argument of previous command
• man command shows manual pages
• command --help shows help

🔧 QUICK FIXES:
• Permission denied? Use sudo or check permissions
• Command not found? Check spelling or install package
• Disk full? Use df -h and clean up
• Process stuck? Use kill PID or kill -9 PID
• Network issues? Check ifconfig and ping
• Service not starting? Check systemctl status

============================================
        Practice makes perfect! 🐧
============================================`,
        type: 'info'
    },

    'file-explorer': {
        output: `============================================
           VIRTUAL FILE EXPLORER
============================================

📁 / (root)
├── 📁 bin -> usr/bin (Essential command binaries)
├── 📁 boot (Boot loader files)
├── 📁 dev (Device files)
├── 📁 etc (Configuration files)
│   ├── 📄 nginx/ (Nginx configuration)
│   ├── 📄 postgresql/ (PostgreSQL config)
│   ├── 📄 ssh/ (SSH configuration)
│   └── 📄 apt/ (APT package manager config)
├── 📁 home (User home directories)
│   └── 📁 student (Current user)
│       ├── 📁 Desktop
│       ├── 📁 Documents
│       │   ├── 📄 notes.txt
│       │   ├── 📄 assignment.pdf
│       │   └── 📁 class-notes/
│       ├── 📁 Downloads
│       │   ├── 📄 ubuntu-22.04.iso
│       │   └── 📁 temp/
│       ├── 📁 Music
│       ├── 📁 Pictures
│       ├── 📁 Public
│       ├── 📁 Templates
│       ├── 📁 Videos
│       └── 📁 projects (Current directory)
│           └── 📁 ubuntu-simulator/
│               ├── 📄 index.html
│               ├── 📄 style.css
│               ├── 📄 script.js
│               ├── 📄 commands.js
│               └── 📄 README.md
├── 📁 lib -> usr/lib (Libraries)
├── 📁 media (Removable media)
├── 📁 mnt (Mount points)
├── 📁 opt (Optional software)
├── 📁 proc (Process information)
├── 📁 root (Root user home)
├── 📁 run (Runtime data)
├── 📁 sbin -> usr/sbin (System binaries)
├── 📁 srv (Service data)
├── 📁 sys (System information)
├── 📁 tmp (Temporary files)
├── 📁 usr (User programs)
│   ├── 📁 bin (User binaries)
│   ├── 📁 lib (Libraries)
│   ├── 📁 local (Local software)
│   ├── 📁 sbin (System admin binaries)
│   └── 📁 share (Shared data)
└── 📁 var (Variable data)
    ├── 📁 log (Log files)
    ├── 📁 www (Web content)
    └── 📁 lib (Database files)

💡 NAVIGATION TIPS:
• Use 'pwd' to show current directory
• Use 'ls' to list files
• Use 'cd' to change directories
• Use 'cd ..' to go up one level
• Use 'cd ~' to go to home directory
• Use 'cd /' to go to root directory
• Use 'find' to search for files
• Use 'du -sh *' to check directory sizes

📊 DISK USAGE:
• Total: 100GB
• Used: 27GB (27%)
• Free: 69GB (69%)
• Home: 45GB used of 500GB
• Data: 120GB used of 200GB

============================================`,
        type: 'info'
    },

    'system-monitor': {
        output: `============================================
           REAL-TIME SYSTEM MONITOR
============================================

⏰ SYSTEM UPTIME: 2 days, 5 hours, 15 minutes
🔄 LOAD AVERAGE: 0.08, 0.03, 0.01 (1, 5, 15 min)

💻 CPU USAGE: 
   Overall: 2.3%
   User: 1.5%
   System: 0.7%
   Idle: 97.0%
   Cores: 8 cores, 16 threads
   Temperature: 45°C

💾 MEMORY USAGE:
   Total: 7.7GiB
   Used: 2.1GiB (27%)
   Free: 4.2GiB (55%)
   Buffers/Cache: 1.4GiB (18%)
   Available: 5.2GiB (68%)
   Swap: 2.0GiB (0% used)

💿 DISK USAGE:
   Root (/): 27% used (25GB of 98GB)
   Data (/data): 24% used (45GB of 200GB)
   Home (/home): 25% used (120GB of 500GB)
   Total: 190GB used of 798GB (24%)

🌐 NETWORK TRAFFIC:
   Interface: enp3s0
   Received: 123.4 MB
   Transmitted: 98.7 MB
   Speed: 1Gbps
   Status: Connected
   IP: 192.168.1.100

🔥 RUNNING SERVICES:
   ✅ SSH (port 22): Active
   ✅ Nginx (port 80, 443): Serving
   ✅ PostgreSQL (port 5432): Connected
   ✅ Node.js (port 8080): Running
   ✅ Docker: 4 containers
   ✅ Redis (port 6379): Caching
   ✅ MySQL (port 3306): Available

📊 PROCESS SUMMARY:
   Total: 245 processes
   Running: 1
   Sleeping: 244
   Threads: 512
   Users: 1 logged in

🔧 SYSTEM HEALTH: EXCELLENT
   ✅ All services running
   ✅ Disk space adequate
   ✅ Memory usage normal
   ✅ CPU load low
   ✅ Network stable
   ✅ Temperature safe

⏱️  LAST UPDATED: ${new Date().toLocaleTimeString()}
============================================`,
        type: 'info'
    },

    'export-history': {
        output: `✅ Command history exported successfully!
📁 File: terminal-history-${new Date().toISOString().slice(0, 10)}.txt
📍 Location: Downloads folder
📊 Contents: ${AppState.terminalHistory?.length || 0} commands

The file contains:
• Timestamp of each command
• Command executed
• Sequential numbering
• Export date and time

You can:
1. Share with your teacher
2. Review your learning progress
3. Use as a reference
4. Import into another system

💡 Tip: Regular exports help track your Linux learning journey!`,
        type: 'success'
    },

    // ===== ERROR HANDLING =====
    'notfound': {
        output: (cmd) => `Command '${cmd}' not found.

💡 Did you mean one of these?
• Type 'help' to see all available commands
• Use Tab for auto-completion
• Click commands in the panels
• Check spelling (Linux commands are case-sensitive)

🔍 Try searching for: ${cmd.split(' ')[0]}
📚 Or browse commands by category using the tabs

Common issues:
• Missing spaces: 'ls-la' should be 'ls -la'
• Wrong case: 'LS' should be 'ls'
• Missing arguments: Some commands need parameters
• Typo: Double-check the command spelling

Type 'cheat-sheet' for a quick reference guide.`,
        type: 'error'
    }
};
