#!/usr/bin/env sh
#Add in vue.config.js:
# module.exports = {
#   publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
# };
# сборка
npm run build

git add dist
git commit -m 'adding dist subtree'

git subtree push --prefix dist origin gh-pages