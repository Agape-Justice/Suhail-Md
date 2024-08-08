const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+2349042380991" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349042380991";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_10_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICA3NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgODksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMjIwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0OGxLOWZlckpyZkx2bnBZVmdRMXBtQ1BjNW1kcmU2Q2tzR1J1dlUzbVQwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTN2Jxck5VZ1F6eXpSNGdneDZBWmtRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3MjZmNTJiLThmZTgtNDU4NS1iYTY5LTQyNjFjYjI2NzkxYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNCxcbiAgICAgIDE1MSxcbiAgICAgIDkxLFxuICAgICAgMjUxLFxuICAgICAgODgsXG4gICAgICA3NyxcbiAgICAgIDIsXG4gICAgICA3NCxcbiAgICAgIDQ1LFxuICAgICAgMTc4LFxuICAgICAgNzYsXG4gICAgICAxNjksXG4gICAgICAxNzEsXG4gICAgICA1NyxcbiAgICAgIDc0LFxuICAgICAgNzUsXG4gICAgICA4LFxuICAgICAgNDIsXG4gICAgICAyNixcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgNTEsXG4gICAgICAxLFxuICAgICAgMjA4LFxuICAgICAgNDAsXG4gICAgICAyMDcsXG4gICAgICAxMTksXG4gICAgICA4NixcbiAgICAgIDIyMCxcbiAgICAgIDE3OSxcbiAgICAgIDc5LFxuICAgICAgMTU5LFxuICAgICAgMTMyLFxuICAgICAgNzYsXG4gICAgICA3MixcbiAgICAgIDIzNyxcbiAgICAgIDE0MSxcbiAgICAgIDE0MCxcbiAgICAgIDYsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0tGTlJBOVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDIzODA5OTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEyMDI2MTM1MzQzMzExOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NhMUtrQ0VPZmh6N1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2M0pWQ3dYU1YxSWhETVQyeXBGUFIwTFZwdEhhYlpmUVhFUnBnNEMveXg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFhVU8zZS9hUGpJdGNZV0tvajZOSTdnTWRKL3oraGF2ODRkd1duTThvemlLQTZreEVwcm1UYy9XQ1IvZG1KWVhic2lRTjJwek5zemhDL1dOL256eUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIngya0xaS3pFSFJZbHp1c2hwZ1VjbzFGVEl1K0Q0T2tMSHJHenk2WFphb0hqTEhqWVVHRU9VOXVTanRXL0tTclcrMjNoZGVMcEwyd050SkZIUHJ6VERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDIzODA5OTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwNjg2NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQR1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBHVS5qc29uIjogIntcImtleURhdGFcIjpcIks4dTdkdHZOaUpQL0N4NVFhNkZJZ1lEdC90ZStxVExRZjFxZGt4Zi9sdTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjI0MjMzODI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjMwNjg2NTc4NTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ethan Justice",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
