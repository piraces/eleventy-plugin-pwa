const swBuild = require("./src/builder");

module.exports = function (eleventyConfig) {
  eleventyConfig.on('afterBuild', () => {
    swBuild(options, eleventyConfig.dir.output).then((res) => console.log(res));
  });
};
