// Initialize Bull Queue
const { Queue, CronJob } = require('bull');
const periodicQueue = new Queue('periodicQueue');

// Define a job processor
periodicQueue.process(async (job) => {
  // Code to run periodic task
  console.log('Running periodic task...');
});

// Create a cron job to add the task to the queue every minute
const cronJob = new CronJob('0 * * * * *', () => {
  periodicQueue.add({});
}, null, true, 'UTC');
