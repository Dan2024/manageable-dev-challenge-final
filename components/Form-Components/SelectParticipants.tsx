// @ts-nocheck
import { BackButton } from '../BackButton'
import { PersonCard } from '../PersonCard'

type SelectParticipantsProps = {
  nextStep: () => void
  previousStep: () => void
}

export const SelectParticipants = (props: SelectParticipantsProps) => {
  const { nextStep, previousStep } = props

  return (
    <>
      <BackButton previousStep={previousStep} />
      <h2 className='my-5'>Book a Meeting</h2>

      <div className='mt-6'>
        <h4>With my Mentor</h4>
        <div
          onClick={nextStep}
          className='py-5 pr-2 bg-royal-blue-dark hover:bg-dark-salmon ease-in-out duration-300 rounded-md grid grid-cols-2__expand-2 cursor-pointer '
        >
          <PersonCard
            profilePictureUrl={'/images/mentor.png'}
            name={'John Doe'}
            title={'CEO of Example Company'}
          />
        </div>
      </div>

      <div className='mt-6'>
        <h4>With my Peer Group</h4>
        <div className='bg-royal-blue-dark ease-in-out duration-300 rounded-md pt-5 cursor-not-allowed'>
          <div className='pb-5 pr-2 grid grid-cols-2__expand-2'>
            <PersonCard
              profilePictureUrl={'/images/peer1.png'}
              name={'Jeremy Doe'}
              title={'Manager at Example Company'}
            />
          </div>
          <div className='pb-5 pr-2 grid grid-cols-2__expand-2'>
            <PersonCard
              profilePictureUrl={'/images/peer2.png'}
              name={'Jane Doe'}
              title={'Manager at Example Company'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
