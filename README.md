# wastebin-client

wastebin 配套CLI命令行客户端

npm包地址： https://www.npmjs.com/package/wastebin

使用实例

```bash
npm i -g wastebin #全局安装

echo "wuuconix" | waste
cat index.js | waste
```

![](https://tvax1.sinaimg.cn/large/007YVyKcly1h2w662yej0j30fx01t0ug.jpg)

或者更加打开一下脑洞，利用qrencode来生成链接二维码？

```bash
echo "How About Generating a QRCode for Share?" | waste | qrencode -t UTF8
```

![image](https://tvax4.sinaimg.cn/large/007YVyKcly1h2w67d3yzyj30oy0a9abi.jpg)

PS: npm安装的时候如果找不到包，可能是你用的镜像源还没有更新。

```bash
npm config delete registry #关闭镜像源
npm i -g wastebin
```

