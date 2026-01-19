// ============================================
// UPDATED COMMAND DATABASE - 50+ COMMANDS
// ============================================

const commands = {
    // ===== BASIC COMMANDS =====
    'help': {
        output: `============================================
        UBUNTU TERMINAL SIMULATOR - COMMAND REFERENCE
============================================

📁 BASIC COMMANDS:
    help        - Show this help message
    clear       - Clear terminal screen
    pwd         - Print working directory
    ls [options] - List directory contents
    cd [dir]    - Change directory
    whoami      - Display current user
    date        - Display current date/time
    history     - Show command history
    man [cmd]   - Display manual pages

📝 FILE OPERATIONS:
    touch       - Create empty file
    mkdir       - Create directory
    cp          - Copy files/directories
    mv          - Move/rename files
    rm          - Remove files/directories
    cat         - Display file content
    nano/vim    - Text editors
    grep        - Search text in files
    find        - Search for files
    chmod       - Change file permissions
    chown       - Change file owner

⚙️ SYSTEM INFORMATION:
    uname       - System information
    df          - Disk space usage
    free        - Memory usage
    top/htop    - Process monitor
    ps          - Process status
    uptime      - System uptime
    lscpu       - CPU information
    lsblk       - Block devices
    lshw        - Hardware information

🌐 NETWORK COMMANDS:
    ifconfig/ip - Network interfaces
    ping        - Test network connectivity
    netstat     - Network statistics
    ss          - Socket statistics
    curl/wget   - Download/transfer data
    nslookup    - DNS lookup
    dig         - DNS information
    traceroute  - Network route tracing

🛠️ DEVELOPMENT TOOLS:
    git         - Version control
    python3     - Python interpreter
    node        - Node.js runtime
    docker      - Container management
    npm         - Node package manager
    java        - Java runtime
    gcc         - C compiler
    make        - Build automation

💡 TIPS:
- Use Tab for auto-completion
- Use ↑/↓ arrows for command history
- Click commands in panels to insert
- Type 'tutorial' for guided learning
============================================`,
        type: 'info'
    },

    'clear': {
        output: '',
        type: 'clear'
    },

    'pwd': {
        output: '/home/student/projects/ubuntu-simulator',
        type: 'success'
    },

    'ls': {
        output: `Desktop/    Downloads/  Pictures/   Templates/
Documents/  Music/      Public/     Videos/`,
        type: 'success'
    },

    'ls -la': {
        output: `total 84
drwxr-xr-x  8 student student  4096 Jan 15 10:30 .
drwxr-xr-x 19 student student  4096 Jan 15 09:45 ..
-rw-r--r--  1 student student   220 Jan 15 09:45 .bash_logout
-rw-r--r--  1 student student  3771 Jan 15 09:45 .bashrc
-rw-r--r--  1 student student   807 Jan 15 09:45 .profile
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Desktop
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Documents
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Downloads
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Music
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Pictures
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Public
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Templates
drwxr-xr-x  2 student student  4096 Jan 15 10:15 Videos
drwxr-xr-x  8 student student  4096 Jan 15 10:30 ubuntu-simulator`,
        type: 'success'
    },

    'whoami': {
        output: 'student',
        type: 'success'
    },

    'date': {
        output: () => new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        }),
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
    8  clear
    9  history`,
        type: 'success'
    },

    'man ls': {
        output: `LS(1)                     User Commands                    LS(1)

NAME
       ls - list directory contents

SYNOPSIS
       ls [OPTION]... [FILE]...

DESCRIPTION
       List information about the FILEs (the current directory by default).

OPTIONS
       -a, --all
              do not ignore entries starting with .

       -l     use a long listing format

       -h, --human-readable
              with -l, print sizes like 1K 234M 2G

       -r, --reverse
              reverse order while sorting

       -t     sort by modification time

EXAMPLES
       ls -la
              List all files with details

       ls -lh
              List with human-readable sizes

       ls -t
              List sorted by modification time`,
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
        output: 'File renamed: old.txt → new.txt',
        type: 'success'
    },

    'rm file.txt': {
        output: 'File "file.txt" removed successfully.',
        type: 'success'
    },

    'cat file.txt': {
        output: `This is the content of file.txt

