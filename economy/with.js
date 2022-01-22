module.exports = {
  
  name: "with",
  code: `
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$message]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$message]]
$description[**Rút thành công $message💴 từ ngân hàng về ví!**]
$color[d28108]
$onlyIf[$message<=$getGlobalUserVar[bank];**Số tiền rút không được vượt quá số tiền bạn có!**]
$onlyIf[$message>=1;**Bạn chỉ có thể rút nhiều hơn 1💴.**]
$argsCheck[>1;Sử dụng: \`$getServerVar[prefix]with <Số tiền muốn rút>\`]`
}