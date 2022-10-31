// @ts-nocheck
import { useState } from 'react'
import { BackButton } from '../BackButton'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfWeek,
  startOfToday,
} from 'date-fns'
import { SelectedDayTimeSlots } from '../Calendar-Component/SelectedDayTimeSlots'

function buildClassName(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

export const SelectDate = (props) => {
  const { nextStep, previousStep, formData, setFormData, user } = props

  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  return (
    <>
      <BackButton previousStep={previousStep} />
      <h2 className='my-5'>Book a Meeting</h2>

      <div className='pb-3 max-w-md text-royal-blue-dark bg-dark-salmon rounded-md'>
        <div className='py-5 grid grid-cols-4__expand-2'>
          <h3 className='pl-5'>{format(firstDayCurrentMonth, 'MMMM yyyy')}</h3>

          <div></div>

          <button
            onClick={previousMonth}
            type='button'
            className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Next month</span>
            <AiOutlineLeft className='w-5 h-5 text-black' aria-hidden='true' />
          </button>

          <button
            type='button'
            onClick={nextMonth}
            className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Previous month</span>
            <AiOutlineRight className='w-5 h-5 text-black' aria-hidden='true' />
          </button>
        </div>

        <div className='mb-2 text-gray-500 grid grid-cols-7 gap-1 place-items-center'>
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>

        <div className='grid grid-cols-7 gap-1'>
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={buildClassName(dayIdx === 0 && colStartClasses[getDay(day)])}
            >
              <button
                type='button'
                onClick={() => setSelectedDay(day)}
                className={buildClassName(
                  isBefore(day, today) && 'opacity-30 pointer-events-none',

                  isEqual(day, selectedDay) && 'bg-royal-blue-dark text-white',

                  user.mentor.availibleDatesAndTimes.some((date) =>
                    isSameDay(parseISO(date), day)
                  ) &&
                    !isBefore(day, today) &&
                    !isEqual(day, selectedDay) &&
                    'bg-white opacity-60  cursor-pointer',

                  !user.mentor.availibleDatesAndTimes.find((date) =>
                    isSameDay(parseISO(date), day)
                  ) && 'pointer-events-none',

                  isBefore(day, today) && 'opacity-30 pointer-events-none',

                  'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
              </button>

              <div className='w-1 h-1 mx-auto mt-1'>
                {isEqual(day, today) && (
                  <div className='w-1 h-1 -mt-0.5 rounded-full bg-royal-blue-dark'></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SelectedDayTimeSlots
        selectedDay={selectedDay}
        user={user}
        nextStep={nextStep}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  )
}

// const SelectedDayOptions = ({ selectedDay, user }: any) => {
//   const timesForSelectedDay = user.mentor.availibleDatesAndTimes.filter((date) =>
//     isSameDay(parseISO(date), selectedDay)
//   )
//   const startTimesOnly = timesForSelectedDay.filter((_, i) => i % 2 === 0)

//   return (
//     <div className='pt-5'>
//       <h3>
//         <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
//           {format(selectedDay, 'EEEE, MMMM do')}
//         </time>
//       </h3>

//       {startTimesOnly.map((startTime) => {
//         return (
//           <div
//             key={startTime}
//             className='max-w-lg border-2 border-royal-blue-dark rounded-md text-center py-3 mt-3'
//           >
//             {format(parseISO(startTime), 'HH:mm')} :{' '}
//             {format(add(parseISO(startTime), { minutes: 50 }), 'HH:mm')}
//           </div>
//         )
//       })}
//       <button className='border-2 border-royal-blue-dark rounded-md mt-3 py-3 ml-auto w-32 block'>
//         Confirm
//       </button>
//     </div>
//   )
// }
