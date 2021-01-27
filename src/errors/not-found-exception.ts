import {
    StatusCodes,
    getReasonPhrase,
} from 'http-status-codes';


export class NotFoundException extends Error {
    constructor() {
        const message = getReasonPhrase(StatusCodes.NOT_FOUND);
        super(message);
    }
}
