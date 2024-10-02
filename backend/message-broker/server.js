const sendToQueue = require('./producer');
const consumeFromQueue = require('./consumer');

// Example: Send notification to queue
sendToQueue('notifications', 'New bill created for user 123');

// Start consumer to listen for new messages
consumeFromQueue('notifications');
