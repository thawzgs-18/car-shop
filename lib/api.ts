app.get('/cars', (req, res) => {
  res.json(cars);
});

app.get('/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === req.params.id);
  res.json(car);
});