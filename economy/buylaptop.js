module.exports = {
  
  name: "buyl",
  aliases: ['buyl'],
  code: `
$description[**@$username Mua Laptop thành công💻 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];100000]]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]
$onlyIf[$getGlobalUserVar[cash]>=100000;Không đủ tiền!]`
}