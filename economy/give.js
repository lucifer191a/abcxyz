module.exports = {
  
  name: "give",
  code: `$title[Chuyển tiền!]
$description[Bạn đã chuyển cho <@$mentioned[1]> $message[2] 💴!]

  $setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$mentioned[1]];$message[2]];$mentioned[1]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$authorID];$message[2]];$authorID]
$onlyIf[$message[2]<$getGlobalUserVar[cash;$authorID];**Đỗ nghèo khỉ! Làm gì có đủ tiền mà chuyển**]

$onlyIf[$message[2]>=1;**Bạn chỉ có thể chuyển nhiều hơn $1.**
$argsCheck[2;Để sử dụng: \`$getServerVar[prefix]give <@user> <ammount>\`]]
$color[$random[0;999999]]


`
}