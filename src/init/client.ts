import Kasumi from 'kasumi.js';
import auth from '../configs/auth';

export const bot = new Kasumi({
    type: "websocket",
    vendor: "hexona",
    token: auth.khltoken,
    disableSnOrderCheck: true
});
