const Collection = require("../../model/collection");

const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find();
    return res.json({ collections });
  } catch (err) {
    console.log(err);
  }
};

const createCollections = async (req, res) => {
  const { name, topic, description, markdown } = req.body;
  const path = req.file.path;
  const result = await Collection.insertMany({
    name,
    topic,
    description,
    markdown,
    image: path
  });
};

module.exports = {
  getCollections,
  createCollections,
};
