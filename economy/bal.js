module.exports = {
  
  name: "balance",
  aliases: ['bal', 'ball', 'cash'],
  code: `$title[Ví của $username]
$thumbnail[$userAvatar[$authorID]]
$description[💴 **| Tiền mặt**
$$getGlobalUserVar[cash]

💳 **| Ngân hàng**
$$getGlobalUserVar[bank]]
$color[$random[0;999999]]
$footer[Ví của @$username]
$addTimestamp`
}