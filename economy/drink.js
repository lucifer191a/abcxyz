module.exports = {
  
  name: "drink",
  code: `
$description[Uhh ... Thật là sảng khoái! **Độ khát -10**]
$setGlobalUserVar[drink;$sub[$getGlobalUserVar[drink];1]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];10]]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Độ khát hiện tại 100%]
$onlyIf[$getGlobalUserVar[drink]>=1;Hết trà sữa mất rồi!]`
}