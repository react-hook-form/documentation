interface Window {
  docsearch: any
}

declare module "*.mdx" {
  export const meta: {
    title: string
    description: string
  }
}
