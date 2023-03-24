#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹（ 进入VuePress打包后的文件夹根目录 ）
cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin git@github.com:zedwanger/myblog.git
git checkout -b gh-pages

git push -u origin gh-pages -f

# git add .
# git commit -m 'update docs'
# git push origin master

cd -
