var nw = require('nw.gui')
var discordRpc = require('discord-rpc')

var globalFrame = document.createElement('iframe')
globalFrame.setAttribute('id', 'screen')
globalFrame.setAttribute('allowfullscreen', 'true')
globalFrame.setAttribute('allow', 'camera; microphone')
globalFrame.setAttribute('nwdisable', 'true')
globalFrame.setAttribute('nwfaketop', 'true')

var clubPenguinURL = 'https://play.vyrek.dev/es/'
var discordApplicationId = '995035289263292426'
var win = nw.Window.get()
var appStart = Date.now()

discordRpc.register(discordApplicationId)

var rpc = new discordRpc.Client({ transport: 'ipc' })

rpc.on('ready', () => {
	rpc.setActivity({
		details: 'Secret Agency Club Penguin',
		state: 'Jugando club penguin!',
		startTimestamp: appStart,
		largeImageKey: 'large',
		buttons: [
			{
				label: 'Unirse al servidor',
				url: 'https://discord.gg/g3ZbCmShD4'
			}
		]
	}).catch(function () {})
})

win.on('new-win-policy', (frame, url, policy) => {
	policy.ignore()
	nw.Shell.openExternal(url)
})

win.on('close', function () {
	if (rpc.user) rpc.destroy()

	nw.App.closeAllWindows()
	this.close(true)
})

globalFrame.setAttribute('src', clubPenguinURL)
