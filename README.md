## 概述

`note`是一个非常简单的，用`yargs`开发的命令行程序，它的功能有：

1. 新建便签 (示例：note add --title=monday_note --body=a_wonderful_day)
1. 查询便签 (示例：note get -t monday_note）
1. 修改便签 (示例：note update -t monday_note -b new_content)
1. 删除便签 (示例：del -t monday_note)

便签以文件形式储存在`/tmp/note.json`文件中
:q

## 快速开始

**安装**

```bash
git clone git@github.com:huahuayu/node-cli-example.git
cd node-cli-example
npm install -g
```

**查看帮助**

使用`note -h`查看帮助

```text
$ note -h
Usage: note [add | get | update | del] [--title | --body]

Options:
  -c, --conf     absolute config file path (default $HOME/.note/conf.json)
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Examples:
  add     note add --config=/etc/note/conf.json --title=note1
          --body=a_wonderful_day
  add     note add -t note1 -b a_wonderful_day
  get     note get -t note1
  update  note update -t note1 -b new_content
  del     del -t note1

```

查看代码: [note.js](https://github.com/huahuayu/node-cli-example/blob/master/note.js)

## 程序特点

- 一个全功能的命令行程序
- 提供帮助文档（包含 Usage、常用命令、常用 option 等）
- 支持查看版本 (`note -v`)
- 提供常用的示例
- 支持参数简写（如 `-h`等价于`--help`）
- 支持设置参数类型（string,number 之类）
- 支持设置参数选输/必输
- 支持设置参数默认值
- 提供子命令帮助（如: `note add -h`）
- 敲错命令或参数的时候有提示
- 支持配置文件(命令行参数优先于配置文件中的参数)

## 测试案例

```bash
# 查看版本
note -v

# 查看帮助
note -h

# 查看子命令帮助
note add -h

# 增加一个便签
note add --title note1 --body cool

# 增加一个便签，仅提供标题，不指定便签内容
note add -t note2

# 增加一个便签，不写标题（报错）
note add

# 使用自定义的配置文件增加便签
# case1: 配置文件格式正确
# case2: 配置文件格式不正确
note add -c /tmp/conf.json -t note1 -b test

# 查询便签
# case1: 便签存在
# case2：便签不存在
note get -t note1

# 修改便签
# case1: 便签存在
# case2: 便签不存在
note update -t note1 -b new_content

# 删除便签
# case1: 便签存在
# case2: 便签不存在
note del -t note1
```

## 卸载

```bash
rm /usr/local/bin/note
```

## todo

1. 增删改查处理出错时 exit code 设置

## 参考资料

[yargs error handling](https://github.com/yargs/yargs/issues/883)
