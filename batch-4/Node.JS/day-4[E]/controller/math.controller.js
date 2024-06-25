const Sum = async (req, res) => {
  try {
    const { a=0, b=0 } = req.body;
    return res.status(200).json({ ans: a + b });
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const Mult = async (req, res) => {
  try {
    const {  a=0, b=0 } = req.body;
    return res.status(200).json(a * b);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const Div = async (req, res) => {
  try {
    const {  a=0, b=0 } = req.body;
    return res.status(200).json(a / b);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};
const Sub = async (req, res) => {
  try {
    const {  a=0, b=0 } = req.body;
    return res.status(200).json(a - b);
  } catch (error) {
    return res.status(503).json(error.message);
  }
};

module.exports = { Sum, Mult, Div, Sub };
