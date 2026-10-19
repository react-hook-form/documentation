// @ts-expect-error no types are available
import Sortable from "react-sortablejs"
import { Animate } from "react-simple-animate"
import type { FormDataItem } from "little-state-machine"
import clsx from "clsx"
import generic from "../data/generic"
import originalFormData from "../state/formData"
import styles from "./SortableContainer.module.css"

export default function SortableContainer({
  updateFormData,
  formData,
  editIndex,
  setEditIndex,
  setFormData,
  reset,
}: {
  updateFormData: (data: FormDataItem[]) => void
  formData: FormDataItem[]
  editIndex: number
  setEditIndex: (payload: number) => void
  setFormData: (payload: FormDataItem) => void
  reset: (values?: FormDataItem) => void
}) {
  return (
    <div className={styles.sortableWrapper}>
      <Sortable
        tag="ul"
        onChange={(data: FormDataItem["name"][]) => {
          updateFormData(
            data.reduce<FormDataItem[]>((previous, current) => {
              return [
                ...previous,
                formData[formData.findIndex((data) => current === data.name)],
              ]
            }, [])
          )
        }}
      >
        {formData.map((field, index) => {
          return (
            <Animate
              play
              start={{
                opacity: 0,
              }}
              end={{
                opacity: 1,
              }}
              key={field.name}
              render={({ style }) => (
                <li
                  className={clsx(
                    styles.list,
                    editIndex === index && styles.listEditing
                  )}
                  style={style}
                  data-id={field.name}
                >
                  <svg className={styles.grip} viewBox="0 0 16 16" aria-hidden>
                    <circle cx="5.5" cy="3.5" r="1.25" />
                    <circle cx="10.5" cy="3.5" r="1.25" />
                    <circle cx="5.5" cy="8" r="1.25" />
                    <circle cx="10.5" cy="8" r="1.25" />
                    <circle cx="5.5" cy="12.5" r="1.25" />
                    <circle cx="10.5" cy="12.5" r="1.25" />
                  </svg>
                  <span className={styles.name}>{field.name}</span>
                  {field.type && (
                    <span className={styles.type}>{field.type}</span>
                  )}

                  <div className={styles.editPanel}>
                    <button
                      type="button"
                      className={editIndex === index ? styles.editing : ""}
                      aria-label={`${
                        editIndex === index ? generic.cancelEdit : generic.edit
                      } ${field.name}`}
                      title={
                        editIndex === index ? generic.cancelEdit : generic.edit
                      }
                      onClick={() => {
                        if (editIndex === index) {
                          setEditIndex(-1)
                          setFormData({} as FormDataItem)
                          reset()
                        } else {
                          const index = formData.findIndex(
                            (data) => field.name === data.name
                          )
                          reset(formData[index])
                          setFormData(formData[index])
                          setEditIndex(index)
                        }
                      }}
                    >
                      {editIndex === index ? (
                        <svg viewBox="0 0 16 16" aria-hidden>
                          <path d="M4 4l8 8M12 4l-8 8" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 16 16" aria-hidden>
                          <path d="M11.5 2.5l2 2L6 12H4v-2z" />
                        </svg>
                      )}
                    </button>
                    <button
                      type="button"
                      aria-label={`${generic.delete} ${field.name}`}
                      title={generic.delete}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this?"
                          )
                        ) {
                          const index = formData.findIndex(
                            (data) => field.name === data.name
                          )

                          if (index >= 0) {
                            updateFormData([
                              ...formData.slice(0, index),
                              ...formData.slice(index + 1),
                            ])
                            setEditIndex(-1)

                            if (editIndex === index) {
                              setFormData({} as FormDataItem)
                            }
                          }
                        }
                      }}
                    >
                      <svg viewBox="0 0 16 16" aria-hidden>
                        <path d="M3 4.5h10M6.5 4.5V3h3v1.5M4.5 4.5l.6 8.5h5.8l.6-8.5" />
                      </svg>
                    </button>
                  </div>
                </li>
              )}
            />
          )
        })}
      </Sortable>

      {formData.length === 0 && (
        <p className={styles.empty}>
          No fields yet. Create one with the Input Creator.
        </p>
      )}

      <div className={styles.footer}>
        <button
          type="button"
          onClick={() => {
            updateFormData(originalFormData)
          }}
        >
          {generic.reset}
        </button>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("Are you sure you want to delete all fields?")) {
              updateFormData([])
            }
          }}
        >
          {generic.deleteAll}
        </button>
      </div>
    </div>
  )
}
