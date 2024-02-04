import React from 'react'
import { Container } from '../components/Container.jsx'
// import { ProfileCard } from '../components/ProfileCard.jsx'
import { Profile } from '../components/Profile.jsx' 
import { LeftSection } from '../components/LeftMenu.jsx'
import { Wrapper } from '../components/Wrapper.jsx'
import { RightSection } from '../components/RightSection.jsx'
export const ProfileInfo = () => {
  return (
    <>
    <LeftSection />
   <Wrapper>
    <Profile/>
   </Wrapper>
    <Wrapper className="w-[35%]">
    <RightSection/>
    </Wrapper>
    </>
  )
}
