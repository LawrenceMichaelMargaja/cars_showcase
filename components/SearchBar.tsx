"use client";

import { useState } from "react";

import { SearchManufacturer } from ".";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SearchButton = ({
  otherClasses
}: {otherClasses: string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({
  setManufacturer,
  setModel
}: any) => {

  const [searchManufacturer, setSearchManufacturer] = useState('');

  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // prevents the browser from refreshing when we submit the form 

    if(searchManufacturer === '' && searchModel === '') {
      return alert("Please fill in the search bar.");
    }

    setManufacturer(searchManufacturer);
    setModel(searchModel);

    // for server side rendering

    // updateSearchParams(searchModel.toLocaleLowerCase(), searchManufacturer.toLocaleLowerCase());
  }

  // const updateSearchParams = (searchModel: string, searchManufacturer: string) => {

  //   const searchParams = new URLSearchParams(window.location.search)

  //   if(searchModel) {
  //     searchParams.set('searchModel', searchModel)
  //   } else {
  //     searchParams.delete('searchModel')
  //   }

  //   if(searchManufacturer) {
  //     searchParams.set('searchManufacturer', searchManufacturer)
  //   } else {
  //     searchParams.delete('searchManufacturer')
  //   }

  //   const newPathName = `${window.location.pathname}?${searchParams.toString()}`

  //   router.push(newPathName)
  // }

  return (
    <form className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searchbar__item'>
        <SearchManufacturer 
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            alt="car model"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            name="model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
          <SearchButton otherClasses="max-sm:hidden" />
        </div>
    </form>
  )
}

export default SearchBar