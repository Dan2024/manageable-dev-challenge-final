import Image from 'next/image'
import { AiFillCaretDown } from 'react-icons/ai'

type ImageProps = {
  imageURL: string
  imageAlt: string
}

export const ProfilePictureMenuIcon = (props: ImageProps) => {
  return (
    <div className='grid grid-flow-col auto-cols-auto place-items-center '>
      <div className='aspect-[520/520] w-14 mx-3 rounded-full overflow-hidden relative border border-dark-salmon'>
        <Image
          src={props.imageURL}
          alt={props.imageAlt}
          fill
          sizes='(max-width: 100px)'
        />
      </div>
      <AiFillCaretDown className='-ml-2 mr-2' />
    </div>
  )
}
