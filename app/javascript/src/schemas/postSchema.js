import { normalize, schema } from 'normalizr';

const userSchema = new schema.Entity('users');
const postSchema = new schema.Entity('posts', {
  author: userSchema,
});
const postsSchema = new schema.Array(postSchema);

export const normalizePost = post => normalize(post, postSchema);

export const normilizeArrayOfPosts = posts => normalize(posts, [postSchema]);
