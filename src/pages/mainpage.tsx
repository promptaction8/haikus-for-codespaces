import React from 'react'
import EmployeeLoginPage from '@/components/employeeloginpage'
import UpperBar from '@/components/upperbar'
import { IoIosLogIn } from 'react-icons/io'
import LoginBox from '@/components/loginpagecomponents/loginbox'

function MainPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 상단 바 */}
                <UpperBar />

                {/* 중앙 박스 컨테이너 */}
                <LoginBox />
            </div>
        </>
    )
}

export default MainPage
