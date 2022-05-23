import { useEffect, useState } from 'react';
import { ICheckItem } from '../models';
import { useSupa } from './useSupa';

export const useChecklist = () => {
  const supabase = useSupa();
  const [checklist, setChecklist] = useState<ICheckItem[]>(
    JSON.parse(localStorage.getItem('checklist') || '[]')
  );

  const setCheckItem = (id: number) => {
    const newChecklist = checklist.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklist(newChecklist);
  };

  const fetchList = async () => {
    const { data } = await supabase.from<ICheckItem>('checklist').select();
    setChecklist(data ?? []);
  };

  useEffect(() => {
    checklist.length === 0 && fetchList();
  }, []);

  useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(checklist));
  }, [checklist]);

  return { checklist, setCheckItem };
};
