import Image from 'next/image'
import { ProfilePictureMenuIcon } from './ProfilePictureMenuIcon'

export const Header = () => {
  return (
    <header className='bg-royal-blue-dark text-dark-salmon font-poppins uppercase '>
      <nav className='max-w-6xl mx-auto py-4 grid grid-cols-3__expand-2 place-items-center'>
        <div className='aspect-[478/96] w-48 relative'>
          <Image
            src='/logos/manageable-header-logo.png'
            alt='manageable logo'
            priority
            fill
            sizes='(max-width: 200px)'
          />
        </div>

        <div></div>

        <ProfilePictureMenuIcon
          imageURL={'/images/coachee.png'}
          imageAlt={'coachee profile picture'}
        />
      </nav>
    </header>
  )
}
