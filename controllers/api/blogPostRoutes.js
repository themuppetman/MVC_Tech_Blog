const router = require('express').Router();
const { BlogPost, User, Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
        include: [
            {
            model: User,
            attributes: ['username'],
            },
        ],
        });
    
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
    
        res.render('homepage', {
        blogs,
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.findByPk(req.params.id, {
        include: [
            {
            model: User,
            attributes: ['username'],
            },
            {
            model: Comment,
            include: [User],
            },
        ],
        });
    
        const blog = blogData.get({ plain: true });
    
        res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    }
);

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
    res.redirect('/');
    return;
    }

    res.render('login');
});

module.exports = router;