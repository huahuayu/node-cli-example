#!/usr/bin/env node
const yargs = require("yargs");
const log = console.log;

yargs.version("1.1.0");

yargs.command({
  command: "add",
  desc: "create a note",
  builder: {
    title: {
      desc: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      desc: "note content",
      demandOption: false,
      type: "string",
      default: "default value",
    },
  },
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
  .alias("t", "title")
  .alias("b", "body")
  .alias("h", "help")
  .alias("v", "version")
  .usage("Usage: note [add | get | del] [--title | --body]")
  .example(
    "add a note:\nnote add --title=monday_note --body=a_wonderful_day\nnote add -t monday_note -b a_wonderful_day\n\nget a note:\nnote get -t monday_note\n\ndelete a note:\nnote del -t monday_note"
  );

yargs.demandCommand(1).strict();

yargs.parse();
