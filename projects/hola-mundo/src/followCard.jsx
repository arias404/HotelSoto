import { useState } from "react"

export function FollowCard({ userName = `@unkunow`, name}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? `Siguiendo` : `Seguir`
    const buttonClassName = isFollowing ? `tw-followCard-button is-following` : `tw-followCard-button`

    const handleCase = () =>{
        setIsFollowing(!isFollowing)

    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>               
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleCase}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollowing">Dejar de Seguir</span>
                </button>   
            </aside>
        </article>
    )
}

