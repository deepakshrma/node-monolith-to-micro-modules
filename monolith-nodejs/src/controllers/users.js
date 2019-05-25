const {getUsers, getUsersById} = require('../services/users')

exports.getUsers = async (req, res) => {
  const { data: users } = await getUsers();
  res.send(users);
};
exports.getUsersById = async (req, res) => {
  const { userId } = req.params;
  if (!userId) return res.status(400).send({ error: 'Missing userId', code: 400 });
  const { data: user } = await getUsersById(userId);
  res.send(user);
};
