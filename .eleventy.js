/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see https://www.11ty.io/docs/config|Configuration
 */
module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('src/assets/css/tailwind.css');
    eleventyConfig.addPassthroughCopy('src/assets/img');
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    eleventyConfig.setServerOptions({
        module: '@11ty/eleventy-server-browsersync',
        ghostMode: true,
    });

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
        htmlTemplateEngine: false,
    };
};
