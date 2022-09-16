const TelegramBot = require("node-telegram-bot-api");

const token = "5681942840:AAFu4n0oH9IgmanrnTe1OjHsUnCSfTWSqnA";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const { id: id, first_name: userName } = msg.chat;

  if (msg.text == "Привет") {
    bot.sendMessage(id, `Привет ${userName}`);
  }
});
