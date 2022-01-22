module.exports = {
  
  name: "buym",
  aliases: ['buym'],
  code: `
$description[**@$username Mua thuốc thành công💊 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$setGlobalUserVar[hm;$sum[$getGlobalUserVar[hm];5]]
$onlyIf[$getGlobalUserVar[cash]>=5000;Không đủ tiền!]`
}