### Delete a local branch:
$ git branch -d <local-branch>
(Force Delete)
$ git branch -D <local-branch> 

### Delete a remote branch:
$ git push origin --delete <remote-branch-name>

### Create a new branch:
$ git checkout -b feature_branch_name

### Push your branch to the remote repository:
$ git push -u origin feature_branch_name

### View branches
$ git branch
(view both remote-tracking branches and local branches)
$ git branch -a

### More about git: https://forum.freecodecamp.org/t/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too/13222