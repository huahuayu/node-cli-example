## 概述

`note`是一个非常简单的，用`yargs`开发的命令行程序，它的功能有：

1. 新建便签
1. 查询便签
1. 删除便签

## 快速开始

**安装**

```bash
git clone git@github.com:huahuayu/node-cli-example.git
cd node-cli-example
npm install -g
```

**查看帮助**

使用`node --help`查看帮助

```
$ node --help
Usage: note [add | get | del] [--title | --body]

Commands:
  note add  create a note
  note get  get a note
  note del  delete a note

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Examples:
  add a note:
  note add --title=monday_note --body=a_wonderful_day
  note add -t monday_note -b a_wonderful_day

  get a note:
  note get -t monday_note

  delete a note:
  note del -t monday_note
```
