import { initQino } from "@qino/cms"

export default initQino({
  contentFolder: "src/content",
  mediaFolder: "public",
  cli: {
    check: { localAssetReferences: false },
  },
})
