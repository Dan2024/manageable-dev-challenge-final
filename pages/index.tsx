import type { NextPage } from 'next'
import Head from 'next/head'
import { BookMeetingForm } from '../components/Form-Components/BookMeetingForm'
import { user } from '../components/user'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Manageable Dev Challenge</title>
          <link rel='icon' href='/images/favicon.ico' />
        </Head>
      </div>

      <section>
        <BookMeetingForm user={user} />
      </section>
    </>
  )
}

export default Home

// *******************************************************************
// WHERE API REQUEST TO GET USER WOULD USUALLY HAPPEN

// export async function getServerSideProps(context) {
// const user = await fetch('api')

//   return {
//     props: { user }, // passed to the page component as props
//   }
// }
// *******************************************************************
