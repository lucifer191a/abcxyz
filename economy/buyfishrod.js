module.exports = {
  
  name: "buyf" , 
  aliases: ['buyf'],
  code: `
$description[**@$username Mua cần câu thành công🎣 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];200]]
$setGlobalUserVar[fishrod;$sum[$getGlobalUserVar[fishrod];1]]
$onlyIf[$getGlobalUserVar[cash]>=200;Không đủ tiền!]`
}