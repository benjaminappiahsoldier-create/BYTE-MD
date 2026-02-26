const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VBTXExVkpOaGUxSk5OUzh1b3hXN0xmRGVoTytGekhOcGNJSzBIVmUzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pXd3h6NVJ0cW4yOG1LemxRWnVpNEtvU3Q5M1ZWUGsxREtIb3BPTXMxRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwREl3Q2pIUWQ0R3lDUkVzUktIWjgvdVJ4REZUNWdISkRvK3VzdWpmamxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrclF2dUwxa3drTXhDRmFlMXk0eHllN01Qbk5kTmRlNXgvYWFjNmJQZURFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFMY1o5Z25QMEJIbmt4TytXbUsyeWtDNGVkRjNXSmlhOXdJMmJpNTMrMlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhtYmd3RldWTElDS3VORktrWWhKcDlGaEl0SW1JaElrMlppOWxwWWVaaUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hnTmF3ZkJnM2NEY202dnpJclF5YWdoWisvYVdVUTdBb2Jvc1BzUHZHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2VqMDF1VnNaelF0Ny9YcUVMRHNwaC9ZOHdpQmxUNlFTMUlyZmNDaEN6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHaEo1UVJqdFlRTEtKTkVHeDNteHp3TEtMaUkzdlJwMzZ3RkJKVGZlZWlhMjVhaytXRlZFQm4zZUxQSDJjUXFiTStZU3RobXA0VElKRlB4a1hIYUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJINHIyNEYweCtvTU1ud3FXMWdDZTdjOUhmTVZuV3ZuV3lDdnpRQnJsc05vPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6ZmFsc2UsImFjY291bnQiOnsiZGV0YWlscyI6IkNJeUE0WUlFRU5LN2dzMEdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4QzNrQmNVR1FCeTdTUnZjcWx3M09XV0FGc2MydGRmcUxuMnpnK3ROWEZnPSIsImFjY291bnRTaWduYXR1cmUiOiJuTGdXSHFJZ2lWOHZBWUdHKy9BOGFRMTV6WHNFT0F3VnBjQWk5TGxTVUpMS3M5ODdMVCtoMkVnbG9vQmdlSVgzS2dZRmJkYm5XQ3VFb0RYdlBGTXdBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidXdDMmRPMUpBaTFadUtXOEVZU21NejA3dko1NHFibTR6TUg1c25HZHZ0WWpLRXNnOSsvbHpEeU9SZ1FjcGJTOTRLd1cxMmpYSDJDTXdyQzZod2N2REE9PSJ9LCJtZSI6eyJpZCI6IjIzMzUwMjM5MDg2ODoxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwODQxMzkzMzYyMTMzNDoxNEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTAyMzkwODY4OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZBdDVBWEZCa0FjdTBrYjNLcGNOemxsZ0JiSE5yWFg2aTU5czRQclRWeFkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQWdGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3MjEzMzg1MiwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBdmkifQ==": process.env.SESSION_ID || "",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "public",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "233502390868",
  "OWNER_NAME": process.env.OWNER_NAME || "Adams",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
