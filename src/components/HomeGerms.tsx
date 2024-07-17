interface germsProps {
    topPositions: number[];
    leftPositions: number[];
    axisX: number | string;
    axisY: number | string;
}
const HomeGerms: React.FC<germsProps> = ({ topPositions, leftPositions,axisX,axisY }) => {
  return (
    <div className="home__germs" style={{position: 'absolute', top: axisY, left: axisX }}>
      {topPositions.map((top, index) => (
        <span
          key={index}
          className="home__germs--content"
          style={{
            top: `${top}px`,
            left: `${leftPositions[index]}px`,
            animationDelay: `${index * 0.1}s`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default HomeGerms;
