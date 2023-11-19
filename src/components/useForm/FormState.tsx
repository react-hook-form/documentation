import generic from "@/data/generic"
import tableStyles from "@/styles/table.module.css"
import { FormStateApi } from "../FormStateApi"

const FormState = () => {
  return (
    <div className={tableStyles.tableWrapper}>
      <table className={tableStyles.table}>
        <tbody>
          <tr>
            <th>{generic.name}</th>
            <th>{generic.type}</th>
            <th>{generic.description}</th>
          </tr>
          <FormStateApi />
        </tbody>
      </table>
    </div>
  )
}

export default FormState
