module.exports = {
  
  name: "buyp",
  aliases: ['buyp'],
  code: `
$description[**@$username Mua Pizza thành công🍕 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$setGlobalUserVar[pizza;$sum[$getGlobalUserVar[pizza];5]]
$onlyIf[$getGlobalUserVar[cash]>=5000;Không đủ tiền!]`
}