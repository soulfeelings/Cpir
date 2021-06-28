import React from 'react'
import { useSelector } from 'react-redux';
import Account from '../../views/Account';
import Engineer from '../../components/Engineer/Engineer'
import ManagerPage from '../ManagerPage/ManagerPage';




export default function Profile() {


  const status = useSelector(state => state.user.status);
  return (
    <>
      {
        status === "client" && <Account/>
      }
            {
        status === "manager" && <ManagerPage/>
      }
            {
        status === "engineer" && <Engineer/>
      }
    </>
  )
}
