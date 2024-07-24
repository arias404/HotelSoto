import './app.css'
import { FollowCard } from './followCard'

export function App () {
    return(
        <div className='App'>
            <FollowCard  userName="midudev" name="Miguel Nosedin" />
            <FollowCard  userName="pheralb" name="Pablo Hernandez" />
            <FollowCard  userName="elonmusk" name="Elon Musk" />
            <FollowCard  userName="vxnder" name="vanderhart" />
        </div>
        
    )
}