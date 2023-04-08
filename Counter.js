function Counter(){
    const handClick=() => {
    console.log( 'clicked');
    }
    const handleChange=()=>{
    console.log('changed');
    }
    return(
    <>
    <button onClick={handClick}>Click Me</button>
    <br />
    <br />
    <input type={'text'} onChange={handleChange} />
    </>
    )
    }
    export default Counter;