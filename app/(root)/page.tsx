import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

function page() {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>
            Get Interview-Ready with AI_Powered Practice and personalized Feedback
          </h2>
          <p>
            Practice on real interview questions & get instant feedback to improve your answers.
          </p>

          <Button asChild className='btn-primary'>
            <Link href= "/interview">Start an Interview</Link>
          </Button>

        </div>
        <Image
          src="/robot.png"
          alt="AI Interviewer Robot"
          width={400}
          height={400}
          className='max-sm:hidden'
        />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
           {dummyInterviews.map((interview)=>(
            <InterviewCard {...interview} key={interview.id} />

           ))}

           {/* <p>You haven&apos;t taken any interviews yet.</p> */}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>
          Take an Interviews
        </h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview)=>(
            <InterviewCard {...interview} key={interview.id} />

           ))}
        </div>

      </section>

    </>
  )
}

export default page