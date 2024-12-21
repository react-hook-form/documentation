interface Window {
  docsearch?: (options: {
    appId: string
    apiKey: string
    indexName: string
    inputSelector: string
  }) => vod
}

declare module "*.mdx" {
  export const meta: {
    title: string
    description: string
  }
}
