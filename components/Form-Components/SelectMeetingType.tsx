// @ts-nocheck
import { BackButton } from '../BackButton'
import { MeetingType } from '../MeetingType'

export const SelectMeetingType = (props) => {
  const { nextStep, previousStep, formData, setFormData, user } = props

  const chooseMeetingType = (e) => {
    const selectedMeetingType = e.currentTarget.parentNode.key
    setFormData({ ...formData, meetingType: selectedMeetingType })
    nextStep()
  }

  return (
    <>
      <BackButton previousStep={previousStep} />
      <h2 className='my-5'>Book a Meeting</h2>

      <div className='mt-6'>
        <p>Please select the type of meeting you would like to shedule.</p>

        {user.mentor.meetingsOffered.map((meeting) => (
          <MeetingType
            userProfilePictureURL={user.profilePictureURL}
            mentorProfilePictureURL={user.mentor.profilePictureURL}
            meetingID={meeting.ID}
            title={meeting.title}
            location={meeting.location}
            duration={meeting.duration}
            chooseMeetingType={chooseMeetingType}
          />
        ))}
      </div>
    </>
  )
}
