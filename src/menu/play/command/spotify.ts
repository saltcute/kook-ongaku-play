import { BaseMenu } from "kasumi.js";
import upath from 'upath';
import * as fs from 'fs';

import menu from '..';

class SpotifyMenu extends BaseMenu {
    name = 'spotify';
}

const spotifyMenu = new SpotifyMenu();

export default spotifyMenu;
menu.addCommand(spotifyMenu);

const basicPath = upath.join(__dirname, 'spotify');
const commands = fs.readdirSync(basicPath);
for (const command of commands) {
    try {
        require(upath.join(basicPath, command));
    } catch (e) {
        menu.logger.error('Error loading command');
        menu.logger.error(e);
    }
}