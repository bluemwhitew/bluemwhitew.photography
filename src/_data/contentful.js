import 'dotenv/config';
import { createClient } from 'contentful';
import Fetch from '@11ty/eleventy-fetch';

const preview = ['1', 'true'].includes(
    (process.env.CONTENTFUL_PREVIEW || '').toLowerCase(),
);

const client = createClient({
    accessToken: preview
        ? process.env.CONTENTFUL_ACCESS_TOKEN_PREVIEW_API
        : process.env.CONTENTFUL_ACCESS_TOKEN_DELIVERY_API,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
    host: preview ? 'preview.contentful.com' : undefined,
    space: process.env.CONTENTFUL_SPACE_ID,
});

const fetchCollections = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'collection',
            order: '-fields.date',
        });

        return response.items.map(({ fields }) => fields);
    } catch (error) {
        console.error(error);
    }
};

const getCollections = async () => {
    return await Fetch(fetchCollections(), {
        // @todo: Determine Build Trigger
        duration: process.env.NODE_ENV === 'production' ? '0s' : '1d',
        type: 'json',
    });
};

export default getCollections;
