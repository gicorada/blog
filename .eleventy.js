const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Aggiungi il filtro date
  eleventyConfig.addFilter("date", (dateObj, format = "dd/MM/yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Crea una collezione di post, ordinata per anno e mese
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/posts/**/*.md").sort(function(a, b) {
      return a.date - b.date; // Ordina per data
    });
  });

  // Filtro personalizzato per il permalink
  eleventyConfig.addFilter("permalink", function(dateString, fileSlug) {
    // Converte la stringa della data in un oggetto Date
    const date = new Date(dateString);
    return `/${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${fileSlug}/`;
  });

  eleventyConfig.addPassthroughCopy("css"); // Copia la cartella CSS in _site
  eleventyConfig.addPassthroughCopy("assets"); // Copia la cartella img in _site

  return {
    dir: {
      input: ".",
      includes: "layouts",
      data: "_data",
      output: "_site"
    }
  };
};
