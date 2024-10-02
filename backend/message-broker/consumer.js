const amqp = require('amqplib/callback_api');

function consumeFromQueue(queueName) {
  amqp.connect('amqp://localhost', (err, connection) => {
    if (err) throw err;
    connection.createChannel((err, channel) => {
      if (err) throw err;
      channel.assertQueue(queueName, { durable: true });
      console.log(`Waiting for messages in ${queueName}`);

      channel.consume(queueName, (msg) => {
        if (msg !== null) {
          console.log(`Received: ${msg.content.toString()}`);
          channel.ack(msg);
        }
      });
    });
  });
}

module.exports = consumeFromQueue;
