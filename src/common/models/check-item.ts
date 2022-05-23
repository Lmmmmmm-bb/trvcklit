export type CheckItemType = 'common' | 'you' | 'me';

export interface ICheckItem {
  id: number;
  name: string;
  type: CheckItemType;
  category: string;
  checked: boolean;
}
