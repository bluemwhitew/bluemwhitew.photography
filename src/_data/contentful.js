require('dotenv').config();

const preview = ['1', 'true'].includes((process.env.CONTENTFUL_PREVIEW || '').toLowerCase());
const contentful = require('contentful');
const client = contentful.createClient({
    accessToken: preview
        ? process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW_API
        : process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY_API,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    space: process.env.CONTENTFUL_SPACE_ID,
    host: preview ? 'preview.contentful.com' : undefined,
});

module.exports = async () => {
    return client.getEntries({
        content_type: 'collection',
        order: '-fields.date'
    }).then(function (response) {
        return response.items
            .map(function (collection) {
                return collection.fields;
            });
    }).catch(console.error);
};
