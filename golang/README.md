### Install go and config environment

1.Update source list
```
sudo apt-get update
```

2.Install golang
```
sudo apt-get install golang-1.9
```

3.Config environment, edit /etc/profile, append content
```
  export GOROOT=/usr/lib/go
  export GOBIN=$GOROOT/bin
  export PATH=$PATH:$GOBIN
  export GOPATH=$HOME/goproj
```

4.source /etc/profile

5.View golang version
```
go version
```
