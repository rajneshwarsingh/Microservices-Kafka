import { Kafka } from 'kafkajs';
const brokers: string = process.env.KAFKA_BROKER as string;

const kafka = new Kafka({
  clientId: 'product-service',
  brokers: [brokers],
});

const producer = kafka.producer();

const startProducer = async () => {
  await producer.connect();
  console.log('Kafka Producer connected');
};

export { startProducer, producer };
