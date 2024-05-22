# Capacitor + Electron 

通过 `Capacitor` 构建 `Android` 和 `ios`, 并使用 `Electron` 构建桌面应用的模版。集成了 `i18n`。


# 手机端开发热更新配置

> [官网教程地址](https://capacitorjs.com/docs/guides/live-reload)

1、本地已经配置好命令, 先运行：

```shell
pnpm run dev
```

2、运行成功后会有几个地址出来(一般需要第二个地址)：

```shell
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.....:5173/
  ➜  Network: http://...:5173/
```

3、然后在 `capacitor.config.json` 文件中配置 `server` 选项：

```ts
const config: CapacitorConfig = {
  server: {
    url: "把上面运行出来的地址填到这里，如： http://192.....:5173/",
    cleartext: true
  }
}
```

4、然后根据自己需要运行的平台跑下面其中一个命令：

```shell
# ios端
pnpm run dev:ios

# android端
pnpm run dev:android
```

5、如果是虚拟机运行，就点击运行，跑起来就可以看到热更新了。

6、如果是真机运行，确保在同一个局域网。