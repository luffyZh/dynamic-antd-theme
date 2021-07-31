# 在设置淘宝镜像的时候发布不成功的解决办法

```bash
# 登陆
yarn login --registry http://registry.npmjs.org

# 发布
yarn publish --registry http://registry.npmjs.org

# 用户名输入错误可以重新推出
yarn logout
```