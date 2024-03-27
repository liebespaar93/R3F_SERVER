"use client"

export const logColors = {
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	dim: "\x1b[2m",
	underscore: "\x1b[4m",
	blink: "\x1b[5m",
	reverse: "\x1b[7m",
	hidden: "\x1b[8m",

	fg: {
		black: "\x1b[30m",
		red: "\x1b[31m",
		green: "\x1b[32m",
		yellow: "\x1b[33m",
		blue: "\x1b[34m",
		magenta: "\x1b[35m",
		cyan: "\x1b[36m",
		white: "\x1b[37m",
		gray: "\x1b[90m",
		crimson: "\x1b[38m" // Scarlet
	},
	bg: {
		black: "\x1b[40m",
		red: "\x1b[41m",
		green: "\x1b[42m",
		yellow: "\x1b[43m",
		blue: "\x1b[44m",
		magenta: "\x1b[45m",
		cyan: "\x1b[46m",
		white: "\x1b[47m",
		gray: "\x1b[100m",
		crimson: "\x1b[48m"
	}
}


async function errorClientLog(message?: any, ...optional: any[]) {
  console.log(logColors.fg.red + '[ERROR]' + logColors.reset, message, ...optional)
}

async function warnClientLog(message?: any, ...optional: any[]) {
  console.log(logColors.fg.yellow + '[WARN]' + logColors.reset, message, ...optional)
}

async function doneClientLog(message?: any, ...optional: any[]) {
  console.log(logColors.fg.green + '[DONE]' + logColors.reset, message, ...optional)
}

async function noteClientLog(message?: any, ...optional: any[]) {
  console.log(logColors.fg.blue + '[NOTE]' + logColors.reset, message, ...optional)
}

async function importantClientLog(message?: any, ...optional: any[]) {
  console.log(logColors.fg.magenta + '[Important]' + logColors.reset, message, ...optional)
}
async function tipClientLog(message?: any, ...optional: any[]) {
  console.log(logColors.fg.cyan + '[Tip]' + logColors.reset, message, ...optional)
}


export { doneClientLog, errorClientLog, importantClientLog, noteClientLog, tipClientLog, warnClientLog }
