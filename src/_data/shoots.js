require('dotenv').config();

const contentful = require('contentful');
const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    space: process.env.CONTENTFUL_SPACE_ID
});

module.exports = async () => {
    return client.getEntries({
        content_type: 'shoot',
        order: '-fields.date'
    }).then(function (response) {
        return response.items
            .map(function (shoot) {
                return shoot.fields;
            });
    }).catch(console.error);
};
