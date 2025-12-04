function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toISOString();
    
    const eventId = Math.random().toString(36).substring(2, 10).toUpperCase();
    const logMessage = message.toUpperCase();
    return `[${timestamp}] [${eventId}] ACTION: ${action} - STATUS: ${logMessage}`;
}

const log = createLogEntry("user login successful");
console.log(log)