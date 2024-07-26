const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const blogPostRoutes = require('./api/blogPostRoutes');
const commentRoutes = require('./api/commentRoutes');
const homeRoutes = require('./homeRoutes');
const signupRoutes = require('./api/signupRoutes');


router.use('/', homeRoutes);
router.use('/api/users', userRoutes);
router.use('/api/blogPosts', blogPostRoutes);
router.use('/api/comments', commentRoutes);
router.use('signup', signupRoutes);



module.exports = router;