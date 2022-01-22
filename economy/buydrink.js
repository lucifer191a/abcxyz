module.exports = {
  
  name: "buyd" , 
  aliases: ['buyd'],
  code: `
$description[**@$username Mua trà sữa thành công🥛 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$setGlobalUserVar[drink;$sum[$getGlobalUserVar[drink];5]]
$onlyIf[$getGlobalUserVar[cash]>=5000;Không đủ tiền!]`
}