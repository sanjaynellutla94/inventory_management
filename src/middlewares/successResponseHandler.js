module.exports = (app) => app.use((req, res) => {
  const { payload } = res || {};
  res.status(payload.statusCode);
  res.send(payload);
});
