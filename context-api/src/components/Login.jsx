import useAuth from "../hooks/useAuth"

const Login = () => {

    const { setIsLoggedIn, loggedIn } = useAuth()

  return (
    <div>
      <button onClick={()=> setIsLoggedIn(prev=> !prev) }>{loggedIn ? 'logout' : 'login'}</button>
    </div>
  )
}

export default Login
