const { Router } = require('express');
const { NotFound } = require('http-errors');
const usersController = require('../controllers/users')
const router = Router();

//
// ─── API ROUTES ──────────────────────────────────────────────────────
//
router.get('/', (req, res) => res.status(200).send('monolith-nodejs'));
router.get('/users', usersController.getUsers);
router.get('/users/:userId', usersController.getUsersById);

//
// ─── 404 ERROR HANDLING ───────────────────────────────────────────────────────────────
//
router.use((req, res, next) => {
  const err = new NotFound('This route does not exist.');

  next(err);
});

module.exports = router;
