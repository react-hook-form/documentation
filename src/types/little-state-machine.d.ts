import "little-state-machine"

declare module "little-state-machine" {
  interface GlobalState {
    formData: {
      name: string
      type: string
      required: boolean
      max: string
      min: string
      maxLength: string
      minLength: string
      pattern: string
      options?: string
    }[]
  }
}
