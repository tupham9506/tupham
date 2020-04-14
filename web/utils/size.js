
/**
 * Get window size
 * @return {[type]} Width, height
 */
export const getWindowSize = (option = {}) => {
  const selector = document.querySelector('#app-window');
  let heigtOffset = 0;
  if (option.exceptTaskbar) {
    const taskbarSelector = document.querySelector('.task-bar');
    heigtOffset = taskbarSelector.offsetHeight;
  }
  const width = selector.offsetWidth;
  const height = selector.offsetHeight - heigtOffset;
  return {
    width,
    height
  };
};

/**
 * Get random position in window
 * @return {[type]} [description]
 */
export const getRadomPositionInWindow = () => {

};
