import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

const ContentList = () => {
    const [contents, setContents] = useState([])
    // const [searchName, setSearchName] = useState('')

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

    return (
        <>
            {contents.map((val, key) => (
                <div key={key}>
                    {val.title}
                </div>
            ))}
        </>
    )
}

export default ContentList
