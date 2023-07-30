'use client'
import { ContextApp } from '@/context/context'
import React, { useContext, useEffect, useState } from 'react'

export const FormSearch = () => {
    const {searchAnime} = useContext(ContextApp)
    const [inputSearch, setInputSearch] = useState('')
    const handleOnSubmitForm = (e) => {
        e.preventDefault()
        searchAnime(inputSearch)
    }

    return (
        <div className='form-search my-5 rounded-3xl overflow-hidden bg-[rgba(255,255,255,0.1)] shadow-lg backdrop-saturate-50 backdrop-blur-3xl box-shadow-custom'>
            <form onSubmit={handleOnSubmitForm} className='flex justify-between'>
                <input  className={`appearance-none w-full outline-none px-5 py-3 rounded-3xl text-base text-white font-normal bg-transparent`} type='text' placeholder='Search favorite anime' name='search' id='search' onChange={(e)=> {setInputSearch(e.target.value)}} value={inputSearch}/>
                <button className={`appearance-none w-auto px-6 py-3 text-base bg-[#0072f5] text-white rounded-3xl font-normal`} onClick={handleOnSubmitForm}>Search</button>
            </form>
        </div>
    )
}
