const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const employerRoutes = require('./routes/employer');
const jobseekerRoutes = require('./routes/jobseeker');
const loginRoutes = require('./routes/login');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use(bodyParser.json());
app.use('/api/employer', employerRoutes);
app.use('/api/jobseeker', jobseekerRoutes);
app.use('/api', loginRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
