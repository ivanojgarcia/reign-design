import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/posts', { useNewUrlParser: true, useUnifiedTopology: true });

// Definimos nuestro Schema asociado a los Posts

const postsSchema = new mongoose.Schema({
    created_at: Date,
    title: String,
    url: String,
    author: String,
    points: Number,
    story_text: String,
    comment_text: String,
    num_comments: Number,
    story_id: Number,
    story_title: String,
    story_url: String,
    parent_id: Number,
    created_at_i: Number,
    _tags: Array,
    objectID: String,
    _highlightResult: {
        title: {
            value: String,
            matchLevel: String,
            matchedWords: Array
        },
        url: {
            value: String,
            matchLevel: String,
            fullyHighlighted: Boolean,
            matchedWords: Array
        },
        author: {
            value: String,
            matchLevel: String,
            matchedWords: Array
        }
    },
    delete: Boolean
});

const Posts = mongoose.model('posts', postsSchema);

export {Posts}