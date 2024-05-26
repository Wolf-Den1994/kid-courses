import Topic from '../Topic';
import './styles.scss'

type TopicsProps = {
  allTags: string[];
  activeTag: string;
  onClickTag: (tag: string) => void;
}

const Topics = ({ allTags, activeTag, onClickTag }: TopicsProps) => {
  return (
    <div className="topics">
      {allTags.map((tag) => (
        <Topic
          key={tag}
          tag={tag}
          active={activeTag}
          onClick={() => onClickTag(tag)}
        />
      ))}
    </div>
  )
}

export default Topics;
