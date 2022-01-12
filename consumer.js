const kafka = require('kafka-node')
const Consumer = kafka.Consumer
const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'})

const consumer = new Consumer(
    client,
    [
        {topic: 'temperature', partition: 0},
        {topic: 'air', partition: 0},
        {topic: 'electric', partition: 0},
    ],
    {
        autoCommit: false
    }
)

consumer.on('message', function(message){
    console.log(message)
})

// consumer.addTopics([{ topic: 'air', offset: 10 }], function (err, added) {
// }, true);