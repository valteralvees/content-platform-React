import {gql, useQuery} from "@apollo/client"
import {useEffect} from "react"
import {client} from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`


function App() {

  /* #1- Fazendo query sem aplicar ApolloProvider em volta da Main:
  useEffect(()=>{
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response =>{
      console.log(response.data)
    })
  },[])
  */

  return (
    <h1>Hello World!</h1>
  )
}

export default App
