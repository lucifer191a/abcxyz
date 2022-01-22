module.exports = {
  
  name: "ep",
  aliases: ['ep'],
  code: `
$description[Ummm... Ngon vãi loèn! **Độ đói -10**]
$setGlobalUserVar[pizza;$sub[$getGlobalUserVar[pizza];1]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];10]]
$onlyIf[$getGlobalUserVar[hungry]<=100;Độ đói hiện tại 100%]
$onlyIf[$getGlobalUserVar[pizza]>=1;Hết Pizza mất rồi!]`
}