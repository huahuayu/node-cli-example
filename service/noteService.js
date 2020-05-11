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

  console.log(filter.length === 0 ? "note is not exists" : filter[0]);
};

/**
 * 更新note条目
 * @param title
 * @param body
 */
const update = function (title, body) {
  let notes = loadNotes();

  if (notes.length === 0) {
    console.log("note database is not create yet!");
    return;
  }

  let filter = notes.filter(function (note) {
    return note.title === title;
  });

  if (filter.length === 0) {
    console.log("note is not exists!");
    return;
  }

  notes.find(note => note.title === title).body = body;

  try {
    fs.writeFileSync("/tmp/note.json", JSON.stringify(notes, null, 2));
    console.log("note is update successfully!");
  } catch (e) {
    console.log("fail to update note: " + e.message);
  }
};

/**
 * 删除note条目
 * @param title
 */
const del = function (title) {
  let notes = loadNotes();

  if (notes.length === 0) {
    console.log("note database is not create yet!");
    return;
  }

  let filter = notes.filter(function (note) {
    return note.title !== title;
  });

  try {
    fs.writeFileSync("/tmp/note.json", JSON.stringify(filter, null, 2));
    console.log("note is delete successfully!");
  } catch (e) {
    console.log("fail to delete note: " + e.message);
  }

};

module.exports = {
  add,
  get,
  update,
  del,
};
