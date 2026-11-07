# Volt Range Studio

Configure a fictional electric car's battery, starting charge, speed, and outside temperature. Compare three trip presets and see estimated energy use and range. The displayed model is illustrative and does not represent a real vehicle or route.

Open `index.html` in a browser. All calculations and the original car illustration run locally without dependencies.

This independent implementation uses the broad idea of a car showcase from [YildizDikme/React-Car-Landing-Project](https://github.com/YildizDikme/React-Car-Landing-Project). The car drawing, name, copy, interface, and estimation model were created for this project.

## Local server and agent connection

Install Node 22 or newer and Git. From this repository run:

```sh
npm ci
npm start
```

Open the loopback URL printed by the command. The runtime is pinned to a specific revision of [Project Agent Bridge](https://github.com/Mert-Oezdemir/project-agent-bridge).

To connect an MCP-compatible agent, run `npm run mcp:config --silent` and add its `mcpServers` entry to your host. Run `npm run doctor` to see local project and account configuration.

Chrome or Edge is needed for agent browser controls. You can set `CHROME` in `.env`, or run `npx playwright install chromium` to install a browser.

Copy `.env.example` to `.env` before adding account settings. Keep `.env` local. Restart the runtime after changing it.
