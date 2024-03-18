import ContentLoader from "react-content-loader";

const Shimmer = () => {
  return (
    <ContentLoader viewBox="0 0 470 220">
      {/* First row */}
      <rect x="10" y="10" rx="10" ry="10" width="100" height="80" />
      <rect x="130" y="10" rx="10" ry="10" width="100" height="80" />
      <rect x="250" y="10" rx="10" ry="10" width="100" height="80" />
      <rect x="370" y="10" rx="10" ry="10" width="100" height="80" />

      {/* Second row */}
      <rect x="10" y="110" rx="10" ry="10" width="100" height="80" />
      <rect x="130" y="110" rx="10" ry="10" width="100" height="80" />
      <rect x="250" y="110" rx="10" ry="10" width="100" height="80" />
      <rect x="370" y="110" rx="10" ry="10" width="100" height="80" />
    </ContentLoader>
  );
};

export default Shimmer;
