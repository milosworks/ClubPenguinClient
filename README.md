# ClubPenguinClient

This club penguin client is a "flash port" for people like me that want a private server

# Download client / Descargar cliente

**WARNING: For people that are searching the build of my client for my private server please DO NOT keep reading this guide**

**ATENCION: Para las personas que estan buscando la app de mi cliente DEJEN de seguir leyendo esta guia**

# Special thanks

Thanks a lot for the "base" ~~its practically all the code but anyways~~ to the NewCP Team

Repo: https://github.com/New-Club-Penguin/NewCP-App

# Making the build

For making the build you will need **OBLIGATORY** to post your client to github, here are some instructions:

1. Install git https://git-scm.com/downloads
2. Go to https://github.com and create an account
3. Create a new repository in github (https://docs.github.com/en/get-started/quickstart/create-a-repo)
4. Open a terminal in your pc, and clone this repository (on your desktop for example) `git clone https://github.com/SecretAgencyClubPenguin/ClubPenguinClient`
5. Enter the folder of the client
6. Go to the [config file](./config.json) and edit it (with notepad for example, **DO NOT USE WORD PLEASE**), to see the explanation of each config [click here](#config-file)
7. Copy the name of the repository you created and your username, you should have something like this **SecretAgencyClubPenguin/ClubPenguinClient** and paste it in the "repositoryName" config **DO NOT REMOVE THE "" ON ANYTHING** just put the name inside the "" replacing **SecretAgencyClubPenguin/ClubPenguinClient**
8. Open your file explorer and enable the option "show hidden items" on the "View" option
9. **Use this if you cannot find the "show hidden items" option** You can use the **cmd** and go to the folder of the client using this keybind: **Control + R**, then go to where you download the client, example: `cd desktop/ClubPenguinClient`, then when you are there put this command in your terminal: `rm -rf .git`
10. Then follow the instructions on here replacing `https://github.com/VyrekXD/test.git` for **YOUR REPOSITORY**, every time you write a command hit enter
    ![](https://cdn.upload.systems/uploads/U9hAkWif.png)
11. If you follow these instructions correctly, if you go to the "Actions" part on your repository some "workflow" should be executing and you should be able to download the executable of your client

# Config file

The config file has various things that you need to change

**If you want to change something please go to the file [config.json](./config.json)**

```json
{
	"mainURL": "Your url of your private server",
	"repositoryName": "The name of your repo in github",
	"discordRpc": {
		"enable": true, // This setting its if you want to enable the discord presence
		"discordAppId": "The ID of your presence app",
		"activityTitle": "The activity title",
		"activityDescription": "The activity description",
		"buttons": [
			{
				"label": "Unirse al servidor",
				"url": "https://discord.gg/g3ZbCmShD4"
			}
		] //This are buttons, you can configure them
	},
	"windowSettings": {
		"width": 1280,
		"height": 720
	} //These are settings of the window, please do not change this
}
```
