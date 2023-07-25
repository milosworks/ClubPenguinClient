# THIS PROJECT IS ON EOL, NO MORE SUPPORT, FORKS ARE WELCOMED BUT NO PULL REQUEST WILL BE ACCEPTED

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
3. Open a terminal in your pc, and clone this repository (on your desktop for example) `git clone https://github.com/SecretAgencyClubPenguin/ClubPenguinClient`
4. **IMPORTANT** When you clone the repository, go to (Your repository) > Actions > Enable Workflows (Only if you see the message if not, ignore this step)
5. Enter the folder of the client
6. Go to the [config file](./config.json) and edit it (with notepad for example, **DO NOT USE WORD PLEASE**), to see the explanation of each config [click here](#config-file)
7. Copy the name of the repository you created and your username, you should have something like this **SecretAgencyClubPenguin/ClubPenguinClient** and paste it in the "repositoryName" config **DO NOT REMOVE THE "" ON ANYTHING** just put the name inside the "" replacing **SecretAgencyClubPenguin/ClubPenguinClient**
8. Create a personal access token [click here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic), read that instructions then when you have it in your repository go to **Settings > Secrets and Variables > Actions > New Repository Secret**, set the name exactly this `BUILD_TOKEN`, and in the space where it says **secret** put your token. **DO NOT SHARE THIS TOKEN**
9. Now just use this commands inside the folder of your client (hit enter for each command do not put them in the same line)
    ```sh
    	git add .
    	git commit -m "New"
    	git push origin main
    ```
10. If you follow these instructions correctly, if you go to the "Actions" part on your repository some "workflow" should be executing and you should be able to download the executable of your client

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
