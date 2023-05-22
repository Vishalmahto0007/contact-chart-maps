import React from 'react'


interface HeaderProps {
    isShowMaps: boolean,
    setIsShowMaps: (el: boolean) => void
}


function Header(props: HeaderProps) {
    const { setIsShowMaps, isShowMaps } = props;

    return (
        <div className="flex justify-center m-8">
            <div className="flex" >
                <button className={`block text-black border font-bold py-2 px-4  ${!isShowMaps && "bg-gray-200"} pointer`} onClick={() => setIsShowMaps(false)}>Graph</button>
                <button className={`block text-black border font-bold py-2 px-4 ${isShowMaps && "bg-gray-200"}`} onClick={() => setIsShowMaps(true)}> Maps</button>
            </div>

        </div>

    )
}


export default Header;