module.exports = (req, res) => {
  const { username, admin } = req.user;
console.log('ENTROU')

  res.status(200).json({ username, admin });
};