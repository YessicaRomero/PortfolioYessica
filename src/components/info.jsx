import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';


export default function Info() {



    return (
        <div className=' max-w-screen-xl mx-auto '>
            <div className='flex flex-col md:flex-col '>
                <div className='flex flex-col   p-2 m-2'>
                    <p className='text-green-200 text-center'><PhoneIcon /></p>
                    <h2 className='text-green-200 text-center'>Cel </h2>
                    <h3 className='text-slate-50 text-center xl:text-xl'>2983-570884</h3>
                </div>
                <div className='flex flex-col    p-2 m-2 '>
                    <p className='text-green-200 text-center'><ContactMailIcon /></p>
                    <h2 className='text-green-200 text-center'>Email</h2>
                    <h3 className='text-slate-50 text-xs  sm:text-sm md:text-base lg:text-lg  text-center'>yessicaromero@outlook.com.ar</h3>

                </div>
            </div>


        </div>


    )
}