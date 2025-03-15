import { Routes, Route } from 'react-router-dom';
import CreateGroupGoal from './Components/CreateGroupGoal'
import Profile from './Components/Profile'
import Register from './Components/Register'
import Search from './Components/Search'
import Login from './Components/Login';
import { AuthProvider } from './AuthenticationContext';
import Group from './Components/Group';
import HomeScreen from './Components/HomeScreen';
import ProductScreen from './Components/ProductScreen';
import Cart from './Components/Cart'
import { GroupProvider } from './purchaseContext';

function App() {
  return (
    <AuthProvider>
      <GroupProvider>
      <Routes>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/' element={<HomeScreen />} />
        
          <Route path='/group' element={<Group />} />
        
        
        <Route path='/productScreen' element={ <ProductScreen/>} />
      <Route path='/createGroupGoal' element={<CreateGroupGoal />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/search' element={ <Search/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login/> } />
        </Routes>
      </GroupProvider>
    </AuthProvider>
  )
}

export default App
