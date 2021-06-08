import React, {Fragment} from 'react';
import Provider from "./provider.js";
import Context from "./context.js";

const Laugh = ()=>{
  return(
    <div>
       <h1>I am Laughing</h1>
       <Sing />
    </div>
  )
}


const Sing =()=>{
  return(
    <div>
       <h1>I am Singing</h1>
       <Dance />
    </div>
  )
}


const Dance =()=>{
  return(
    <div>
      
       <h1>I am Dancing</h1>
       <Smile />
    </div>
  )
}

const Smile =()=>{
  
 return(
       <Context.Consumer>
          {
            (context)  => (
              <Fragment> 
                <h1> Accesing Values</h1>
                <p> Name of Cricketer is: {context.data.name}  </p>
                <p> Sachin highest Score is: {context.data.highestScore}</p>
                <button onClick={context.updateHighScore}> Update Highest Score  </button>
                <p> Sachin Retirement Status: {context.data.retired}</p>
                <button onClick={context.updateRetirement}> Click Here to check  </button>
              </Fragment>

            )

          }
         
        </Context.Consumer>  
)

  
}



const App =()=>{
  return(
    <div>
       <h1>I am App</h1>
       <Provider>
          <Laugh />
       </Provider>
    </div>
  )
}

export default App;

