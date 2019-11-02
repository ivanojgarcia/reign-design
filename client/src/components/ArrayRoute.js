import Index from './views/Index';
import Posts from './views/Posts';
import CreatePost from './views/CreatePost';

const ArrayRoute = [      
        { path: '/', Component: Index},
        { path: '/posts', Component: Posts},
        { path: '/posts/create', Component: CreatePost}
];

export default ArrayRoute;