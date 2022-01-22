module.exports = {
  
  name: "dep",
  code: `
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$message]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message]]
$description[**Gửi thành công $message 💴 vào ngân hàng!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[cash];**Số tiền gửi không được vượt quá số tiền bạn có!**]
$onlyIf[$message>=1;**Bạn chỉ có thể gửi số tiền nhiều hơn 💴1.**]
$argsCheck[>1;Use: \`$getServerVar[prefix]dep <Ammount>\`]`
}