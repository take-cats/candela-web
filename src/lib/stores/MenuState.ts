import { writable } from "svelte/store"

export enum CurrentMenu {
    ObjectRecognition = "사물 인식",
    FaceRecognition = "얼굴 분석",
    ObjectTagging = "물체 기억"
}

export interface MenuState {
    currentMenu: CurrentMenu;
}

export const menuState = writable<MenuState>({
    currentMenu: CurrentMenu.ObjectRecognition,
})