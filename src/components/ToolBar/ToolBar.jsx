import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faFireFlameSimple,faMaximize } from '@fortawesome/free-solid-svg-icons'

export default function ToolBar({title}){

    return(
        <div className="toolbar">
            <FontAwesomeIcon icon={faFireFlameSimple} />
            <h1>{title}</h1>
            <FontAwesomeIcon icon={faMaximize} />
        </div>

    )
}