import ContactMailIcon from '@mui/icons-material/ContactMail';
import PhoneIcon from '@mui/icons-material/Phone';


export default function Info() {
  return (
    <div className='m-3 p-3 '>
      <h2 className='flex text-center justify-center m-4 p-4 text-2xl  text-gray-300 overline '>Informacion de contacto</h2>
      <div className="max-w-screen-md mx-auto px-6 py-12">

        <div className="grid gap-6 sm:grid-cols-2">

          <div className="flex flex-col items-center rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow p-6 border border-spacing-2 border-green-100/20">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-500 text-white mb-4">
              <PhoneIcon className="w-7 h-7" />
            </div>
            <h2 className="text-green-300 text-lg font-semibold overline">Celular</h2>
            <p className="text-slate-100 text-lg mt-2 font-medium">
              2983-570884
            </p>
          </div>


          <div className="flex flex-col items-center rounded-2xl bg-gray-900 shadow-lg hover:shadow-xl transition-shadow p-4 border border-spacing-2 border-green-300/20">
            <div className="flex items-center  justify-center w-14 h-14 rounded-full bg-slate-500 text-white mb-4">
              <ContactMailIcon className="w-7 h-7" />
            </div>
            <h2 className="text-green-300 text-lg font-semibold overline">Email</h2>
            <p className="  text-slate-100 break-words text-center">
              yessicaromero@outlook.com.ar
            </p>
          </div>
        </div>
      </div></div>
  );
}


