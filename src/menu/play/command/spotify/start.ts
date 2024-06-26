import { BaseCommand, BaseSession, CommandFunction } from "kasumi.js";
import menu from "../spotify";
import * as spotify from '../../lib/getSpotify';

class AppCommand extends BaseCommand {
    name = 'start';
    description = '复读传入的消息';
    func: CommandFunction<BaseSession, any> = async (session) => {
        if (!session.guildId) return session.reply("guild only");

        const res = await spotify.getJoinedChannel(session.guildId, session.authorId);
        if (!res) return session.reply(spotify.card_error("You are not in a voice channel"))
        await spotify.streamSpotifyToChannel(res);
    }
}

const command = new AppCommand();
export default command;
menu.addCommand(command);