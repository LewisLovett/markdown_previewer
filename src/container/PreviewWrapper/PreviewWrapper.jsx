import ToolBar from "../../components/ToolBar/ToolBar";
import './PreviewWrapper.scss'

export default function PreviewWrapper({content}){


    return(
        <div className="previewWrapper">
            <ToolBar title={"Previewer"} />
            <div className="previewWrapper__content" id="preview">
                {content}
            </div>
        </div>
    )
}