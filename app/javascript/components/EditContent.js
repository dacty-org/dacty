import React, { useState, useEffect } from "react"
import axios from 'axios'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const InputTitle = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
  margin: 12px 0;
`

const CurrentStatus = styled.div`
  font-size: 19px;
  margin: 8px 0 12px 0;
  font-weight: bold;
`

const IsCompeletedButton = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  background: #f2a115;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

const EditButton = styled.button`
  color: white;
  font-weight: 500;
  font-size: 17px;
  padding: 5px 10px;
  margin: 0 10px;
  background: #0ac620;
  border-radius: 3px;
  border: none;
`

const DeleteButton = styled.button`
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  padding: 5px 10px;
  background: #f54242;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

toast.configure()

function EditContent(props) {
    const initialContentState = {
        id: null,
        title: "",
        is_completed: false
    };

    const [currentContent, setCurrentContent] = useState(initialContentState);

    const notify = () => {
        toast.success("Content successfully updated!", {
          position: "bottom-center",
          hideProgressBar: true
        });
    }
    

    // idが引数
    const getContent = id => {
        axios.get(`/api/v1/contents/${id}`)
        .then(resp => {
            setCurrentContent(resp.data);
        })
        .catch(e => {
            console.log(e)
        });
    };

    useEffect(() => {
        getContent(props.match.params.id);
        console.log(props.match.params.id)
      }, [props.match.params.id]);

    const handleInputChange = event => {
        const { title, value } = event.target;
        setCurrentContent({ ...currentContent, [title]: value });
    };

    const updateIsCompleted = val => {
        var data = {
            id: val.id,
            title: val.title,
            is_completed: !val.is_completed
        }
        axios.patch(`/api/v1/contents/${val.id}`, data)
        .then(resp => {
            setCurrentContent(resp.data);
        })
    };

    const updateContent = () => {
        axios.patch(`/api/v1/contents/${currentContent.id}`, currentContent)
        .then(resp => {
            notify();
            console.log(resp.data);
            props.history.push('/contents');
        })
        .catch(e => {
            console.log(e)
        });
    };

    const deleteContent = () => {
        const sure = window.confirm('Are you sure?');
        if (sure) {
            axios.delete(`/api/v1/contents/${currentContent.id}`)
            .then(resp => {
                console.log(resp.data);
                props.history.push(`/contents`);
            })
            .catch(e => {
                console.log(e)
            });
        }
    };

    return (
        <>
            <h1>Editing Content</h1>
            <div>
                <div>
                    <label htmlFor="title">Current title</label>
                    <InputTitle
                    type="text"
                    title="title"
                    value={currentContent.title}
                    onChange={handleInputChange}
                    />
                    <div>
                        <span>Current Status</span><br/>
                        <CurrentStatus>
                            {currentContent.is_completed ? "Completed" : "Uncompleted" }
                        </CurrentStatus>
                    </div>
                </div>
                {currentContent.is_completed ? (
                    <IsCompeletedButton onClick={() => updateIsCompleted(currentContent)}>
                    Uncompleted
                    </IsCompeletedButton>
                ) : (
                    <IsCompeletedButton onClick={() => updateIsCompleted(currentContent)}>
                    Completed
                    </IsCompeletedButton>
                )}
                <EditButton onClick={updateContent}>
                    Update
                </EditButton>
                <DeleteButton onClick={deleteContent}>
                    Delete
                </DeleteButton>
            </div>
        </>
    );
};

export default EditContent