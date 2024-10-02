const amqp = require('amqplib/callback_api');

function sendToQueue(queueName, message) {
  amqp.connect('amqp://localhost', (err, connection) => {
    if (err) throw err;
    connection.createChannel((err, channel) => {
      if (err) throw err;
      channel.assertQueue(queueName, { durable: true });
      channel.sendToQueue(queueName, Buffer.from(message));
      console.log(`Sent message: ${message}`);
    });
  });
}

module.exports = sendToQueue;
