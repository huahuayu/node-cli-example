## 快速开始

`note`是一个非常简单的，用`yargs`开发的命令行程序，它的功能有：

1. 新建便签
1. 查询便签
1. 删除便签

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

查看代码: [note.js](https://github.com/huahuayu/node-cli-example/blob/master/note.js)

## 程序特点

- 简洁（仅 80 行），依赖少(只依赖 `yargs`)
- 有必要的帮助文档（包含 Usage、常用命令、常用 option 等）
- 可以查看版本 (如: `note -v`)
- 有常用的示例
- 参数支持简写（如 `-h`等价于`--help`）
- 设置参数类型（string,number 之类）
- 设置参数选输/必输
- 设置参数默认值
- 敲错命令或参数的时候有提示
- 有子命令帮助（如: `note add -h`）

## 卸载

```bash
rm /usr/local/bin/note
```

## 参考资料

[yargs error handling](https://github.com/yargs/yargs/issues/883)
