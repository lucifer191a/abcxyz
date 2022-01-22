module.exports = {
  
  name: "inven",
  code: `$title[Kho đồ của $username]
$thumbnail[$userAvatar[$authorID]]
$description[**❤Health**
**Sức khỏe**: $getGlobalUserVar[health]% 
**Độ đói**: $getGlobalUserVar[hungry]%
**Độ khát**: $getGlobalUserVar[thirsty]%

**🗃Thùng đồ:**


**Pizza**: $getGlobalUserVar[pizza] 🍕
**Trà Sữa**: $getGlobalUserVar[drink] 🥛
**Thuốc**: $getGlobalUserVar[hm] 💊
**Cá**: $getGlobalUserVar[fish] Kg
**Cần câu**: $getGlobalUserVar[fishrod] 🎣
**Voz Coin**: $getGlobalUserVar[vcoin] 💰
**Laptop**: $getGlobalUserVar[laptop] 💻
**Xe Hơi**: $getGlobalUserVar[car] 🚗
**Biệt Phủ**: $getGlobalUserVar[house] 🏡


**⛽Xăng:**
**Xăng trong xe**: $getGlobalUserVar[fuel]L]
$color[RANDOM]
$addTimestamp`
}