const path = require('path')
const { app, BrowserWindow } = require('electron')

let pluginName
switch (process.platform) {
	case 'win32':
		pluginName = 'flash/pepflashplayer32_34_0_0_251.dll'
		break
	// case 'darwin':
	// 	pluginName = 'flash/PepperFlashPlayer.plugin'
	// 	break
	// case 'linux':
	// 	pluginName = 'flash/libpepflashplayer.so'
	// 	break
}

app.commandLine.appendSwitch(
	'ppapi-flash-path',
	path.join(__dirname.replace('app.asar', 'app.asar.unpacked'), pluginName)
)
// app.commandLine.appendSwitch('ppapi-flash-version', '12.0.0.44')
app.commandLine.appendSwitch('ppapi-flash-version', '34.0.0.251')
app.commandLine.appendSwitch('ignore-certificate-errors')

let mainWindow

function clearCache() {
	mainWindow.webContents.session.clearCache()
}

function createWindow() {
	mainWindow = new BrowserWindow({
		height: 1920,
		width: 1080,
		title: 'Secret Agency Club Penguin',
		icon: path.join(__dirname, '../public/favicon.ico'),
		webPreferences: {
			plugins: true,
			sandbox: true,
			nodeIntegration: false
		}
	})

	mainWindow.maximize()
	// mainWindow.removeMenu()
	mainWindow.webContents.openDevTools()
	// clearCache()

	mainWindow.loadURL('https://play.vyrek.dev/es/')

	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

app.on('ready', createWindow)

// setInterval(clearCache, 1000 * 60 * 5)
