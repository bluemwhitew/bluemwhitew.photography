const fs = require('fs'),
      pluginAmp = require('@ampproject/eleventy-plugin-amp'),
      pluginInclusiveLanguage = require('@11ty/eleventy-plugin-inclusive-language');

/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see {@link https://www.11ty.io/docs/config|Configuration}
 */
module.exports = function (eleventyConfig) {
    // Passthroughs
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
    eleventyConfig.addPlugin(pluginInclusiveLanguage, {
        templateFormats: ['liquid'],
    });

    // Routing
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {
                bs.addMiddleware('*', (req, res) => {
                    let error404 = fs.readFileSync('dist/404.html');

                    res.write(error404);
                    res.writeHead(404);
                    res.end();
                });
            }
        },
        ghostMode: false
    });

    return {
        dir: {
            input: 'src',
            output: 'dist'
        },
        htmlTemplateEngine: false,
    };
};
