import UpperBar from '@/components/upperBar'
import React from 'react'
import PatientLoginPage from '@/components/patientLoginPage'

function PLoginPage() {
    return (
        <>
            <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
                {/* 상단 바 */}
                <UpperBar />

                {/* 중앙 박스 컨테이너 */}
                <PatientLoginPage />
            </div>
        </>
    )
}
export default PLoginPage
