import all from '../posts/*.md';
import { chunk } from './utilityfunctions.js';

// reshapes each post
function transform({ filename, html, metadata }) {
    // Removes .md suffix
    const permalink = filename.replace(/\.md$/, '');
    // convert date string into a proper 'Date'
    const date = new Date(metadata.date);

    return { ...metadata, filename, permalink, html, date };
}

export const posts = all.map(transform).sort((a, b) => {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date == b.date) {
        if (a.filename < b.filename) {
            return -1;
        } else return 0;
    }
    return -1;
});

//posts.forEach((e) => console.log(e.date));

export const postsPerPage = 9;
export const pages = chunk(posts, postsPerPage);

// Find a post by permalink
export function findPost(permalink) {
    return posts.find((post) => {
        return post.permalink === permalink;
    });
}
