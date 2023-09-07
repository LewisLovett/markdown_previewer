import ToolBar from "../../components/ToolBar/ToolBar";
import './PreviewWrapper.scss'

export default function PreviewWrapper(textAreaContent){


    return(
        <div className="previewWrapper">
            <ToolBar title={"Previewer"} />
            <textarea className="previewWrapper__textBox" id="preview">
                {textAreaContent}
            </textarea>
        </div>
    )
}