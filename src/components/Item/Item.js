
const Item = ( {item} ) => {

    return (

        <div className="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/4 xl:w-1/6 px-2">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}></img>
            <p>{item.precio}</p>
        </div>
    )
}

export default Item