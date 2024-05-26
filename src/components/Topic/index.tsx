import './styles.scss'

type TopicProps = {
  tag: string;
  active: string;
  onClick: () => void;
}

const Topic = ({ tag, active, onClick }: TopicProps) => {
  const isActive = active === tag ? 'topic_active' : ''

  return (
    <button
      className={`topic ${isActive}`}
      onClick={onClick}
    >
      {tag}
    </button>
  )
}

export default Topic;
