'use client'
import MemberCard from '@/components/MemberCard'
import styles from './Service.module.css'
import thapa from '@/public/thapa.jpg'
import { useState } from 'react'


const Service = () => {
    console.log(thapa?.src)
    const [thapaImage, setThapaImage] = useState(thapa?.src)
    return (
        // <div className={styles.subheading}>Service</div>
        <div className='min-h-screen tacking-wider'>
            <div className=''>
                <div className='rounded p-3 mt-10'>
                    <div className='text-center text-2xl mb-6 '>
                        <h2 className='font-extrabold'>Our Team</h2>
                    </div>

                    <div className='grid grid-cols-8 sm:grid-cols-4  gap-8 mb-10'>
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                        <MemberCard image={thapaImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service