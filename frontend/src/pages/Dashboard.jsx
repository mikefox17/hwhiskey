import { useContext } from 'react'
import { DramContext } from '../dramContext'

const Dashboard = () => {
    const drams = useContext(DramContext)

    return (
        <div>
            <ul>
                {drams.map(dram => (
                    <li key={dram._id}>{dram.dramName}</li>
                ))}
            </ul>
        </div>
    )
}
export default Dashboard
