import React from 'react'
import './Ads.css'
function Ads() {
  const text = {
   
    tex1:"You can now have Gwendolyn's elegant porcelain Fairytale Pixie Castle as a beautiful top to your cake for weddings, birthdays and anniversaries. Intricate detail with flowers, turrets, mini windows and doors adorned with roses will make any celebration shine. Also available in soft pink.",
    text2:"Gwendolyn's has partnered with Jean Charles Boisset (JCB) of the Boisset Wine Family to showcase their Rosé Sparkling Wine from the Burgundy valley in France. Celebrate life! Available for purchase in both shops and for delivery within the metro area of Indianapolis only.",
    text3:"This beautiful handmade glass Cake Bake Shop Swan surrounded by a beautiful floral wreath is hand painted with soft pastels of pink. Handmade in Poland, Gwendolyn's ornaments are the perfect decoration for your holiday tree, a keepsake or makes the perfect gift."
  }
  return (
    <div>
    <div className='hr'> </div>
    <div className='adc'>
    <div className='adcItem'>
    <img src="../../src/image/qc1.webp" /> 
    <h1>Fairytale Pixie Castle Cake Topper</h1>
    <p>{text.tex1}</p>
    <button>purchase your pixie castle topper here!</button>
    </div>
    <div className='adcItem'>
    <img src="../../src/image/qc2.webp" /> 
    <h1>Just Add Rosé Bubbles</h1>
    <p>{text.text2}</p>
    <button>purchase your rosé bubble here!</button>
    </div>
    <div className='adcItem'>
    <img src="../../src/image/qc3.webp" /> 
    <h1>Cake Bake Shop Custom Ornaments</h1>
    <p>{text.text3}</p>
    <button>purchase your ornaments here!</button>
    </div>
    </div>
    </div>
  )
}

export default Ads