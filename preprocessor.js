module.exports = {
  process(sourceText, sourcePath, options) {
    if (
      sourcePath.endsWith("data/a.json") ||
      sourcePath.endsWith("data/b.json")
    ) {
      console.log("Processing data file:", sourcePath);
    }

    if (options.transformerConfig && options.transformerConfig.fail) {
      throw new Error("Failed to process file: " + sourcePath);
    }

    return { code: sourceText };
  },
};
