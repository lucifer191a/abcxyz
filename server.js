var dbd = require("dbd.js");
var fs = require("fs");

const bot = new dbd.Bot({
  token: process.env.TOKEN,
  prefix: "$getServerVar[prefix]",
});

//bot status
bot.status({
  text: process.env.BOT_ACTIVITY_TEXT,
  type: process.env.BOT_ACTIVITY_TYPE,
  time: 12,
});

bot.onMessage();

//variable
bot.variables({
  prefix: process.env.PREFIX,
  bank: "0",
  oran: "0",
  cash: "0",
  vcoin: "0",
  fish: "0",
  fishrod: "0",
  car: "0",
  house: "0",
  laptop: "0",
  fuel: "0",
  health: "100",
  hungry: "100",
  thirsty: "100",
  pizza: "0",
  drink: "0",
  orangej:"0",
  hm: "0",
  xp: "0",
  level: "0",
  req: "50",
  expcd: "45",
  leveling: "enabled",
  daily: process.env.DAILY_SALARY,
});

//commands handler
var reader = fs
  .readdirSync("./economy/")
  .filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./economy/${file}`);
  bot.command({
    name: command.name,
    aliases: command.aliases,
    code: command.code,
  });
}

//help command here
bot.command({
  name: "help",
  code: `$title[$userTag[$clientID] Bảng trợ giúp]

$description[**$getServerVar[prefix]help** - Là cái này đây!
**$getServerVar[prefix]cash** - Ví của bạn.
**$getServerVar[prefix]beg** - Đi ăn xin.
**$getServerVar[prefix]inven** - Kho đồ của bạn.
**$getServerVar[prefix]dep** - Gửi tiền vào Ngân Hàng.
**$getServerVar[prefix]with** - Rút tiền từ Ngân Hàng về ví.
**$getServerVar[prefix]daily** - Trợ cấp hàng ngày.
**$getServerVar[prefix]work** - Đi làm, có làm thì mới có ăn.
**$getServerVar[prefix]min** - Đào Voz Coin.
**$getServerVar[prefix]fish** - Câu Cá.
**$getServerVar[prefix]heist** - Đi cướp Ngân Hàng?
**$getServerVar[prefix]give** - Chuyển tiền cho ai đó.
**$getServerVar[prefix]shop** - Cửa Hàng
**$getServerVar[prefix]levels** - Xem bxh cấp độ hiện tại
**$getServerVar[prefix]xp** - Xem XP hiện tại
**$getServerVar[prefix]rl + số tiền + red (hoặc black)** - Chơi đỏ đen 
]

$color[RANDOM]
$addTimestamp`,
});
