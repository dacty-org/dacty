import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiSend } from 'react-icons/fi'

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const InputTitle = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
`

const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: default;
  `}
`

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`
toast.configure()

function AddContent(props) {
    const initialContentState = {
        id: null,
        title: "",
        is_completed: false
    };

    const [content, setContent] = useState(initialContentState);

    const notify = () => {
        toast.success("Content successfully created!", {
            position: "bottom-center",
            hideProgressBar: true
        });
    };

    const handleInputChange = event => {
        const { title, value } = event.target;
        setContent({ ...content, [title]: value });
    };
    
    const saveContent = () => {
        var data = {
            title: content.title
        };

        axios.post('/api/v1/contents', data)
        .then(resp => {
            setContent({
                id: resp.data.id,
                title:resp.data.title,
                is_completed: resp.data.is_completed
            });
            // フラッシュメッセージ
            notify();
            // リダイレクト
            props.history.push('/contents');
        })
        .catch(e => {
            console.log(e)
        })
    };

    return (
        <>
            <h1>New Content</h1>
            <InputAndButton>
                <InputTitle
                type="text"
                required
                value={content.title}
                title="title"
                onChange={handleInputChange}
                />
                <Button
                    onClick={saveContent}
                    disabled={(!content.title || /^\s*$/.test(content.title))}
                >
                    <Icon>
                        <FiSend />
                    </Icon>
                </Button>
            </InputAndButton>
        </>
    )
}

export default AddContent
