module.exports = {
  
  name: "work",
  code: `
$author[WORK!;https://cdn.discordapp.com/attachments/798714067421626427/798862373967757383/31b2d70f4144bf566a78bdf4d25d4573a7aa0c58_hq.gif]
$thumbnail[$userAvatar[$authorID]]
$description[Bạn đã làm $randomText[Lập Trình Viên;YouTuber;Bác Sĩ;Nhạc Sĩ;Phụ Hồ;Kĩ sư;Game Thủ;Nông Dân;Streamer], Và nhận được **$$random[1000;7000]** 💴]
$color[RANDOM]
$addTimestamp

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[1000;7000]]]
$setGlobalUserVar[health;$sub[$getGlobalUserVar[health];$random[0;2]]]
$setGlobalUserVar[hungry;$sub[$getGlobalUserVar[hungry];$random[0;4]]]
$setGlobalUserVar[thirsty;$sub[$getGlobalUserVar[thirsty];$random[0;3]]]
$globalCooldown[600s;**⏰ Nghỉ ngơi %time% để làm việc tiếp!**]
$onlyIf[$getGlobalUserVar[hungry]>=10;Độ Đói của bạn là 10%, Hãy ăn trước.]
$onlyIf[$getGlobalUserVar[thirsty]>=20;Độ Khát của bạn là 20%, cần uống một chút nước.]
$onlyIf[$getGlobalUserVar[health]>=30;Sức khỏe của bạn là 30%, Hãy uống thuốc.]`
}