import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {

    const {progress} = useProgress();

  return (
    <Html
    as="div"
    center 
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }}
    >
        <span className="canvas-loader"/>
        <p>
            {
                progress !== 0 ? `${progress.toFixed(2)}%` : "loading..."
            }
        </p>
    </Html>
  )
}

export default CanvasLoader