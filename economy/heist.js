module.exports = {
  
  name: "heist",
  code: `
  $description[$randomText[Bạn và 5 người bạn của mình đã đánh cắp tiền tại Ngân hàng Quốc tế bằng cách hack vào hệ thống an ninh..] **Và bạn được $$random[50000;300000]**]
$color[$random[0;999999]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[50000;300000]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;3]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[3h;**⏰ Vui lòng chờ %time% để cướp tiếp!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Độ đói của bạn là 10%, và bạn nên ăn trước! Bạn có thể mua thức ăn.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Độ khát của bạn đang ở mức 20%, và bạn nên uống trước! Bạn có thể mua trà sữa.]
$onlyIf[$getGlobalUserVar[health]>=30;Sức khỏe của bạn là 30%, và bạn nên uống thuốc ! Bạn có thể mua nó.]
$onlyIf[$getGlobalUserVar[laptop]>=1;Bạn cần có laptop để cướp ngân hàng!]`
}