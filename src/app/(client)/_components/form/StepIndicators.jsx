import React from 'react'


const StepIndicators = ({ currentStep, steps }) => {
    return (
        <div className="flex gap-x-[10px] items-center justify-center mb-4 relative">
            {steps.map((step, index) => {
                const isLastStep = index === steps.length - 1;
                const stepClass = `
                    ${
                        currentStep > index + 1 || currentStep === isLastStep ? 
                            'bg-[#327bbb] w-[2rem] h-[3px] rounded-md' : 
                            'w-[1rem] h-[3px] bg-zinc-400 rounded-md'
                    }`;
                
                return (
                    <div key={index} className="relative flex items-center justify-center">
                        <div className={stepClass} />
                        {/* {!isLastStep && (
                            <div className={stepClass} />
                        )} */}
                    </div>
                );
            })}
        </div>
    )
}

export default StepIndicators