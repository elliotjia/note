## generate ssh key on windows

1. Set user name and email (First use)

```
$ git config --global user.name "elliotjia"
$ git config --global user.email "u.elliotjia@gmail.com"
```

2. ssh key gen
```
$ ssh-keygen -t rsa -C "u.elliotjia@gmail.com"
```

3. type `eval  "ssh-agent -s"`

4. type command line
```
$ ssh-add ~/.ssh/id_rsa
```
If show `could not open a connection to your authentication agent` error, type follow command, then exec step 4

```
ssh-agent bash
```

5. Config key to github
```
$ cat ~/.ssh/id_rsa.pub
```
copy and config github setting
