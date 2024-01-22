import React from 'react'
import profilePic from '../../assets/profilepic.jpg'
import notification from '../../assets/notification.png'
import transmonitor from '../../assets/TransMonitor.png'
import {
    DashCon,
    DashText,
    DashSearch,
    DashContent,
    PaymentLinkContainer,
    PaymentLinkSubtitle,
    NotificationBar,
    NameContainer,
    ProfilePicCon,
    NameSubtitle,
    NameTag,
    EmailTag,
  } from "./dashboardnavbar.styles";
  import { IoIosSearch } from "react-icons/io";



const index = () => {
  return (
 <PaymentLinkContainer >
    <DashContent>
          <DashCon>
                <img src={transmonitor} alt="mintlogo" />
                <DashSearch>
                    <IoIosSearch /> <input type="text" placeholder="Search" />
                </DashSearch>
        </DashCon>
    </DashContent>
      
    <PaymentLinkSubtitle>
       
        <DashText>
            <span>Support</span>
            <span>FAQ</span>
        </DashText>
          
        <NotificationBar>
          <img src={notification} alt="notification-icon" />
        </NotificationBar>
     
        <NameContainer>
         
          <NameSubtitle>

            <EmailTag>Hello</EmailTag>
            <NameTag>Olawaleke Ojo</NameTag>
          </NameSubtitle>
          <ProfilePicCon>
            <img src={profilePic} alt="" />
          </ProfilePicCon>
        </NameContainer>
    </PaymentLinkSubtitle>
   
  </PaymentLinkContainer >
  )
}

export default index
