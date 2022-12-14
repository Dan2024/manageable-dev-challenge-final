export const user = {
  ID: 1,
  name: 'example user',
  profilePictureURL: '/images/coachee.png',
  title: 'Manager at Example Company',
  availibleDatesAndTimes: [],

  mentor: {
    ID: 1,
    name: 'John Doe',
    profilePictureURL: '/images/mentor.png',
    title: 'CEO of Example Company',
    availibleDatesAndTimes: [
      '2022-11-02T09:00',
      '2022-11-02T09:50',
      '2022-11-02T016:00',
      '2022-11-02T16:50',
      '2022-11-03T09:00',
      '2022-11-03T09:50',
      '2022-11-09T09:00',
      '2022-11-09T09:50',
      '2022-11-10T09:00',
      '2022-11-10T09:50',
      '2022-11-10T16:00',
      '2022-11-10T16:50',
      '2022-11-23T13:00',
      '2022-11-23T13:50',
      '2022-11-24T13:00',
      '2022-11-24T13:50',
      '2022-10-30T09:00',
      '2022-10-30T09:50',
      '2022-10-20T09:00',
      '2022-10-20T09:50',
      '2022-10-31T11:00',
      '2022-10-31T11:50',
      '2022-10-31T14:00',
      '2022-10-31T14:50',
    ],
    meetingsOffered: [
      {
        ID: 1,
        title: '1 : 1 Coaching Session With John Doe',
        location: 'zoom',
        duration: '50mins',
      },
    ],
  },

  peerGroup: {
    peer1: {
      name: 'Jeremy Doe',
      profilePictureURL: '/images/peer1.png',
      title: 'Manager at Example Company',
      availibleDatesAndTimes: [],
    },
    peer2: {
      name: 'Jane Doe',
      profilePictureURL: '/images/peer2.png',
      title: 'Manager at Example Company',
      availibleDatesAndTimes: [],
    },
  },
}
