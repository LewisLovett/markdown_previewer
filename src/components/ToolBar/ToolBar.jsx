import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFireFlameSimple,faMaximize } from '@fortawesome/free-solid-svg-icons'
  import './ToolBar.scss'

export default function ToolBar({title}){

    return(
        <div className='toolbar'>
            <div>
            (<FontAwesomeIcon icon={faFireFlameSimple} />)
            <h3 className='toolbar__title'>{title}</h3>
            </div>
            <FontAwesomeIcon icon={faMaximize} />
        </div>

    )
}