// import React from "react"
// import Navbar from "./Navbar"
// import Main from "./Main"


// export default function App(){
//     return (
//         <div>
//         <Navbar/>
//         <Main/>
//         </div>
//     )
// }

// React Facts

import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

export default function App() {

    const cards = data.map(item=>{
        return(
          
            <Card 
                key={item.id}
                item={item}
                
            />
        )
    })

    return(
        <div>
            <Navbar/>
            <Hero/>
            <section className="card-list">
            {cards}
            </section>
        </div>
    )
}



