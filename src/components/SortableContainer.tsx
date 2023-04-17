import Sortable from "react-sortablejs"
import { Animate } from "react-simple-animate"
import colors from "../styles/colors"
import generic from "../data/generic"
import originalFormData from "../state/formData"
import {
  editPanel,
  list,
  sortableWrapper,
} from "./SortableContainer.module.css"

export default function SortableContainer({
  updateFormData,
  formData,
  editIndex,
  setEditIndex,
  setFormData,
  reset,
  currentLanguage,
}: {
  updateFormData: (data: object) => void
  formData: any
  editIndex: number
  setEditIndex: (payload: number) => void
  setFormData: (payload: object) => void
  reset: () => void
  currentLanguage: string
}) {
  return (
    <div className={sortableWrapper}>
      <Sortable
        tag="ul"
        onChange={(data) => {
          updateFormData(
            data.reduce((previous, current) => {
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
                <li className={list} style={style} data-id={field.name}>
                  <svg viewBox="0 0 1024 1280">
                    <circle cx="319.5" cy="155.5" r="104.1" />
                    <path d="M413.6,155.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7     c-25.4-30.3-28.1-75.2-7.6-108.7c20.1-33.1,60.2-51.1,98.3-43.4C381.4,72,413.3,110.8,413.6,155.5c0.1,12.9,20.1,12.9,20,0     c-0.3-47.8-30.4-90.6-75.2-107.3c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6     c52.5-10.6,90.4-58.6,90.8-111.7C433.7,142.6,413.7,142.6,413.6,155.5z" />
                    <circle cx="319.5" cy="512" r="104.1" />
                    <path d="M413.6,512c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7c-25.4-30.3-28.1-75.2-7.6-108.7     c20.1-33.1,60.2-51.1,98.3-43.4C381.4,428.5,413.3,467.3,413.6,512c0.1,12.9,20.1,12.9,20,0c-0.3-47.8-30.4-90.6-75.2-107.3     c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6c52.5-10.6,90.4-58.6,90.8-111.7     C433.7,499.1,413.7,499.1,413.6,512z" />
                    <circle cx="319.5" cy="868.5" r="104.1" />
                    <path d="M413.6,868.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7     c-25.4-30.3-28.1-75.2-7.6-108.7c20.1-33.1,60.2-51.1,98.3-43.4C381.4,785,413.3,823.8,413.6,868.5c0.1,12.9,20.1,12.9,20,0     c-0.3-47.8-30.4-90.6-75.2-107.3c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6     c52.5-10.6,90.4-58.6,90.8-111.7C433.7,855.6,413.7,855.6,413.6,868.5z" />
                    <circle cx="704.5" cy="155.5" r="104.1" />
                    <path d="M798.6,155.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7     c-25.4-30.3-28.1-75.2-7.6-108.7c20.1-33.1,60.2-51.1,98.3-43.4C766.4,72,798.3,110.8,798.6,155.5c0.1,12.9,20.1,12.9,20,0     c-0.3-47.8-30.4-90.6-75.2-107.3c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6     c52.5-10.6,90.4-58.6,90.8-111.7C818.7,142.6,798.7,142.6,798.6,155.5z" />
                    <circle cx="704.5" cy="512" r="104.1" />
                    <path d="M798.6,512c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7c-25.4-30.3-28.1-75.2-7.6-108.7     c20.1-33.1,60.2-51.1,98.3-43.4C766.4,428.5,798.3,467.3,798.6,512c0.1,12.9,20.1,12.9,20,0c-0.3-47.8-30.4-90.6-75.2-107.3     c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6c52.5-10.6,90.4-58.6,90.8-111.7     C818.7,499.1,798.7,499.1,798.6,512z" />
                    <circle cx="704.5" cy="868.5" r="104.1" />
                    <path d="M798.6,868.5c-0.3,38.9-24.8,75.2-61.8,88.4c-37.5,13.4-79.4,1.8-105-28.7c-25.4-30.3-28.1-75.2-7.6-108.7     c20.1-33.1,60.2-51.1,98.3-43.4C766.4,785,798.3,823.8,798.6,868.5c0.1,12.9,20.1,12.9,20,0c-0.3-47.8-30.4-90.6-75.2-107.3     c-44.3-16.4-96.6-2.2-126.5,34.4c-30.4,37.2-35.1,90.6-9.9,132c25,41.1,73.9,62,120.9,52.6c52.5-10.6,90.4-58.6,90.8-111.7     C818.7,855.6,798.7,855.6,798.6,868.5z" />
                  </svg>
                  {field.name}

                  <div className={editPanel}>
                    <button
                      style={{
                        ...(editIndex === index
                          ? { background: colors.lightPink }
                          : null),
                      }}
                      onClick={() => {
                        if (editIndex === index) {
                          setEditIndex(-1)
                          setFormData({})
                          reset()
                        } else {
                          const index = formData.findIndex(
                            (data) => field.name === data.name
                          )
                          setFormData(formData[index])
                          setEditIndex(index)
                        }
                      }}
                    >
                      {editIndex === index
                        ? generic.cancelEdit[currentLanguage]
                        : generic.edit[currentLanguage]}
                    </button>
                    <button
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
                              setFormData({})
                            }
                          }
                        }
                      }}
                    >
                      {generic.delete[currentLanguage]}
                    </button>
                  </div>
                </li>
              )}
            />
          )
        })}
      </Sortable>

      <div className={editPanel}>
        <button
          onClick={() => {
            updateFormData(originalFormData)
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete all fields?")) {
              updateFormData([])
            }
          }}
          style={{
            marginRight: 15,
          }}
        >
          {generic.deleteAll[currentLanguage]}
        </button>
      </div>
    </div>
  )
}
