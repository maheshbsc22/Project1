
function Header() {
    const items=['Soap', 'shampoo', 'moong Dhaal', 'Thoor dhaal', 'Vegetables'];
    return (<>
        <h2>My Shop List</h2>
        <ul>
        {items.map((item,index)=> {
        return (<li>{item} - {index}</li>);
        })
       } </ul>
        
        </>)

        }
        export default Header;
