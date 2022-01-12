const kafka = require('kafka-node')
const client =  new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'})

const topicsToCreate = [{
    topic: 'temperature',
    partition: 1,
},
{
    topic: 'air',
    partition: 1,
},
{
    topic: 'electric',
    partition: 1,
}]

client.createTopics(topicsToCreate, (err,result) => {
    try {
        if(result) console.log('Create Topics...' )
    } catch (error) {
        console.log(error)
    }
})