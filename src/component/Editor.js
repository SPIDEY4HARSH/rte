import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../Editor.css'

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newState) => {
        setEditorState(newState);
    };

    return (
        <div style={{ margin: "2vh 0" }}>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="demo-wrapper"
                editorClassName="my-custom-editor-class "
                toolbarClassName="toolbar-class  toolbar  "
                toolbarStyle={{ backgroundColor: "#f8f8f8", display: "flex", columnGap: "50px" }}
                editorStyle={{ minHeight: "80vh", padding: "8px" , border:"1px solid rgb(194, 190, 190)" }}
            />
        </div>
    );
};

export default RichTextEditor;
