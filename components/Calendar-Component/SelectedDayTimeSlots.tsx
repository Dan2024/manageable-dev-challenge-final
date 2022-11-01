// @ts-nocheck
import { add, format, isSameDay, parseISO } from 'date-fns'
import { useState } from 'react'

export const SelectedDayTimeSlots = ({
  selectedDay,
  user,
  nextStep,
  formData,
  setFormData,
}) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState()

  const isRadioSelected = (value) => selectedRadioBtn === value

  const handleRadioClick = (e) => {
    const { value, name } = e.currentTarget
    setSelectedRadioBtn(value)
    setFormData({ ...formData, [name]: value })
  }

  const handleClick = () => {
    // send formData via POST req to db
    nextStep()
  }

  const timesForSelectedDay = user.mentor.availibleDatesAndTimes.filter(
    (date) => isSameDay(parseISO(date), selectedDay)
  )
  const startTimesOnly = timesForSelectedDay.filter((_, i) => i % 2 === 0)

  return (
    <div className='pt-5'>
      <h3>
        <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
          {format(selectedDay, 'EEEE, MMMM do')}
        </time>
      </h3>

      {startTimesOnly.map((startTime, i) => {
        return (
          <div>
            <input
              type='radio'
              id={startTime + '_' + i}
              name='meetingDate'
              value={startTime}
              className='radio-btn hidden'
              checked={isRadioSelected(startTime)}
              onChange={handleRadioClick}
            />
            <label
              htmlFor={startTime + '_' + i}
              className='w-full max-w-md block border-2 border-royal-blue-dark rounded-md text-center py-3 mt-3 cursor-pointer transition duration-150 ease-in-out '
            >
              {format(parseISO(startTime), 'HH:mm')} :
              {format(add(parseISO(startTime), { minutes: 50 }), 'HH:mm')}
            </label>
          </div>
        )
      })}
      <button
        onClick={handleClick}
        className='bg-dark-salmon text-white rounded-md mt-3 py-3 w-full max-w-md block hover:bg-royal-blue-dark hover:text-white transition duration-150 ease-in-out'
      >
        Confirm
      </button>
    </div>
  )
}
