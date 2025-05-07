const HeaderVideo = () => {
  return (
    <div className="w-full h-[60vh] overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/HqGpgHKPkes?autoplay=1&mute=1&loop=1&playlist=HqGpgHKPkes"
        title="Header Video"
        allow="autoplay"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default HeaderVideo;
