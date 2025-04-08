// import "../styles.css";

export default function Modal(props) {
    return (
      <div
        tabIndex="-1"
        className="overflow-hidden fixed z-50 flex justify-center items-center w-full inset-0 h-auto max-h-full bg-opacity-50 bg-black"
      >
        <div className="relative w-full max-w-2xl rounded-lg bg-mainbg "> {/* This is the block */}
  
          <div className="relative flex flex-row justify-between items-center mx-4 py-4 pl-8 bg-mainbg border-b border-sborder"> {/* This is the header */}
              <div className="w-full rounded-lg text-white">
                {props.title}
              </div>
              <button
                type="button"
                className="text-white bg-transparent hover:bg-red-600 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                onClick={() => props.onExit(false)}
              >
                X
              </button>
          </div>
            <div className="text-white max-h-[60vh] overflow-auto">
              {props.children}
            </div>
            <div className="p-2 rounded-b bg-sborder text-black font-semibold text-center">{props.note}</div>
        </div>
  
      </div>
    );
  }