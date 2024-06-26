import { BaseCommand, BaseSession, CommandFunction } from "kasumi.js";
import menu from "../spotify";
import * as spotify from '../../lib/getSpotify';

class AppCommand extends BaseCommand {
    name = 'queue';
    description = '复读传入的消息';
    func: CommandFunction<BaseSession, any> = async (session) => {
        if (!session.guildId) return session.reply("guild only");

        return await spotify.getQueue(session);
    }
}

const command = new AppCommand();
export default command;
menu.addCommand(command);