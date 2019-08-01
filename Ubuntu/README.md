# Ubuntu apt-get command uninstall software

apt-get uninstall command: `remove/purge/autoremove/clean/autoclean` etc

```
apt-get purge / apt-get --purge remove
```
Will delete installed package and config file, wont delete dependent installation package

```
apt-get autoremove
```

Will delete dependency package no longer needed, reserved config file

```
apt-get remove
```

Will delete installed packag, reserved dependency package and config file

```
apt-get autoclean
```
APT的底层包是dpkg, 而dpkg 安装Package时, 会将 *.deb 放在 /var/cache/apt/archives/中，apt-get autoclean 只会删除 /var/cache/apt/archives/ 已经过期的deb。
```
apt-get clean
```
使用 apt-get clean 会将 /var/cache/apt/archives/ 的 所有 deb 删掉，可以理解为 rm /var/cache/apt/archives/*.deb。

