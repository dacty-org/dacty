import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

const SearchAndButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SearchForm = styled.input`
    font-size: 20px;
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 10px;
`

const RemoveAllButton = styled.button`
    width: 16%;
    height: 40px;
    background: #f54242;
    border: none;
    font-weight: 500;
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
`

const ContentTitle = styled.span`
    font-size: 27px;
    ${({ is_completed }) => is_completed && `
        opacity: 0.4;
    `}
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7px auto;
    padding: 10px;
    font-size: 25px;
`

const CheckedBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0 7px;
    color: green;
    cursor: pointer;
`

const UncheckedBox = styled.div`
    display: flex;
    align-items: center;
    margin: 0 7px;
    cursor: pointer;
`

const EditButton = styled.span`
    display: flex;
    align-items: center;
    margin: 0 7px;
`

function ContentList() {
    const [contents, setContents] = useState([])
    const [searchTitle, setSearchTitle] = useState('')

    useEffect(() => {
        axios.get('/api/v1/contents.json')
        .then(resp => {
            console.log(resp.data)
            setContents(resp.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

    const removeAllContents = () => {
        const sure = window.confirm('Are you sure?');
        if (sure) {
            axios.delete('/api/v1/contents/destroy_all')
            .then(resp => {
                setContents([])
            })
            .catch(e => {
                console.log(e)
            })
        }
    }

    const updateIsCompleted = (index, val) => {
        var data = {
            id: val.id,
            title: val.title
        }
        axios.patch(`/api/v1/contents/${val.id}`, data)
        .then(resp => {
            const newContents = [...contents]
            newContents[index].is_completed = resp.data.is_completed
            setContents(newContents)
        })
    }

    return (
        <>
            <h1>Content List</h1>
            <SearchAndButton>
                <SearchForm
                    type="text"
                    placeholder="Search content..."
                    onChange={event =>{
                        setSearchTitle(event.target.value)
                    }}
                />
                <RemoveAllButton onClick={removeAllContents}>
                    Remove All
                </RemoveAllButton>
            </SearchAndButton>
            
            <div>
                {contents.filter((val) => {
                    if(searchTitle === "") {
                        return val
                    } else if (val.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <Row key={key}>
                            {val.is_completed ? (
                                <CheckedBox>
                                    <ImCheckboxChecked onClick={() => updateIsCompleted(key, val) } />
                                </CheckedBox>
                            ) : (
                                <UncheckedBox>
                                    <ImCheckboxUnchecked onClick={() => updateIsCompleted(key, val) } />
                                </UncheckedBox>
                            )}
                            <ContentTitle>
                                {val.title}
                            </ContentTitle>
                            <Link to={"/contents/" + val.id + "/edit"}>
                                <EditButton>
                                    <AiFillEdit />
                                </EditButton>
                            </Link>
                        </Row>
                    )
                })}
            </div>
        </>
    )
}

export default ContentList