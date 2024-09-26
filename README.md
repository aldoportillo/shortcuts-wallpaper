# Shortcuts Wallpaper

## Keyboard Shortcuts

### Window Management

- <kbd>cmd</kbd> + <kbd>ctrl</kbd> + <kbd>F</kbd> - Toggle Full Screen
- <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>F</kbd> - Toggle Tabs
- <kbd>cmd</kbd> + <kbd>option</kbd> + <kbd>M</kbd> - Minimize Window
- <kbd>cmd</kbd> + <kbd>W</kbd> - Close Current Tab
- <kbd>cmd</kbd> + <kbd>T</kbd> - Open New Tab
- <kbd>cmd</kbd> + <kbd>Q</kbd> - Quit Application
- <kbd>cmd</kbd> + <kbd>tab</kbd> - Switch Between Open Applications
- <kbd>cmd</kbd> + <kbd>option</kbd> + <kbd>D</kbd> - Toggle Dock Visibility
- <kbd>cmd</kbd> + <kbd>K</kbd> - Clear Terminal

### VSCode

- <kbd>cmd</kbd> + <kbd>J</kbd> - Toggle Terminal
- <kbd>cmd</kbd> + <kbd>B</kbd> - Toggle Sidebar
- <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>F</kbd> - Project-Wide Search
- <kbd>cmd</kbd> + <kbd>F</kbd> - File-Wide Search
- <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>L</kbd> - Select All Instances of Highlighted Text
- <kbd>cmd</kbd> + <kbd>P</kbd> - Quick Open Files
- <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>P</kbd> - Command Palette
- <kbd>cmd</kbd> + <kbd>K</kbd>, then <kbd>cmd</kbd> + <kbd>S</kbd> - All Keyboard Shortcuts

### Typing and Editing

- <kbd>cmd</kbd> + <kbd>Z</kbd> - Undo
- <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>Z</kbd> - Redo
- <kbd>cmd</kbd> + <kbd>C</kbd> - Copy
- <kbd>cmd</kbd> + <kbd>V</kbd> - Paste
- <kbd>cmd</kbd> + <kbd>X</kbd> - Cut
- <kbd>cmd</kbd> + <kbd>A</kbd> - Select All
- <kbd>cmd</kbd> + <kbd>S</kbd> - Save
- <kbd>option</kbd> + <kbd>Arrow</kbd> - Move cursor to the previous or next word
- <kbd>cmd</kbd> + <kbd>Arrow</kbd> - Move cursor to the beginning or end of the line
- <kbd>shift</kbd> + <kbd>option</kbd> + <kbd>Arrow</kbd> - Select text to the previous or next word

## Useful Terminal Commands

### Navigation

- `cd [directory]` - Change current directory to `[directory]`.
- `ls` - List files and directories in the current directory.
- `pwd` - Display the current directory path.

### File Operations

- `mv [source] [destination]` - Move or rename files or directories.
- `rm [file]` - Remove/delete a file.
- `rm -r [directory]` - Remove/delete a **directory** and its contents.
- `mkdir [directory]` - Create a new directory.
- `touch [file]` - Create a new empty file or update the timestamp of an existing file.

### GitHub

- `git add [file]` - Stage changes for the next commit.
- `git commit -m "message"` - Commit changes with a message.
- `git checkout [branch]` - Switch to a different branch or restore working tree files.
- `git push` - Push local commits to the remote repository.
- `git pull` - Fetch and merge changes from the remote repository.
- `git clone [repository_url]` - Clone a repository into a new directory.
- `git branch` - List, create, or delete branches.
- `git log` - View the commit history.

### System Information

- `top` - Display active processes.
- `df -h` - Show disk space usage in a human-readable format.
- `du -sh [directory]` - Show the total disk usage of a directory.

### Process Management

- `chmod +x [file]` - Make a file executable.
- `ps aux | grep [process_name]` - Search for a specific process by name (i.e Rails).
- `sudo lsof -i :[port_number]` - List open files and processes using a specific port.
- `kill -9 [PID]` - Forcefully terminate a process by its Process ID (PID).
- `top` - Display real-time system processes.
