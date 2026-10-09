
import Image1 from '../assets/GalleryImage1.jpg';
import Image2 from '../assets/GalleryImage2.jpg';
import Image3 from '../assets/GalleryImage3.jpg';
import Image4 from '../assets/GalleryImage4.jpg';
import Image5 from '../assets/GalleryImage5.jpg';
import Image6 from '../assets/GalleryImage6.jpg';

import '../App.css';
import { useState } from 'react';

const ImageBand = () => {

    const [imageset , setImageSet] = useState(Image1);
    const ImageArray = [Image1 , Image2 , Image3 , Image4 , Image5 , Image6 ];

    return(
        <>
            <div className='mainImage w-[640px]'>
                <img src={imageset} className='w-full h-full object-cover' />
            </div>
            <div className='allImages flex gap-2 mt-4'>
                {ImageArray.map((imgList, index) => {
                    return(
                        <div key={index}><img onClick={() => setImageSet(imgList)}  src={imgList} width="100" height="100" className='object-cover' /></div>
                    )
                })}
            </div>
        </>
    );
}

export default ImageBand;



// =======================================================================================

// import { useState } from 'react';
// import '../App.css';

// const ImageBand = () => {

//     const [name , setName] = useState("Jiyan");
//     const nameList = ["Jiyan","Mahi","Dharm","Mantra"];

//     const handleClick = (e) => {
//         setName(e.target.value);
//     }

//     return(
//         <>
//             <h1 className='text-[50px] font-bold'>{name}</h1>
//             <div className="text-[30px] flex gap-2">
//                 <select onClick={handleClick}>
//                 {nameList.map((nameItem , index) => {
//                     return <option key={index} value={nameItem}>{nameItem}</option>
//                 })}
//                 </select>
//             </div>
//         </>
//     )
// }
// export default ImageBand;