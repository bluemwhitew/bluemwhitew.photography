/**
 * @param eleventyConfig
 * @returns {{dir: {output: string, input: string}}}
 * @see {@link https://www.11ty.io/docs/config|Configuration}
 */
module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};
