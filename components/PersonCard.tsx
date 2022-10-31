import Image from 'next/image'

type ImageProps = {
  profilePictureUrl: string
  name: string
  title: string
}

export const PersonCard = (props: ImageProps) => {
  const { profilePictureUrl, name, title } = props

  return (
    <>
      <div className='aspect-[520/520] w-14 mx-3 rounded-full overflow-hidden relative border border-dark-salmon'>
        <Image
          src={profilePictureUrl}
          alt={`${name} profile picture`}
          fill
          sizes='(max-width: 100px)'
        />
      </div>
      <div className='text-white'>
        <h3 className='text-lg font-light'>{name}</h3>
        <p className='text-xs font-extralight'>{title}</p>
      </div>
    </>
  )
}
