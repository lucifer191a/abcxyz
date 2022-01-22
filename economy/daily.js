module.exports = {
  
  name: "daily",
  code: `
$title[Daily Salary.]
$thumbnail[$userAvatar[$authorID]]
$description[Bạn đã nhận được **$getServerVar[daily]** 💴 từ khoản trợ cấp hàng ngày, vui lòng kiểm tra ví của bạn!]
$color[$random[0;999999]]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$getServerVar[daily]]]
$globalCooldown[1d;**⏰ Vui lòng chờ %time% để nhận khoản trợ cấp ngày mai!**]`
}