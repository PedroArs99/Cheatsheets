# Git Commands, Help & Tips

## Git Basics

#### Initialize a repository
```
$ git init
```

####  Link a local repo with a Github one
```
$ git remote add origin <link>
```

#### Clone a repository 
```
$ git clone "http://PedroArs99.github.com/Efake"
```

#### See status of a repository  
```
$ git status
```

### Log all commits
```
$ git log
```

####  Track files & changes
```
$ git add <filename or .>
```

####  Save changes
```
$ git commit <filename or -a> -m "Description Title" [-m "Description body"]
```

#### Save changes online to a repository  
```
$ git push [origin] [master]
```
origin is used when there are more than one repository and we need to specify which of them to use OR when we didn't cloned the repo. 

Master is the name of the branch.

By default git push is git push origin master.

####  Download online changes to local machine
```
$ git pull 
```
---
## Branching

####  List branches
```
$ git branch
```

####  Create a branch
```
$ git checkout -b [branch name]
```

#### Switch between branches  
```
$ git checkout [branch name]
```

#### Show differences between branches 
```
$ git diff [branch name]
```

#### Close branch
```
$ git branch -d [branch name]
```

### Merge branches 
```
$ git merge [branch name]
```
---
## Undoing changes

### Undo staged changes
```
$ git reset <File name>
```

### Undo commited changes
```
$ git reset <--hard>HEAD<~1>
```
The number indicates how many commits we want to go back.
It's also possible to indicate the specific commit hash.
--hard tells git to remove all the changes, instead of only unstaging them.

---
## Forking
Fork is useful to get a full copy of other's people code which you don't have access to.



---
## SSH Keys

#### Generate SSH key  
```
$ ssh-keygen -t rsa -b 4096 -C "pjap@uma.es"
```
Stored on ~/.ssh/filename

####  Add key to Github
1. Go to Github profile.
1. SSH & GPG Keys.
1. New SSH Key.
1. Set title & paste key.


####  Add key to local git command
```
$ nano ~/.shh/config
```
```
Paste:
    Host *
        AddKeysToAgent yes
        UseKeyChain yes
        IdentityFile ~/.ssh/filename
```
```
$ ssh-add -K ~/.ssh/filename
``` 

