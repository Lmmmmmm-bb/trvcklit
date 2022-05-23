import { useEffect, useMemo, useState } from 'react';
import { ICheckItem, LocalKeysEnum } from '../models';
import { useSupa } from './useSupa';

export const useChecklist = (localKey: LocalKeysEnum) => {
  const excludeType = localKey === 'X_ME_CHECKLIST' ? 'you' : 'me';
  const supabase = useSupa();
  const [checklist, setChecklist] = useState<ICheckItem[]>(
    JSON.parse(localStorage.getItem(localKey) || '[]')
  );

  const category = useMemo<Record<string, ICheckItem[]>>(() => {
    const result = {};
    checklist.forEach((item) => {
      result[item.category]
        ? result[item.category].push(item)
        : (result[item.category] = [item]);
    });
    return result;
  }, [checklist]);

  const setCheckItem = (id: number) => {
    const newChecklist = checklist.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklist(newChecklist);
  };

  const fetchList = async () => {
    const { data } = await supabase
      .from<ICheckItem>('checklist')
      .select()
      .not('type', 'eq', excludeType);
    setChecklist(data ?? []);
  };

  useEffect(() => {
    checklist.length === 0 && fetchList();
  }, []);

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(checklist));
  }, [checklist]);

  return { category, setCheckItem };
};
