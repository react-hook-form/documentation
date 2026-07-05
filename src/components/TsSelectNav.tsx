import { SelectNav } from "./selectNav"
import { tsLinks } from "./Menu/MenuLinks"

export function TsSelectNav() {
  return (
    <SelectNav
      options={tsLinks.map(({ name, pathname }) => ({
        label: name,
        value: `/ts${pathname}`,
      }))}
    />
  )
}
