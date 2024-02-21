import React,{useState,useEffect} from 'react';


const Slider = () => {
  const images= ['https://www.bigbasket.com/media/uploads/section_item/images/hdpi/t2_hp_cmc_m_big-save-1_700_100822.jpg','https://images.indianexpress.com/2021/11/bigbasket.jpg','https://assets.thehansindia.com/h-upload/2021/02/18/1032131-big-basket.webp']
  const [imagesrc, setimagesrc] = useState(images[0])
  // setInterval(async function()  { 
    
    
  //  }, 10000);
  // for (let i = 0; i < images.length; i++) {
  //   setimagesrc(images[i])
  //   }
  // for(let i =0 ; i <= Object.keys(images).length ; i++){
  //   setInterval(function() {setimagesrc(images[i])}, 2000);
          
  // }
 setimagesrc[0]
  return (<>
    <div className={` bg-white shadow shadow-black border-none rounded-sm`}>
    <img alt={imagesrc} className=''  src={imagesrc}/>
  

  
    </div>
    </>)
}

export default Slider