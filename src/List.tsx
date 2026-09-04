import type { ReactNode } from 'react';
import { Fragment } from 'react';

interface ListProps<T> {
  items: T[] | null;
  renderItem: (item: T) => ReactNode;
  wrapList?: boolean;
}

export default function List<T extends { id: string; }>(
  { items, renderItem, wrapList = true }: ListProps<T>
) {

  const children = items?.map(item => <Fragment key={item.id}>
    {renderItem(item)}
  </Fragment>);

  return wrapList ?
    <section className="list">{children}</section> :
    <>{children}</>;
}