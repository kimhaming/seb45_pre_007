import React, { useState } from 'react';
import { styled } from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AskEditAside from './askEditAside/AskEditAside.jsx';

const AskEditBody = ({ modules, isFocus, setIsFocus }) => {
  const dummyText =
    'Lorem ipsum dolor sit amet consectetur. Facilisi nunc vestibulum laoreet facilisis amet sapien. Turpis eleifend facilisis sed porttitor dui pharetra eget morbi erat. Eget sagittis amet suspendisse porttitor. Sem venenatis id dignissim elementum amet elementum nullam. Nullam egestas amet sit ac suspendisse eget justo. Pretium adipiscing id dignissim lorem lectus cras pellentesque. Condimentum vitae proin bibendum dignissim. Tortor amet aliquam eu tortor lacus eget a turpis fermentum. Consectetur luctus egestas viverra eget amet dui.';
  const [content, setContent] = useState(dummyText);
  const handleChangeContent = (newContent) => {
    setContent(newContent);
  };

  return (
    <AskEditBodyLayout>
      <AskEditBodyBox>
        <AskEditBodyText>Body</AskEditBodyText>
        <AskEditBodyLists onClick={() => setIsFocus(1)}>
          <ReactQuill
            modules={modules}
            value={content}
            onChange={handleChangeContent}
          />
        </AskEditBodyLists>
        <AskEditBodyPreviewBox onChange={handleChangeContent}>
          <AskEditBodyPreview
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </AskEditBodyPreviewBox>
      </AskEditBodyBox>
      <AsideBox>
        <AskEditAside isFocus={isFocus} index={1} />
      </AsideBox>
    </AskEditBodyLayout>
  );
};

export default AskEditBody;

const AskEditBodyLayout = styled.div`
  display: flex;
`;

const AskEditBodyLists = styled.div`
  display: flex;
  width: 100%;

  .quill {
  }
`;

const AskEditBodyBox = styled.div``;

const AsideBox = styled.div`
  position: relative;
`;

const AskEditBodyText = styled.div`
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #0c0d0e;

  margin: 2px 0 8px 0;
  padding: 0 2px;
`;

const AskEditBodyPreviewBox = styled.div`
  width: 100%;
  margin: 0 0 16px;
`;

const AskEditBodyPreview = styled.div`
  height: 70%;
  font-size: 15px;
  line-height: 1.5;
`;

// const StyledReactQuill = styled(ReactQuill)`
//   border-radius: 8px;
//   height: 200px;
// `;
