// @ts-nocheck
import { BackButton } from '../BackButton'
import { PersonCard } from '../PersonCard'

type SelectParticipantsProps = {
  nextStep: () => void
  previousStep: () => void
}

export const SelectParticipants = (props: SelectParticipantsProps) => {
  const { nextStep, previousStep, user } = props

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
            profilePictureUrl={user.mentor.profilePictureURL}
            name={user.mentor.name}
            title={user.mentor.title}
          />
        </div>
      </div>

      <div className='mt-6'>
        <h4>With my Peer Group</h4>
        <div className='bg-royal-blue-dark ease-in-out duration-300 rounded-md pt-5 cursor-not-allowed'>
          <div className='pb-5 pr-2 grid grid-cols-2__expand-2'>
            <PersonCard
              profilePictureUrl={user.peerGroup.peer1.profilePictureURL}
              name={user.peerGroup.peer1.name}
              title={user.peerGroup.peer1.title}
            />
          </div>
          <div className='pb-5 pr-2 grid grid-cols-2__expand-2'>
            <PersonCard
              profilePictureUrl={user.peerGroup.peer2.profilePictureURL}
              name={user.peerGroup.peer2.name}
              title={user.peerGroup.peer2.title}
            />
          </div>
        </div>
      </div>
    </>
  )
}
