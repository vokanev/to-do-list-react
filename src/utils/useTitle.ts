import {useState, useEffect} from 'react';

function useTitle() {
  const [title, setTitle] = useState(JSON.parse(
      localStorage.getItem('title') || JSON.stringify(['Список дел'])))

  useEffect(
      () => {localStorage.setItem('title', JSON.stringify(title))}, [title])

  return [title, setTitle]
}

export {useTitle}