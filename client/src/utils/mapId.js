const mapId = (usrs, checkbox) => {
  let ids = usrs.map((item, index) => {
    if (checkbox.includes(index + 1)) return item._id;
  });
  ids = ids.filter(Boolean);
  return ids;
};

export default mapId;
