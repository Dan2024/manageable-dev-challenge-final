import { MdLocationPin, MdTimer } from 'react-icons/md'
import { StackedProfilePictures } from './StackedProfilePictures'

type MeetingTypeProps = {
  location: string
  duration: string
  meetingID: number
  title: string
  chooseMeetingType: () => void
  userProfilePictureURL: string
  mentorProfilePictureURL: string
}

export const MeetingType = (props: MeetingTypeProps) => {
  const {
    location,
    duration,
    meetingID,
    title,
    chooseMeetingType,
    userProfilePictureURL,
    mentorProfilePictureURL,
  } = props
  return (
    <div key={meetingID}>
      <div
        onClick={chooseMeetingType}
        className='py-5 pr-2 bg-royal-blue-dark hover:bg-dark-salmon ease-in-out duration-300 rounded-md grid grid-cols-2__expand-2 cursor-pointer '
      >
        <StackedProfilePictures
          image1={userProfilePictureURL}
          image2={mentorProfilePictureURL}
        />
        <h3 className='text-white text-lg font-light my-auto'>{title}</h3>

        <ul className='pt-3 ml-3 text-white font-extralight'>
          <li className='grid grid-cols-2__expand-2 gap-1'>
            <MdTimer className='place-self-center' />
            {duration}
          </li>

          <li className='grid grid-cols-2__expand-2 gap-1'>
            <MdLocationPin className='place-self-center' />
            {location}
          </li>
        </ul>
      </div>
    </div>
  )
}
