const Collection = require("../model/collection");
const Item = require("../model/item");
const Item_input = require("../model/item-input");
const Comment = require("../model/comment");

let items = [
    { name: "id", type: "String" },
    { name: "name", type: "String" },
    { name: "tag", type: "String" },
  ],
  parent;

const getCollection = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "id not found" });
  }
  const collection = await Collection.findById({ _id: id });
  return res.json({ collection });
};

const getCollections = async (req, res) => {
  const collection = await Collection.find();
  return res.json({ collection });
};

const createCollection = async (req, res) => {
  const { name, topic, description, markdown } = req?.body;
  const path = req?.file?.path;
  if (!name || !topic || !path) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const result = await Collection.create({
    name,
    topic,
    description,
    markdown,
    image: path,
    item_fields: items,
  });

  items = [
    { name: "id", type: "String" },
    { name: "name", type: "String" },
    { name: "tag", type: "String" },
  ];
  const updatedCollections = await Collection.find();
  return res.status(200).json(updatedCollections);
};

const getSavedItems = async (req, res) => {
  const items = await Item.find({ parent: req?.query?.id });
  return res.json(items);
};

const saveItem = async (req, res) => {
  const result = await Item.create(req?.body);
  const savedItems = await Item.find();
  return res.json(savedItems);
};

const setItem = async (req, res) => {
  const { name, type } = req.body;
  if (!name || !type) {
    return res.status(400).json({ message: "Invalid type or name" });
  }

  items.push({ name, type });
  return res.json(items);
};

const getItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  console.log(item);
  return res.json(item);
};

const getComments = async (req, res) => {
  const comments = await Comment.find();
  console.log(comments, "hello this is comments");
  return res.json(comments);
};

const createComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  console.log(comment);
  const updatedComments = await Comment.find();
  return res.json(updatedComments);
};

const handleLike = async (req, res) => {
  const result = await Item.findOne({_id: req.params.id}).exec();
  console.log(req.body.like);

  if (req.body.like) {
    result.likes++;
  } else {
    result.likes--;
  }
  await result.save();
  return res.json(result);
};

module.exports = {
  getCollections,
  createCollection,
  getCollection,
  getSavedItems,
  setItem,
  saveItem,
  getItem,
  getComments,
  createComment,
  handleLike,
};
