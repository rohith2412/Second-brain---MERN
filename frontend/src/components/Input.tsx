export function Input({onchange, placeholder}: {placeholder: string; onchange: () => void}) {
    return <div>
        <input placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2" onChange={onchange}/>
    </div>
}

