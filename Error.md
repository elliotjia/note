## Ubuntu

### GPG error: the public key is not available

- I get GPG error when I try to update software

```
sudo apt-get update
W: GPG error: https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 Release: 
The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 
```

- run command line

```
$ sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com 68818C72E52529D4
Executing: /tmp/tmp.lOwSH9kImm/gpg.1.sh --recv-keys
--keyserver
keyserver.ubuntu.com
68818C72E52529D4
gpg: requesting key E52529D4 from hkp server keyserver.ubuntu.com
gpg: key E52529D4: public key "MongoDB 4.0 Release Signing Key <packaging@mongodb.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1  (RSA: 1)
```
