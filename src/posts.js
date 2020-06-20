import all from '../posts/*.md';

// reshapes each post
function transform({ filename, html, metadata }) {
    // Removes .md suffix
    const permalink = filename.replace(/\.md$/, '');
    // convert date string into a proper 'Date'
    const date = new Date(metadata.date);

    return { ...metadata, filename, permalink, html, date };
}

const chunk = (input, size) => {
    return input.reduce((arr, item, idx) => {
        return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
};

export const posts = all.map(transform).sort((date) => {
    return (a, b) => (a[date] > b[date] ? 1 : b[key] > a[key] ? -1 : 0);
});

export const postsPerPage = 9;
export const pages = chunk(posts, postsPerPage);

// Find a post by permalink
export function findPost(permalink) {
    return posts.find((post) => {
        return post.permalink === permalink;
    });
}
