import express from 'express';
import { json } from 'body-parser';

import { kafka } from './brokers/kafka';
import { dbConnect } from './db/connect';

const port = process.env.PORT || 3000;
const kafkaHost = process.env.KAFKA_HOST || "kafka:9092";


const app = express();
app.use(json());

app.get('/health/', (req, res) => {
  res.json('ok');
});



app.listen(port, async () => {
  console.log(`Api dispatcher service is listening on ${port}`);
  try {
    await dbConnect();
    await kafka.connect(kafkaHost);
    await kafka.createTopics([
     
    ]);

  
  } catch (e) {
    console.error('start up error', e);
  }
});
