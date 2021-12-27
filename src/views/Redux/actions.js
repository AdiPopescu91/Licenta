import {SET_NAME} from "./constans";

export function createName(newName){

    return {
        type:SET_NAME,
        name:newName
    }

}