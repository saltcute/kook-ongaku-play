import { BaseCommand, BaseSession, CommandFunction } from "kasumi.js";
import menu from "../spotify";
import * as spotify from '../../lib/getSpotify';

class AppCommand extends BaseCommand {
    name = 'song';
    description = '复读传入的消息';
    func: CommandFunction<BaseSession, any> = async (session) => {
        if (!session.guildId) return session.reply("guild only");

        if (session.args[0]) {
            await spotify.addToQueue(session, session.args[0]);
        } else {
            return session.reply(spotify.card_error("Please provide a Spotify song URI"))
        }
    }
}

const command = new AppCommand();
export default command;
menu.addCommand(command);