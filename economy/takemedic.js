module.exports = {
  
  name: "take-medicine",
  aliases: ['takem'],
  code: `
$description[Đã uống thuốc! **Sức khỏe +10**]
$setGlobalUserVar[hm;$sub[$getGlobalUserVar[hm];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];10]]
$onlyIf[$getGlobalUserVar[health]<=100;Sức Khỏe của bạn hiện tại là 100%]
$onlyIf[$getGlobalUserVar[hm]>=1;Không có thuốc!]`
}