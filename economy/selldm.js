module.exports = {
  
  name: "sellvcoin",
  aliases: ['sv'],
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];10000]]
$setGlobalUserVar[vcoin;$sub[$getGlobalUserVar[vcoin];1]]
$title[__**Đang bán Vcoin💰**__]
$color[00ff59]
$description[
**@$username đã bán thành công 1 Vcoin và nhận 10000💴.**]
$onlyIf[$getGlobalUserVar[vcoin]>=1;Không đủ Vcoin, đào tiếp đê!.]`
}