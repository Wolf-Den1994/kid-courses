import { memo } from 'react';
import './styles.scss'

type TopicProps = {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}

const Topic = ({ tag, isActive, onClick }: TopicProps) => (
  <button
    className={`topic ${isActive ? 'topic_active' : ''}`}
    onClick={onClick}
  >
    {tag}
  </button>
)

export default memo(Topic, (prevProps, nextProps) => {
  return prevProps.isActive === nextProps.isActive;
});
