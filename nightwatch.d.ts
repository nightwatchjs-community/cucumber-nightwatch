// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NightwatchAPI, definition } from 'nightwatch'

declare module 'nightwatch' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface NightwatchCustomPageObjects extends CustomPageObjects {}

  export interface NightwatchCustomCommands {
    beLogin(credentials: {
      name: string
      password: string
    }): NightwatchCustomCommands
    beRelativeURL(url: string): NightwatchCustomCommands
    // drupalLogin(credentials): NightwatchCustomCommands;
    // drupalLogout(): NightwatchCustomCommands;
    // drupalUserIsLoggedIn(callback): NightwatchCustomCommands;
  }

  // export interface NightwatchCustomAssertions {
  //   visuallyTheSame(): NightwatchCustomAssertions;
  // }
}
