import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const handleChange = (e) =>{
    setSelectedFile(e.target.files[0])
    setIsFilePicked(true)
  }

  const handleSubmit=()=>{
    console.log("this is just a console log")
    setIsFilePicked(false)
  }
  
  return (
    <div className="App">
      <h1 className="title"><img src={"./logo4.png"} width="100px" height="35px"></img> Hackathon</h1>
      <div className="border">
      <h2 className="team">TEAM B</h2>
      <p className="names">Maxwell Hostetter, Kirby Chen, Keith Williams, Timmy Roma</p>
      </div>
      <br></br>
      <br></br>
      <input type="file" name="file" onChange={handleChange}/>
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>FileType: {selectedFile.type}</p>
          <p>File Size: {selectedFile.size}</p>
        </div>  
        
      ): (<p className="file">Please Select a File</p>)}
      <div>
        <button className="button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default App;
