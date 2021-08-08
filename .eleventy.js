const ampPlugin = require('@ampproject/eleventy-plugin-amp'),
      fs = require('fs');

/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see {@link https://www.11ty.io/docs/config|Configuration}
 */
module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('src/robots.txt');

    // Plugins
    eleventyConfig.addPlugin(ampPlugin, {
        ampCache: true,
        dir: {
            output: 'dist',
        },
        minifyCss: true,
        validation: true
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
