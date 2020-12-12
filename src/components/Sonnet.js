export default function Sonnet(props) {
  const {poem} = props
  return (
    <div className="sonnet-output">
      <h3> {poem.title} </h3>
      <div className="stanza">
        {poem.lines.map((line) => (
          <p key={line}> {line} </p>
        ))}
      </div>
    </div>
  );
}
