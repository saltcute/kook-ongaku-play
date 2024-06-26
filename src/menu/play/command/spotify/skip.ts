import { BaseCommand, BaseSession, CommandFunction } from "kasumi.js";
import menu from "../spotify";
import * as spotify from '../../lib/getSpotify';

class AppCommand extends BaseCommand {
    name = 'skip';
    description = '复读传入的消息';
    func: CommandFunction<BaseSession, any> = async (session) => {
        if (!session.guildId) return session.reply("guild only");

        return await spotify.skip(session);
    }
}

const command = new AppCommand();
export default command;
menu.addCommand(command);