Welcome to Ubuntu Terminal Simulator!
This is a sample text file.

Line 1: Learning Linux commands is fun!
Line 2: Practice makes perfect.
Line 3: Ubuntu is an amazing OS.

End of file.`,
        type: 'success'
    },

    'nano file.txt': {
        output: `GNU nano 6.2                     file.txt                        

Welcome to nano editor!

You can edit text files here.
Press Ctrl+X to exit.

[ File loaded successfully ]`,
        type: 'info'
    },

    'find . -name "*.txt"': {
        output: `./file.txt
./Documents/notes.txt
./Downloads/todo.txt
./backup.txt`,
        type: 'success'
    },

    'grep "text" file.txt': {
        output: `This is a sample text file.`,
        type: 'success'
    },

    'chmod 755 script.sh': {
        output: 'Permissions changed: -rwxr-xr-x script.sh',
        type: 'success'
    },

    'chown student:student file.txt': {
        output: 'Ownership changed: student:student file.txt',
        type: 'success'
    },

    'tar -czf archive.tar.gz folder/': {
        output: 'Archive created: archive.tar.gz',
        type: 'success'
    },

    // ===== SYSTEM INFORMATION =====
    'uname -a': {
        output: 'Linux ubuntu 5.15.0-76-generic #83-Ubuntu SMP Thu Jun 15 19:16:32 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux',
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
/dev/sdb1       197G   45G  143G  24% /data`,
        type: 'success'
    },

    'free -h': {
        output: `               total        used        free      shared  buff/cache   available
Mem:           7.7Gi       2.1Gi       4.2Gi       213Mi       1.4Gi       5.2Gi
Swap:          2.0Gi       0.0Ki       2.0Gi`,
        type: 'success'
    },

    'top -n 1': {
        output: `top - 10:30:45 up 2 days,  5:15,  1 user,  load average: 0.08, 0.03, 0.01
Tasks: 245 total,   1 running, 244 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.3 us,  0.7 sy,  0.0 ni, 97.0 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :   7904.2 total,   4218.3 free,   1234.5 used,   2451.4 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.

PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
1001 student   20   0   12344   4568   3124 S   2.3   0.1   0:00.05 bash
1002 student   20   0   23456   7890   4567 S   1.0   0.1   0:00.12 node
1003 student   20   0   34567   1234    890 S   0.3   0.0   0:00.03 sshd`,
        type: 'info'
    },

    'ps aux | head -20': {
        output: `USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.0 169716 13072 ?        Ss   10:15   0:02 /sbin/init
root         2  0.0  0.0      0     0 ?        S    10:15   0:00 [kthreadd]
root         3  0.0  0.0      0     0 ?        I<   10:15   0:00 [rcu_gp]
root         4  0.0  0.0      0     0 ?        I<   10:15   0:00 [rcu_par_gp]
student   1001  0.0  0.0  12344  4568 pts/0    Ss   10:30   0:00 -bash
student   1002  0.0  0.1  23456  7890 pts/0    S+   10:30   0:00 node app.js
student   1003  0.0  0.0  34567  1234 ?        S    10:30   0:00 sshd: student@pts/1`,
        type: 'info'
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
Vendor ID:             GenuineIntel
Model name:            Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz
CPU MHz:               3800.000
CPU max MHz:           5100.0000
CPU min MHz:           800.0000`,
        type: 'info'
    },

    'lsblk': {
        output: `NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0   100G  0 disk 
├─sda1   8:1    0    98G  0 part /
├─sda2   8:2    0     1K  0 part 
└─sda5   8:5    0     2G  0 part [SWAP]
sdb      8:16   0   200G  0 disk 
└─sdb1   8:17   0   200G  0 part /data`,
        type: 'info'
    },

    'lshw -short': {
        output: `H/W path      Device      Class       Description
===================================================
system        Computer
/0                        bus         Motherboard
/0/0                      memory      64KiB BIOS
/0/1                      processor   Intel(R) Core(TM) i7-10700K
/0/100                    bridge      8th Gen Core Processor Host Bridge
/0/100/1                  bridge      Xeon E3-1200 v5/E3-1500 v5/6th Gen
/0/100/2      display     display     HD Graphics 630
/0/100/14                 bus         Intel Corporation
/0/100/14/0   enp3s0      network     Ethernet Connection (2) I219-V`,
        type: 'info'
    },

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

    'systemctl status': {
        output: `● ubuntu-simulator.service - Ubuntu Terminal Simulator
   Loaded: loaded (/etc/systemd/system/ubuntu-simulator.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2024-01-15 10:30:45 UTC; 2 days ago
 Main PID: 1002 (node)
    Tasks: 10 (limit: 4915)
   Memory: 45.8M
   CGroup: /system.slice/ubuntu-simulator.service
           └─1002 node /home/student/projects/ubuntu-simulator/app.js`,
        type: 'info'
    },

    // ===== NETWORK COMMANDS =====
    'ifconfig': {
        output: `enp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::20c:29ff:fea6:b3c  prefixlen 64  scopeid 0x20<link>
        ether 00:0c:29:a6:0b:3c  txqueuelen 1000  (Ethernet)
        RX packets 123456  bytes 123456789 (123.4 MB)
        TX packets 98765  bytes 98765432 (98.7 MB)

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)`,
        type: 'info'
    },

    'ping google.com': {
        output: `PING google.com (142.250.185.78) 56(84) bytes of data.
64 bytes from 142.250.185.78: icmp_seq=1 ttl=117 time=15.4 ms
64 bytes from 142.250.185.78: icmp_seq=2 ttl=117 time=14.9 ms
64 bytes from 142.250.185.78: icmp_seq=3 ttl=117 time=15.1 ms

--- google.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2005ms
rtt min/avg/max/mdev = 14.976/15.165/15.431/0.234 ms`,
        type: 'info'
    },

    'netstat -tulpn': {
        output: `Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      857/sshd            
tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN      921/postgres        
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      934/nginx           
tcp6       0      0 :::22                   :::*                    LISTEN      857/sshd            
tcp6       0      0 :::8080                 :::*                    LISTEN      1002/node           
udp        0      0 0.0.0.0:68              0.0.0.0:*                           758/dhclient`,
        type: 'info'
    },

    'ss -tulpn': {
        output: `Netid   State    Recv-Q   Send-Q   Local Address:Port   Peer Address:Port   Process   
tcp     LISTEN   0        128      0.0.0.0:22          0.0.0.0:*       users:(("sshd",pid=857,fd=3))
tcp     LISTEN   0        128      127.0.0.1:5432      0.0.0.0:*       users:(("postgres",pid=921,fd=5))
tcp     LISTEN   0        128      0.0.0.0:80          0.0.0.0:*       users:(("nginx",pid=934,fd=6))
tcp     LISTEN   0        128      :::22               :::*            users:(("sshd",pid=857,fd=4))
tcp     LISTEN   0        128      :::8080             :::*            users:(("node",pid=1002,fd=12))`,
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

    'wget https://example.com/file.zip': {
        output: `--2024-01-15 10:30:45--  https://example.com/file.zip
Resolving example.com (example.com)... 93.184.216.34, 2606:2800:220:1:248:1893:25c8:1946
Connecting to example.com (example.com)|93.184.216.34|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1048576 (1.0M) [application/zip]
Saving to: 'file.zip'

file.zip           100%[===================>]   1.00M  1.23MB/s    in 0.8s    

2024-01-15 10:30:46 (1.23 MB/s) - 'file.zip' saved [1048576/1048576]`,
        type: 'info'
    },

    'nslookup google.com': {
        output: `Server:         8.8.8.8
Address:        8.8.8.8#53

Non-authoritative answer:
Name:   google.com
Address: 142.250.185.78
Name:   google.com
Address: 2607:f8b0:4004:815::200e`,
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

    'traceroute google.com': {
        output: `traceroute to google.com (142.250.185.78), 30 hops max, 60 byte packets
 1  router.local (192.168.1.1)  1.234 ms  1.567 ms  1.789 ms
 2  10.0.0.1 (10.0.0.1)  5.678 ms  6.123 ms  6.456 ms
 3  72.14.205.1 (72.14.205.1)  10.123 ms  10.456 ms  10.789 ms
 4  108.170.242.1 (108.170.242.1)  15.123 ms  15.456 ms  15.789 ms
 5  142.250.185.78 (142.250.185.78)  20.123 ms  20.456 ms  20.789 ms`,
        type: 'info'
    },

    'hostname': {
        output: 'ubuntu-server',
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

no changes added to commit (use "git add" and/or "git commit -a")`,
        type: 'info'
    },

    'python3 --version': {
        output: 'Python 3.10.6',
        type: 'success'
    },

    'node --version': {
        output: 'v18.12.1',
        type: 'success'
    },

    'docker ps': {
        output: `CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS        PORTS                    NAMES
a1b2c3d4e5f6   nginx:latest   "/docker-entrypoint.…"   2 days ago    Up 2 days     0.0.0.0:80->80/tcp       webserver
b2c3d4e5f6a1   mysql:8.0      "docker-entrypoint.s…"   3 days ago    Up 3 days     0.0.0.0:3306->3306/tcp   database`,
        type: 'info'
    },

    'npm --version': {
        output: '9.2.0',
        type: 'success'
    },

    'java --version': {
        output: `openjdk 17.0.5 2022-10-18
OpenJDK Runtime Environment (build 17.0.5+8-Ubuntu-2ubuntu122.04)
OpenJDK 64-Bit Server VM (build 17.0.5+8-Ubuntu-2ubuntu122.04, mixed mode, sharing)`,
        type: 'info'
    },

    'gcc --version': {
        output: `gcc (Ubuntu 11.3.0-1ubuntu1~22.04) 11.3.0
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

    // ===== SPECIAL COMMANDS =====
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
🔧 CPU: Intel(R) Core(TM) i7-10700K (8 cores)
🌐 IP: 192.168.1.100
============================================`,
        type: 'info'
    },

    'network-check': {
        output: `============================================
              NETWORK STATUS
============================================
✅ Internet: Connected
🌐 Local IP: 192.168.1.100
📡 Gateway: 192.168.1.1
🔗 Interface: enp3s0 (Ethernet)
📊 DNS: 8.8.8.8 (Google)
🚀 Ping to Google: 15ms
📈 Bandwidth: 1Gbps
============================================`,
        type: 'info'
    },

    'process-list': {
        output: `============================================
              RUNNING PROCESSES
============================================
PID     USER    CPU%   MEM%   COMMAND
1001    student  0.5%   0.1%   bash (terminal)
1002    student  2.3%   0.6%   node (web server)
1003    student  0.0%   0.0%   sshd
 857    root     0.0%   0.2%   sshd (server)
 921    postgres 0.3%   1.2%   postgres (database)
 934    root     0.1%   0.8%   nginx (web server)
============================================
Total processes: 245 | Running: 1 | Sleeping: 244`,
        type: 'info'
    },

    'tutorial': {
        output: `============================================
          UBUNTU TERMINAL TUTORIAL
============================================
Welcome to the interactive tutorial!

📚 LESSON 1: NAVIGATION
1. Type 'pwd' to see your current directory
2. Type 'ls' to list files in current directory
3. Type 'ls -la' for detailed listing

📁 LESSON 2: FILE OPERATIONS
1. Create a file: 'touch test.txt'
2. View content: 'cat test.txt'
3. Remove file: 'rm test.txt'

⚙️ LESSON 3: SYSTEM INFO
1. Check system: 'uname -a'
2. Disk space: 'df -h'
3. Memory: 'free -h'

🌐 LESSON 4: NETWORK
1. Check IP: 'ifconfig'
2. Test connection: 'ping google.com'
3. Check ports: 'netstat -tulpn'

💡 TIP: Use 'help' for full command reference
       Click commands in panels to insert them
============================================`,
        type: 'info'
    },

    // ===== ERROR HANDLING =====
    'notfound': {
        output: (cmd) => `Command not found: '${cmd}'\nType 'help' for available commands or click from the panels.`,
        type: 'error'
    }
};
