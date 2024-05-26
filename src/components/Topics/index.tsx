import { useState } from 'react';
import Topic from '../Topic';
import { ALL } from '../../helpers/constants';
import './styles.scss'

type TopicsProps = {
  allTags: string[];
}

const Topics = ({ allTags }: TopicsProps) => {
  const [activeTag, setActiveTag] = useState(ALL);

  return (
    <div className="topics">
      {allTags.map((tag) => (
        <Topic key={tag} tag={tag} active={activeTag} />
      ))}
    </div>
  )
}

export default Topics;
