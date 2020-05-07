#!/usr/bin/env node
const yargs = require("yargs");
const log = console.log;

// 如果不在程序中指定，note -v输出的版本号为package.json中的版本号
// 如果程序中指定了，则使用指定的版本号
yargs.version("1.1.0");

// 定义命令，add, get, del
yargs.command({
  // 命令名
  command: "add",
  // 命令描述，用来生成帮助文档中的描述
  desc: "create a note",
  builder: {
    // 命令参数，便签标题
    title: {
      // 参数描述，用来生成帮助文档
      desc: "note title",
      // true-必输，false-选输
      demandOption: true,
      // 参数类型，帮助文档会有体现
      type: "string",
    },
    // 第二个参数，便签内容
    body: {
      desc: "note content",
      demandOption: false,
      type: "string",
      // 因为第二个参数是非必输项，所以设置一个默认值
      default: "default value",
    },
  },
  // 命令被触发后执行的功能
  handler: function () {
    log(
      "adding a new note, title: " +
        yargs.argv.title +
        " body: " +
        yargs.argv.body
    );
  },
});

yargs.command({
  command: "get",
  desc: "get a note",
  builder: {
    title: {
      desc: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    log("geting the note, title: " + yargs.argv.title);
  },
});

yargs.command({
  command: "del",
  desc: "delete a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function () {
    log("deleting the note, title: " + yargs.argv.title);
  },
});

yargs
  // 设置参数简写
  .alias("t", "title")
  .alias("b", "body")
  .alias("h", "help")
  .alias("v", "version")
  // 设置Usage
  .usage("Usage: note [add | get | del] [--title | --body]")
  // 设置Example
  .example(
    "add a note:\nnote add --title=monday_note --body=a_wonderful_day\nnote add -t monday_note -b a_wonderful_day\n\nget a note:\nnote get -t monday_note\n\ndelete a note:\nnote del -t monday_note"
  );

// 设置有效性检查 1.至少一个参数 2.严格检查模式
yargs.demandCommand(1).strict();

// 解析命令行参数
yargs.parse();
