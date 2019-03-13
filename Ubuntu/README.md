 ### ubuntu 16.04 apt源使用阿里云镜像
 
 - 1.备份原来的源
 
 ```
 sudo cp /etc/apt/sources.list /etc/apt/sources.list.bakcup
 ```
 
 - 2.编辑apt源的文件
 
 ``` 
 sudo vim /etc/apt/sources.list
 ```
 
 将内容替换为并保存
 
 ```
    deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
    deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
    deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
    deb http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
    deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse
    deb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse
    deb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse
    deb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse
    deb-src http://mirrors.aliyun.com/ubuntu/ xenial-proposed main restricted universe multiverse
    deb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multivers
 ```
 
- 3.执行下面命令

```
sudo apt-get update
```
