import CakeItems from './CakeItem/index' 
import './OderFromOurBakery.css'
import Title from './Title/index.jsx' 
import { listCake } from './ListCake';
function OderFromOurBakery(props) {
  

    const cakeData = props.listCake.map((listCake) =>  (<CakeItems
      key={listCake.id}
      listCake={listCake}/>));

  return (
    <div>
    <Title/>
    <div className='container'>
    {cakeData}
    </div>
    </div>
  )
}

export default OderFromOurBakery