// @ts-nocheck
import { SelectParticipants } from '../Form-Components/SelectParticipants'
import { SelectMeetingType } from '../Form-Components/SelectMeetingType'
import { SelectDate } from '../Form-Components/SelectDate'
import { SuccessfulBookingModal } from './SuccessfulBookingModal'
import { useState } from 'react'

const INITIAL_STATE = {
  step: 1,
  meetingWith: 'mentor',
  meetingType: '1 : 1 Coaching Session With John Doe',
  meetingDate: '',
}

export const BookMeetingForm = ({ user }) => {
  const [formData, setFormData] = useState(INITIAL_STATE)

  const nextStep = () => {
    setFormData({ step: formData.step++, ...formData })
  }

  const previousStep = () => {
    setFormData({ step: formData.step--, ...formData })
  }

  switch (formData.step) {
    case 1:
      return (
        <SelectParticipants
          nextStep={nextStep}
          previousStep={previousStep}
          formData={formData}
          setFormData={setFormData}
          user={user}
        />
      )

    case 2:
      return (
        <SelectMeetingType
          nextStep={nextStep}
          previousStep={previousStep}
          formData={formData}
          setFormData={setFormData}
          user={user}
        />
      )

    case 3:
      return (
        <SelectDate
          nextStep={nextStep}
          previousStep={previousStep}
          formData={formData}
          setFormData={setFormData}
          user={user}
        />
      )

    case 4:
      return (
        <SuccessfulBookingModal
          nextStep={nextStep}
          previousStep={previousStep}
          formData={formData}
          setFormData={setFormData}
          user={user}
        />
      )

    default:
      return null
  }
}
