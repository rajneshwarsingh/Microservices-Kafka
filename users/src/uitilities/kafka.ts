import { Kafka } from 'kafkajs';
import { UserServices } from '../services/users';
const brokers: string = process.env.KAFKA_BROKER as string;

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: [brokers],
});

const consumer = kafka.consumer({ groupId: 'user-group' });

const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'product-count', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }: { message: any }) => {
      const jsonData = JSON.parse(message.value.toString());
      //console.log(`Received message: ${jsonData}`);
      UserServices.productCount(jsonData.userId);
      // Here, you can handle product-related logic in response to the user event
    },
  });
  console.log('Kafka Consumer connected');
};

export { startConsumer };
