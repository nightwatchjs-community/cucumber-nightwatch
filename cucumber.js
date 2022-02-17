module.exports = {
  default: [
    "--require-module ts-node/register",
    "--require features/**/*.ts",
    "--format html:report.html",
    "--format @cucumber/pretty-formatter",
    // "--publish-quiet",
  ].join(" "),
};
