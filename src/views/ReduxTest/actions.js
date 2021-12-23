import {SET_EMAIL} from "./constans";

export function createEmail(newEmail){

    return {
        type:SET_EMAIL,
        email:newEmail
    }

}