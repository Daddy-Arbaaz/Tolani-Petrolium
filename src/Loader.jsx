import loaderVideo from "./assets/loader.mp4";

function Loader({ setLoading }) {
  return (
    <div className="loader-container">
      <video
        src={loaderVideo}
        autoPlay
        muted
        playsInline
        onEnded={() => setLoading(false)}
        className="loader-video"
      />
    </div>
  );
}

export default Loader;
