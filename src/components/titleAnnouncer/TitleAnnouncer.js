import { useState, useEffect, createRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function TitleAnnouncer(props){
    const [title, setTitle] = useState('')
    const titleRef = createRef()
    const { pathname } = useLocation()
    const onHelmetChange = ({ title }) => setTitle(title)
  
    useEffect(() => {
      if (titleRef.current) titleRef.current.focus()
    }, [pathname])

    return(
        <>
            <p tabIndex={-1} ref={titleRef} className='sr-only'>
                {title}
            </p>

            <Helmet onChangeClientState={onHelmetChange} />
        </>
    )
}