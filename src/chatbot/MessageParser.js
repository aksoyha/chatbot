class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lower = message.toLowerCase();
    if (lower.includes("merhaba") || lower.includes("selam")  || lower.includes("nasılsın") || lower.includes("iyi misin?") || lower.includes("naber")  || lower.includes("ne var ne yok")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
