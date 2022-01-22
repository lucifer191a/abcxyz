module.exports = {
  
  name: "fish",
  code: `$description[Bạn đã câu cá tại $randomText[Bồn tắm;Sông;Vũng bùn;Hồ Bơi;Biển], và câu được **$random[0;15] Kg Cá.** \`$getServerVar[prefix]sf\` để bán 10kg Cá (💴5000)]
$color[$random[0;999999]]
$setGlobalUserVar[fish;$sum[$getGlobalUserVar[fish];$random[0;15]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[1;3]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[1;5]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[1;5]]]
$globalCooldown[10s;**⏰ Vui lòng chờ %time% để tiếp tục câu!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Độ đói của bạn là 10%, và bạn nên ăn trước! Bạn có thể mua thức ăn.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Độ khát của bạn đang ở mức 20%, và bạn nên uống trước! Bạn có thể mua trà sữa.]
$onlyIf[$getGlobalUserVar[health]>=30;Sức khỏe của bạn là 30%, và bạn nên uống thuốc ! Bạn có thể mua nó.]
$onlyIf[$getGlobalUserVar[fishrod]>=1;Không có cần câu thì câu kiểu gì?]`
}