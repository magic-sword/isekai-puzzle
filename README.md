# isekai-puzzle
異世界∞異世界のパズルを作るプログラム　元はruさんにより製作されました

# 開発環境

Google Apps Script上で、Webアプリケーションとして動作させます
* [参考](https://qiita.com/taromorimotohf/items/5e52cb9062600e8ccac3) Google Apps Script でHTMLファイルを作って表示。
* [参考](https://qiita.com/zumi0/items/a4dd6e00cad7ee341d77) ローカルでGASの開発を可能にするCLIツールclaspを使ってみた

## 必要要件

Nodeのインストールが必要です
*  [参考](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b) Node.jsをインストールする


claspをインストールします。

`npm install -g @google/clasp`
* [参考](https://qiita.com/zumi0/items/a4dd6e00cad7ee341d77) ローカルでGASの開発を可能にするCLIツールclaspを使ってみた


Googleアカウントにログインします

`clasp login`

Google Apps Script APIを有効にします
* https://script.google.com/home/usersettings
* [参考](https://www.gluegent.com/blog/2022/03/gas-2-gas.html) GASのローカル開発環境 ~その2. ローカル環境とGASプロジェクトの連携

## 使い方

変更をアップロードする

`clasp push`

ファイルをダウンロードする

`clasp pull`

## GoogleAppsScript(GAS)を固定URLでデプロイする方法

[参考](https://codeaid.jp/gas-deploy/#google_vignette) GoogleAppsScript(GAS)を固定URLでデプロイする方法