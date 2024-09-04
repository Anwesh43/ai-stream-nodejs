import {openai} from '@ai-sdk/openai';
import {streamText, CoreMessage} from 'ai'
import { config } from 'dotenv';
import messageStore from './MessageStore';
config()

messageStore.addSystemMessage('You are a helpful assistant')

process.stdin.resume()
console.log("Write Messages")
process.stdin.on('data', async (data) => {
    const content = data.toString()
    messageStore.addUserMessage(content)
    const result = await streamText({
        model: openai('gpt-4-turbo'),
        messages: messageStore.getMessages()
    })
    let fullMessage : string = ''
    for await(const delta of result.textStream) {
        fullMessage = `${fullMessage}${delta}`
        process.stdout.write(delta)
    }
    process.stdout.write('\n')
    messageStore.addAssistantResponse(fullMessage)
})

