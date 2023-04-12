import "little-state-machine"

declare module "little-state-machine" {
  interface GlobalState {
    setting: {
      isFocusOnSearch: boolean
      version: number
    }
    formData: any
  }
}
