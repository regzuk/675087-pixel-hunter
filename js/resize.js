const resize = (frame, given) => {
  const r = (given.width > given.height) ? frame.width / given.width : frame.height / given.height;
  return {width: Math.floor(given.width * r), height: Math.floor(given.height * r)};
};

export {resize};
