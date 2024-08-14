const pluginAmp = require('@ampproject/eleventy-plugin-amp');

/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see https://www.11ty.io/docs/config|Configuration
 */
module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('src/assets/img');
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    // Plugins
    eleventyConfig.addPlugin(pluginAmp, {
        ampCache: true,
        dir: {
            output: 'dist',
        },
        minifyCss: true,
        validation: true
    });

    eleventyConfig.setServerOptions({
        module: '@11ty/eleventy-server-browsersync',
        ghostMode: true
    });

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        htmlTemplateEngine: false
    };
};
