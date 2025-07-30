import SaveAltIcon from '@mui/icons-material/SaveAlt';

const ButtonDownload = () => {
    return (
        <div >
            <a
                className="bg-white-500 text-pink-600 hover:bg-pink-600 hover:text-white  uppercase border border-red-500 focus:border-blue-500 m-2 p-2   "
                href="https://yessicaromero.github.io/PortfolioYessica/cv.pdf"
                download="Yessica.pdf"
            >Download cv <SaveAltIcon /></a>
        </div>
    )



}
export default ButtonDownload