import "little-state-machine"

declare module "little-state-machine" {
  interface GlobalState {
    setting: {
      isFocusOnSearch: boolean
      lightMode: boolean
      version: number
    }
    formData: any
  }
}
