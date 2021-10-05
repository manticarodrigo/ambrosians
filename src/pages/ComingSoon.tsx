const ComingSoonPage = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundImage: `-webkit-image-set( url('/images/coming-soon/coming-soon_1400.jpg') 1x, url('/images/coming-soon/coming-soon.jpg') 2x)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    />
  );
};

export default ComingSoonPage;
