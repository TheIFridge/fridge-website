// react
import React, { useState } from 'react';
import Data from './Data';
import Card from './RecipeCard';
import Buttons from './RecipeButtons';
// import '../style/Recipes.css'

export default function Recipes() {
    const [item, setItem] = useState(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };
    
    return (
        <>
            <div>
                <div>
                    <h1>Recipe Filtering</h1>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <Card item={item} />
                </div>
            </div>
        </>
    )
}






// export default function Recepies() {


//   return (
//     <>
//       <div>
//         {/*filter buttons*/}
//         <Button variant="outline-primary" className="filterButton">Dairy Free</Button>
//         <Button variant="outline-primary" className="filterButton">Gluten Free</Button>
//         <Button variant="outline-primary" className="filterButton">Low Sugar</Button>
//         {/* Cards */}
//         <Row>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/227490_ButterChicken_large_810x570.jpg" />
//               <Card.Body>
//                 <Card.Title>Butter Chicken</Card.Title>
//                 <Card.Text>
//                   You forget about takeaways with this easy and delicious recipe for Butter Chicken! This curry favourite is easy to prepare and ready in 30 minutes.
//                 </Card.Text>
//                 <Button href="./Recipe" variant="primary">Recipe</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/227490_Herb-InfusedRoastLamb_large_810x570.jpg" />
//               <Card.Body>
//                 <Card.Title>Herb-Infused Roast Lamb</Card.Title>
//                 <Card.Text>
//                   But any day is perfect to try this recipe for Herb-Infused Roast Lamb, which is even better when seasoned the night before, to let those flavours really infuse.
//                 </Card.Text>
//                 <Button href="./Recipe" variant="primary">Recipe</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Large_751.jpg" />
//               <Card.Body>
//                 <Card.Title>Baked Salmon with Tomato Salsa and Crushed Potatoes</Card.Title>
//                 <Card.Text>
//                   This recipe for Baked Salmon with Tomato Salsa and Crushed Potatoes is a great way to get your omega-3s and is ready in just 30 minutes.
//                 </Card.Text>
//                 <Button href="./Recipe" variant="primary">Recipe</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//         <br></br>
//         <Row>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Roasted-Baby-Carrot-Salad-540.jpg" />
//               <Card.Body>
//                 <Card.Title>Roasted Baby Carrot Salad</Card.Title>
//                 <Card.Text>
//                   This Roasted Baby Carrot Salad and is ready in just 30 minutes.
//                 </Card.Text>
//                 <Button href="./Recipe" variant="primary">Recipe</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/Thai-Beef-and-Sweet-Potato-Curry540.jpg" />
//               <Card.Body>
//                 <Card.Title>Thai Beef Curry</Card.Title>
//                 <Card.Text>
//                   This Thai Beef and Sweet Potato Curry and is ready in just 30 minutes.
//                 </Card.Text>
//                 <Button href="./Recipe" variant="primary">Recipe</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Img variant="top" src="https://www.countdown.co.nz/Content/Recipes/bbq-corn-540.jpg" />
//               <Card.Body>
//                 <Card.Title>BBQ Corn</Card.Title>
//                 <Card.Text>
//                   This BBQ Corn is a great way to get your omega-3s and is ready in just 30 minutes.
//                 </Card.Text>
//                 <Button href="./Recipe" variant="primary">Recipe</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   )
// }