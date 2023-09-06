import ToolBar from "../../components/ToolBar/ToolBar";
import './EditorWrapper.scss';

export default function EditorWrapper(textAreaContent){


    return(
        <div className="editorWrapper">
            <ToolBar title={"Editor"}/>
            <textarea className="editorWrapper__textBox" id="editor">
            {textAreaContent}
            </textarea>

        </div>

    )
}