import React from "react";

// const titles = [1, 2, 4, 5, 6, 7, 8, 9, 10]

// export default function Recipe() {

//     const [selected, updateSelect] = useState(1)

//     const onChange = (e) => updateSelect(Number(e.target.value))

//     return (
//         <Container className="p-3">
//             <select onChange={onChange}>
//                 {[1, 2, 3, 4, 5, 6].map(num => <option value={num}>{num}</option>)}
//             </select>
//             {titles.filter(n => n === selected).map(num => (
//                 <Card>
//                     <Card.Body>
//                         <Card.Title>{num}</Card.Title>
//                         <Card.Text>
//                             Text here.
//                         </Card.Text>
//                     </Card.Body>
//                 </Card>
//             )
//             )}
//         </Container>
//     );

// }

const RecipeCard = ({ item }) => {
  return (
    <>
      <div>
        <div>
          {item.map((Val) => {
            return (
              <div
                key={Val.id}
              >
                <div>
                  <img src={Val.img} alt={Val.title}  />
                </div>
                <div>
                  <div>
                    {Val.title};
                    {Val.price};
                  </div>
                  <div>{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default RecipeCard;