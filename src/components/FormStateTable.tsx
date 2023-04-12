import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import { FormStateApi } from "./FormStateApi"

const FormStateTable = ({ currentLanguage, api }) => (
  <>
    <h2 className={typographyStyles.subTitle} id="return">
      Return
    </h2>
    <div className={tableStyles.tableWrapper}>
      <table className={tableStyles.table}>
        <tbody>
          <tr>
            <th>{generic.name[currentLanguage]}</th>
            <th>{generic.type[currentLanguage]}</th>
            <th>{generic.description[currentLanguage]}</th>
          </tr>
          <FormStateApi api={api} />
        </tbody>
      </table>
    </div>
  </>
)

export default FormStateTable
