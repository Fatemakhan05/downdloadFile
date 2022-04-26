 import Axios from 'axios'
 import FileDownLoad from 'js-file-download'

function App() {
const download=(e)=>{
  e.preventDefault()
  Axios({
    url:"http://localhost:3000",
    method:"GET",
    responseType:"blob"
  }).then((res)=>{
    console.log(res)
    FileDownLoad(res.data,"downdloaded.png")
  })
}


  return (
    <div className="App">
       <button onClick={(e)=>download(e)}>Download</button>
    </div>
  );
}

export default App;
