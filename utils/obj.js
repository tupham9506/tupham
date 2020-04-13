
/**
 * [description]
 * @param  {[type]} obj [description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export const maxObject = (obj, key) => {
  if (Object.keys(obj).length === 0) {
    return null;
  }
  const maxKey = Object.keys(obj).reduce((a, b) => obj[a][key] > obj[b][key] ? obj[a][key] : obj[b][key]);
  return obj[maxKey];
};
