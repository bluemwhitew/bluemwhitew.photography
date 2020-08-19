const ampPlugin = require('@ampproject/eleventy-plugin-amp');

/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see {@link https://www.11ty.io/docs/config|Configuration}
 */
module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(ampPlugin, {
        ampCache: true,
        dir: {
            output: "dist",
        },
        minifyCss: true,
        validation: true
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        },
        htmlTemplateEngine: false,
    };
};
