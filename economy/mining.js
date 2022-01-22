module.exports = {
  
  name: "mining",
  aliases: ['min'],
  code: `$setGlobalUserVar[vcoin;$sum[$getGlobalUserVar[vcoin];$random[1;5]]]
  $setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;4]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;5]]]
$title[**$username** Đã đào được:]
$color[$random[10000;999999]]
$description[$random[0;5] Vcoin 💰!,nhập \`$getServerVar[prefix]sv\` để bán 1 Vcoin với giá 10000💴]
$globalCooldown[2700s;**⏰ Vui lòng chờ %time% để tiếp tục đào!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Độ đói của bạn là 10%, và bạn nên ăn trước! Bạn có thể mua thức ăn.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Độ khát của bạn đang ở mức 20%, và bạn nên uống trước! Bạn có thể mua trà sữa.]
$onlyIf[$getGlobalUserVar[health]>=30;Sức khỏe của bạn là 30%, và bạn nên uống thuốc ! Bạn có thể mua nó.]`
}