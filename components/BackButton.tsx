import { BsArrowLeft } from 'react-icons/bs'

type BackButtonProps = {
  previousStep: () => void
}

export const BackButton = ({ previousStep }: BackButtonProps) => {
  return (
    <>
      <div
        onClick={previousStep}
        className='mt-2 grid grid-cols-2__expand-2 gap-2 w-16 cursor-pointer'
      >
        <BsArrowLeft className='place-self-center' />
        <p>Back</p>
      </div>
    </>
  )
}
