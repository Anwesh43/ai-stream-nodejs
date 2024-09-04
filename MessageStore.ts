import { CoreMessage } from "ai";


class MessageStore {

    messages : CoreMessage[] = []

    addUserMessage(text : string) {
        const message : CoreMessage = {
            role: 'user',
            content: text 
        }
        this.messages.push(message)
    }

    addSystemMessage(text : string) {
        const message : CoreMessage = {
            role: 'system',
            content: text 
        }
        this.messages.push(message)
    }

    addAssistantResponse(text : string) {
        const message : CoreMessage = {
            role: 'assistant',
            content: text 
        }
        this.messages.push(message)
    }

    getMessages() : CoreMessage[] {
        return this.messages
    }
}

export default new MessageStore()