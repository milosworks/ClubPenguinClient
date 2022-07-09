document.body.appendChild(globalFrame)

rpc.login({ clientId: discordApplicationId }).catch(() => {})
