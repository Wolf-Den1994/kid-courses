import './styles.scss'

type TopicProps = {
  tag: string;
  active: string;
}

const Topic = ({ tag, active }: TopicProps) => {
  const isActive = active === tag ? 'topic_active' : ''

  return (
    <button className={`topic ${isActive}`}>
      {tag}
    </button>
  )
}

export default Topic;
