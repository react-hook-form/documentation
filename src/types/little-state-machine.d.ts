import "little-state-machine"

declare module "little-state-machine" {
  interface GlobalState {
    language: { currentLanguage?: string }
    setting: {
      isFocusOnSearch: boolean
      lightMode: boolean
      version: number
    }
    formData: any
  }
}
