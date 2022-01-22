module.exports = {
  
  name: "sellfish",
  aliases: ['sf'],
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];5000]]
$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish];10]]
$title[__**Đang bán Cá 🐟**__]
$color[00ff59]
$description[
**@$username Đã bán thành công 10KG Cá và nhận được 5000💴.**]
$onlyIf[$getGlobalUserVar[fish]>=10;Bạn không có đủ Cá, câu tiếp đi!.]`
}