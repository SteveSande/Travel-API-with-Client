export default function NavItem(props) {
  return (
    <button
      onClick={props.clickHandler}
      className="w-60 text-center bg-yellow-200 border-2 border-black rounded m-5 p-1"
    >
      {props.text}
    </button>
  );
}
