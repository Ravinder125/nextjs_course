import MemberCard from '@/components/MemberCard'
import styles from './Service.module.css'
import thapa from '@/public/thapa.jpg'

// Customized metadata
export const metadata = {
    title: "Services",
    description: "This is actually customized meta tag for Services page",
    authors: [
        { name: "Thapa Technical" },
        { name: "Ravinder", url: "localhost:3000" },
    ],
    keywords: ["nextjs", "reactjs", "fullstack"],
    icons: {
        icon: "/images/kodyfier.png"
    }

}


const Service = () => {
    return (
        // <div className={styles.subheading}>Service</div>
        <div className='min-h-screen tacking-wider'>
            <div className=''>
                <div className='rounded p-3 mt-10'>
                    <div className='text-center text-2xl mb-6 '>
                        <h2 className='font-extrabold'>Our Team</h2>
                    </div>

                    <div className='grid grid-cols-8 sm:grid-cols-4  gap-8 mb-10'>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
                                <MemberCard key={idx} image={thapa} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service