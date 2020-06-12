import _ from 'lodash';
import all from '../Posts/*.md';

export const posts = _.chain(all).map(transform).orderBy('date', 'desc').value(); // Chain creates an object with explicit method chaining, meaning the result won't be calculated until value is called.
export const postsPerPage = 9;
export const pages = _.chunk(posts, postsPerPage);
// to be unwrapped by calling .value()

// reshapes each post
function transform({ filename, html, metadata }) {
    // Removes .md suffix
    const permalink = filename.replace(/\.md$/, '');
    // convert date string into a proper 'Date'
    const date = new Date(metadata.date);

    return { ...metadata, filename, permalink, html, date };
}

// Find a post by permalink
export function findPost(permalink) {
    return _.find(posts, { permalink });
}
