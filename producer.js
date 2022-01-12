const kafka = require('kafka-node')
const client = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'})
const producer = new kafka.Producer(client),
//const keyedMessage = new kafka.KeyedMessage('key', 'message')

payloads = [
    {topic: 'temperature', messages: 'Temperature Demo', partition: 0},
    {topic: 'air', messages: 'Air Demo', partition: 0},
    {topic: 'electric', messages: 'Electric Demo', partition: 0},
]

producer.on('ready', function(){
    console.log('Create producer...')
    producer.send(payloads, (err,data) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log('Read data...')
            console.log(data)
        }
    })
}) 

producer.on('error', function(err){})

producer.off('error', function(err){})