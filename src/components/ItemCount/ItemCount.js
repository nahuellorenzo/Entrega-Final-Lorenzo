
export const ItemCount = ({ max, cont, setCont, disabled, setDisabled, handleAgregar }) => {

    const handleContador = () => {
        cont < max && setCont(cont + 1)
        if (Number(cont) === 1) {
            setDisabled(false)
        }
    }

    const hanldeRestar = () => {
        setCont(cont - 1)
        if (Number(cont) === 2) {
            setDisabled(true)
        }
    }

    return (
        <div class="flex flex-col items-center justify-center">
            <div class="flex items-center justify-center mb-4">
                <button class="text-2xl text-gray-700 hover:text-gray-900 focus:outline-none border border-solid border-gray-500 rounded-full h-10 w-10 flex items-center justify-center transition duration-300" onClick={hanldeRestar} disabled={disabled}>-</button>
                <p class="text-2xl font-bold mx-4">{max === 0 ? 0 : cont}</p>
                <button class="text-2xl text-gray-700 hover:text-gray-900 focus:outline-none border border-solid border-gray-500 rounded-full h-10 w-10 flex items-center justify-center transition duration-300" onClick={handleContador}>+</button>
            </div>
            {
                max !== 0 && <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300" onClick={handleAgregar}>Agregar al carrito</button>
            }
        </div>

    )
}