import React from 'react'

const Member = ({ member }) => {
    return (
        <>
            <div className="space-y-[15px]">
                <div className="grid grid-cols-2 gap-[1rem]">
                    <div className="flex flex-col gap-[5px]">
                        <p className='text-[15px] font-semibold'>
                            Full name:
                        </p>
                        <p className='text-[14px]'>
                            {member?.fullName}
                        </p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <p className='text-[15px] font-semibold'>
                            Email:
                        </p>
                        <p className='text-[14px]'>
                            {member?.email}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[1rem]">
                    <div className="flex flex-col gap-[5px]">
                        <p className='text-[15px] font-semibold'>
                            Phone number:
                        </p>
                        <p className='text-[14px] font-medium'>
                            {member?.phoneNumber}
                        </p>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <p className='text-[15px] font-semibold'>
                            Join As:
                        </p>
                        <p className='text-[14px] font-medium'>
                            {member?.joinAs}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className='text-[15px] font-semibold'>
                        Business | Org. name:
                    </p>
                    <p className='text-[14px] font-medium'>
                        {member?.nameOfBusiness}
                    </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className='text-[15px] font-semibold'>
                        Your Story:
                    </p>
                    <p className='text-[14px] font-medium'>
                        {member?.yourStory}
                    </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className='text-[15px] font-semibold'>
                        What are your thought on the problems, are these problems worth solving?:
                    </p>
                    <p className='text-[14px] font-medium'>
                        {member?.feedbackOnTheProblems}
                    </p>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <p className='text-[15px] font-semibold'>
                        Do you have any question, additional problems or suggestions? (optional):
                    </p>
                    <p className='text-[14px] font-medium'>
                        {member?.suggestionsOrQuestions}
                    </p>
                </div>
            </div> 
        </>
    )
}

export default Member