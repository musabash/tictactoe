export default function Box({value, handleClick, content}) {    

  return <button
            className="box"
            onClick={handleClick}
            value={value}
         >
            {content}
         </button>
}
