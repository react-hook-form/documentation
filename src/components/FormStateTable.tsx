import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import { FormStateApi } from "./FormStateApi"

export default function FormStateTable({ api }) {
  return (
    <>
      <h2 className={typographyStyles.subTitle} id="return">
        Return
      </h2>
      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>{generic.name}</th>
              <th>{generic.type}</th>
              <th>{generic.description}</th>
            </tr>
            <FormStateApi api={api} />
          </tbody>
        </table>
      </div>
    </>
  )
}
