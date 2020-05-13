const fs = require("fs");

const defaultNotePath = "/tmp/note.json";

/**
 * 返回note.json文件object，如果文件不存在则返回空数组对象
 * @returns {*[]|any}
 */
const loadNotes = (notePath) => {
  if (!fs.existsSync(notePath)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(defaultNotePath).toString());
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

/**
 * 新增note
 * @param argv
 */
const add = (argv) => {
  const notes = loadNotes(argv.notePath);

  // 找出相同标题的note
  const duplicateTitleNotes = notes.filter((note) => note.title === argv.title);

  if (duplicateTitleNotes.length !== 0) {
    console.log("duplicate title!");
    return;
  }

  notes.push({
    title: argv.title,
    body: argv.body,
  });

  try {
    fs.writeFileSync(argv.notePath, JSON.stringify(notes, null, 2));
    console.log("note is added successfully! view at " + argv.notePath);
  } catch (e) {
    console.log("fail to add note: " + e.message);
    process.exit(1);
  }
};

/**
 * 查询note
 * @param argv
 */
const get = (argv) => {
  const notes = loadNotes(argv.notePath);

  if (notes.length === 0) {
    console.log("note database is not create yet!");
    return;
  }

  const filter = notes.filter((note) => note.title === argv.title);

  console.log(filter.length === 0 ? "note does not exist!" : filter[0]);
};

/**
 * 更新note条目
 * @param argv
 */
const update = (argv) => {
  const notes = loadNotes(argv.notePath);

  if (notes.length === 0) {
    console.log("note database is not create yet!");
    return;
  }

  const noteToUpdate = notes.find((note) => note.title === argv.title);
  if (noteToUpdate === undefined) {
    console.log("note does not exist!");
    return;
  }
  noteToUpdate.body = argv.body;

  try {
    fs.writeFileSync(argv.notePath, JSON.stringify(notes, null, 2));
    console.log("note is update successfully!");
  } catch (e) {
    console.log("fail to update note: " + e.message);
    process.exit(1);
  }
};

/**
 * 删除note条目
 * @param argv
 * @param title
 */
const del = (argv) => {
  const notes = loadNotes(argv.notePath);

  if (notes.length === 0) {
    console.log("note database is not create yet!");
    return;
  }

  const notesToKeep = notes.filter((note) => note.title !== argv.title);

  if (notesToKeep.length === notes.length) {
    console.log("note does not exist!");
    return;
  }

  try {
    fs.writeFileSync(argv.notePath, JSON.stringify(notesToKeep, null, 2));
    console.log("note is deleted successfully!");
  } catch (e) {
    console.log("fail to delete note: " + e.message);
    process.exit(1);
  }
};

module.exports = {
  add,
  get,
  update,
  del,
};
