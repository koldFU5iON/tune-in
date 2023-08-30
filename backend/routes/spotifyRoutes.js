import routes from 'express';

const router = routes.Router();

router.get('/auth/login', (req, res) => {
    res.send('login');
    }
);

router.get('/auth/callback', (req, res) => {
    res.send('logout');
    });

export default router;