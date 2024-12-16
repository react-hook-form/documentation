import "little-state-machine"

declare module "little-state-machine" {
  export interface FormDataItem {
    name: string
    type: string
    required: boolean
    max: string
    min: string
    maxLength: string
    minLength: string
    pattern: string
    /** Available when type is `select` or `radio` */
    options?: string
  }

  interface GlobalState {
    formData: FormDataItem[]
  }
}
