const swBuild = require("./src/builder");

module.exports = function (eleventyConfig, options = {}) {
  eleventyConfig.on('afterBuild', () => {
    const Eleventy = require("@11ty/eleventy/src/Eleventy");
    const outputDir = new Eleventy().outputDir;
    swBuild(options, outputDir).then((res) => console.log(res));
  });
};
