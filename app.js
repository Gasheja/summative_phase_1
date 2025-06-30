const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
