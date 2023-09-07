import ToolBar from "../../components/ToolBar/ToolBar";
import './EditorWrapper.scss';

export default function EditorWrapper({textAreaContent,setEditorText}){

    function handleChange(event){
    
        setEditorText(event.target.value);
      
    }

    return(
        <div className="editorWrapper">
            <ToolBar title={"Editor"}/>
            <textarea className="editorWrapper__textBox" id="editor" defaultValue={textAreaContent} onChange={handleChange}/>
            
        

        </div>

    )
}