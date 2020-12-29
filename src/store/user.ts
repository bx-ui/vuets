import { Module } from "vuex"
import { UserState, RootState } from "@/types"

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: ""
  },
  mutations: {
    asdf(state) {

    }
  }
}