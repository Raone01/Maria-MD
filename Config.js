const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "919634945456"],
global.ownername = process.env.OWNER_NAME || "▪️▫️▪️ѕιℓєηт  χαямσηу🦚",
global.ytname = "YT: silent.xarmony"
global.socialm = "GitHub: Raone01"
global.location = "Indian"

global.botname = process.env.BOTNAME || "▪️▫️▪️ѕιℓєηт  χαямσηу🦚",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "▪️▫️▪️ѕιℓєηт  χαямσηу🦚",
global.packname = '▪️▫️▪️ѕιℓєηт  χαямσηу🦚'
global.author = process.env.AUTHOR || "▪️▫️▪️ѕιℓєηт  χαямσηу🦚",
//console view/theme
global.themeemoji = '🖤'
global.wm = "▪️▫️▪️ѕιℓєηт  χαямσηу🦚"

//theme link
global.link = 'https://chat.whatsapp.com/HJBmflv3NgYLhPH8FQFZb3'

//custom prefix
global.prefa = process.env.PREFIX,

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go* ',
    prem: '🍭 *This feature is reserved for premium users only*',
    admin: '🍭 *This feature is reserved for admins only*',
    botAdmin: '🍭 *This feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *This feature is exclusively for groups*',
    private: '🍭 *This feature is exclusively for private chats*',
    wait: '🍭 *In process...* ',    
    error: '🍭 *Oh!, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
