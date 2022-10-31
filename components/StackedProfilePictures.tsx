import Image from 'next/image'

type StackedProfilePicturesProps = {
  image1: string
  image2: string
}

export const StackedProfilePictures = (props: StackedProfilePicturesProps) => {
  const { image1, image2 } = props

  return (
    <>
      <div className='aspect-[520/520] w-14 mx-3 rounded-full overflow-hidden relative border border-dark-salmon grid-area-1'>
        <Image
          src={image1}
          alt={'coachee profile picture'}
          fill
          sizes='(max-width: 100px)'
        />
      </div>
      <div className='aspect-[520/520] w-14 mx-3 rounded-full overflow-hidden relative border border-dark-salmon grid-area-1 ml-10'>
        <Image
          src={image2}
          alt={'mentor profile picture'}
          fill
          sizes='(max-width: 100px)'
        />
      </div>
    </>
  )
}
