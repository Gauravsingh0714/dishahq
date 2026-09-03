const authService = require("./authService");
const skillService = require("./skillService");
const careerService = require("./careerService");
const progressService = require("./progressService");
const { recommendationService } = require("./recommendation");

module.exports = {
  authService,
  skillService,
  careerService,
  progressService,
  recommendationService,
};
