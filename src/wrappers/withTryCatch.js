module.exports = (onTry) => async (req, res, next) => {
  try {
    if (onTry) {
      await onTry(req, res, next);
    } else {
      throw new Error('OnTry argument is not passed');
    }
  } catch (error) {
    next(error);
  }
};
