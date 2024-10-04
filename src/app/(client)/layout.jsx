const { default: Navbar } = require("./_components/Navbar")


const ClientLayout = ({ children }) => {
    return (
        <div className='w-full min-h-screen flex'>
            <main className='w-[90%]  mx-auto relative lg:w-[80%] lg:max-w-screen-xl'>
                <div className="pt-[1.5rem] sticky top-0 bg-[#fbfbfb] z-20">
                    <Navbar />
                </div>
                <>
                    {children}
                </>
            </main>
        </div>
    )
}

export default ClientLayout