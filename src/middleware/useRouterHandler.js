import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../hooks/use-auth';
import { setCurrentUser } from '../slices/authSlice';
import { useState } from 'react';

const userRouterHandler =  () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { logout } = useAuth()
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const routerHandler = async () => {
    const userStored = JSON.parse(window.localStorage.getItem('user'))

    if(!userStored && !currentUser){
      await logout()
    }

    if(!currentUser && userStored){
      dispatch(setCurrentUser(userStored))
    }

    setIsLoading(false);
  }

  return{
    isLoading,
    routerHandler,
  }

}

export default userRouterHandler;
