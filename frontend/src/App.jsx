import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { Container } from "react-bootstrap"



 const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
      
    
    </>
  )
}

export default App
