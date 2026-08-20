const careerValidator = require("./careerValidator");
const skillValidator = require("./skillValidator");
const progressValidator = require("./progressValidator");

module.exports = {
  ...careerValidator,
  ...skillValidator,
  ...progressValidator,
};
