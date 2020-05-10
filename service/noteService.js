const fs = require("fs");

const defaultNotePath = "/tmp/note.json";

/**
 * 返回note.json文件object，如果文件不存在则返回空数组对象
 * @returns {*[]|any}
 */
const loadNotes = function () {
  if (!fs.existsSync(defaultNotePath)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(defaultNotePath).toString());
  } catch (e) {
    console.log(e.message);
  }
};

/**
 * 新增note
 * @param title
 * @param body
 */
const add = function (title, body) {
  let notes = loadNotes();

  // 找出相同标题的note
  let filter = notes.filter(function (note) {
    return note.title === title;
  });

  if (filter.length !== 0) {
    console.log("note title exists!");
    return;
  }

  notes.push({
    title: title,
    body: body,
  });

  try {
    fs.writeFileSync("/tmp/note.json", JSON.stringify(notes, null, 2));
    console.log("note is added successfully!");
  } catch (e) {
    console.log("fail to add note: " + e.message);
  }
};

/**
 * 查询note
 * @param title
 */
const get = function (title) {
  let notes = loadNotes();

  if (notes.length === 0) {
    console.log("note database is not create yet!");
    return;
  }

  let filter = notes.filter(function (note) {
    return note.title === title;
  });

  console.log(filter[0] === undefined ? "note is not exists" : filter[0]);
};

// 修改note
const update = function (title, body) {
  console.log("update note: " + title + "body: " + body);
};

// 删除note
const del = function (title) {
  console.log("del note: " + title);
};

module.exports = {
  add,
  get,
  update,
  del,
};
