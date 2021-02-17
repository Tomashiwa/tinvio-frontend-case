import { Context, createContext } from "react"

export type UserState = {
    id: number,
    name: string,
    phone: string,
    keywords: string[],
    address: string
}

export let USERSTATE_BLANK : UserState = {
    id: -1, 
    name: "", 
    phone: "",
    keywords: [], 
    address: ""
}

export type UserInfo = {
    userState: UserState,
    setUserState: (userState: UserState) => void
}

export let UserContext : Context<UserInfo> = createContext<UserInfo>({
    userState: {...USERSTATE_BLANK}, 
    setUserState: () => {}
});
