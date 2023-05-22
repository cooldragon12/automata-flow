

const MenuOptions = () => {
    return (
        <>
            <div> 
                <input type="checkbox" id="menu-toggle" className="hidden" />
                <label htmlFor="menu-toggle" className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none">
                    <span className="navicon bg-gray-800 flex items-center relative"></span>
                </label>
                
            </div>
        </>
    )

}

export default MenuOptions;