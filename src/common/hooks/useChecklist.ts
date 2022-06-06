import { useEffect, useMemo, useState } from 'react';
import { Toast } from '@douyinfe/semi-ui';
import { useSupa, useNetwork } from '.';
import { ICheckItem, LocalKeysEnum } from '../models';
import { getLocalItem, setLocalItem } from '../utils';

export const useChecklist = (localKey: LocalKeysEnum) => {
  const excludeType = localKey === LocalKeysEnum.Me ? 'you' : 'me';
  const supabase = useSupa();
  const isOnLine = useNetwork();
  const [isFetching, setIsFetching] = useState(false);
  const [checklist, setChecklist] = useState<ICheckItem[]>(
    JSON.parse(getLocalItem(localKey, '[]'))
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
    setIsFetching(true);
    try {
      const { data } = await supabase
        .from<ICheckItem>('checklist')
        .select()
        .not('type', 'eq', excludeType);
      setChecklist(data ?? []);
    } catch (err) {
      Toast.error('获取列表失败，请稍后重试');
    } finally {
      setIsFetching(false);
    }
  };

  const updateChecklist = () => {
    if (isOnLine) {
      fetchList();
    } else {
      const resetChecklist = checklist.map((item) => ({
        ...item,
        checked: false
      }));
      setChecklist(resetChecklist);
    }
  };

  useEffect(() => {
    checklist.length === 0 && fetchList();
  }, []);

  useEffect(() => {
    setLocalItem(localKey, JSON.stringify(checklist));
  }, [checklist]);

  return { category, isFetching, setCheckItem, refresh: updateChecklist };
};
