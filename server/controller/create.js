const Topics = require("../model/topic");
const Tags = require("../model/tag");

const topicController = async (req, res) => {
  const topics = await Topics.find();
  return res.json(topics);
};

const createTopicController = async (req, res) => {
  const data = req.body;
  if (!data) return res.status(404).json({ message: "Invalid topic" });

  const duplicate = await Topics.findOne({ topic: data.topic.toLowerCase() }).exec();
  if (duplicate) {
    return res.status(409).json({ message: "Topic already exists" });
  }

  const result = await Topics.create({ topic: data.topic.toLowerCase() });

  return res.json({ message: `${result} is created` });
};

const tagController = async (req, res) => {
  const tags = await Tags.find();
  return res.json(tags);
}

const createTagController = async (req, res) => {
  const data = req.body;

  if (!data) return res.status(404).json({ message: "Invalid tag" });

  const duplicate = await Tags.findOne({ tag: data.tag.toLowerCase() }).exec();
  if (duplicate) {
    return res.status(409).json({ message: "Tag already exists" });
  }

  const result = await Tags.create({ tag: data.tag.toLowerCase() });
  console.log(result, "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")

  return res.json({ message: `${result} is created` });
}

module.exports = { topicController, createTopicController, tagController, createTagController };
