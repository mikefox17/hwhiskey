import { useContext } from 'react'
import { DramContext } from '../dramContext'
import { UserContext } from '../UserContext'

const Dashboard = () => {
    const drams = useContext(DramContext)
    const msg = useContext(UserContext)

    return (
        <div>
            <h1>{msg}</h1>
            <ul>
                {drams.map(dram => (
                    <li key={dram._id}>{dram.dramName}</li>
                ))}
            </ul>
        </div>
    )
}
export default Dashboard
