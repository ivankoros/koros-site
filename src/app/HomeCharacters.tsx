import Greenguy from "../media/greenguy.svg";

function HomeCharacters(){
    return(
        <div className="flex border-red-500 border max-w-32">
          <img src={Greenguy} alt="greenguy" />
        </div>
    ) 
}

export default HomeCharacters;