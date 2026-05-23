class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();
    if (lower.includes("merhaba") || lower.includes("selam") || lower.includes("naber")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
