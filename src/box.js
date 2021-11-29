export default function Box({value, handleClick, content}) {

  return <button
            className="box"
            onClick={!content ? handleClick : undefined}
            value={value}
         >
            {content}
         </button>
}